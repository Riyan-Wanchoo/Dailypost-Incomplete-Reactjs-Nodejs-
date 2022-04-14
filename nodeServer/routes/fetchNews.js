const express = require("express")
const News = require("../models/News")
const Stories = require("../models/Stories")
const router = express.Router()
// const fs = require('fs')

//can Change const
const chooseNews = 19

router.get('/', async (req, res)=>{
    const filter = {}
    const allNews = await News.find(filter).sort({_id: -1})

    let topNews = []
    let latestNews = []
    let mal = []
    for (let index = 0; index < chooseNews; index++) {
        if (index>=0 && index<=4) {
            latestNews.push(allNews[index])
        }
        else if (index>4 && index<=14) {
            topNews.push(allNews[index])
        }
        else if (index>14) {
            mal.push(allNews[index])
        }
    }

    const stories = await Stories.find(filter)

    const allData = {
        topNews: topNews,
        latestNews: latestNews,
        mal: mal,
        stories: stories
    }
    res.json(allData)
})

module.exports = router