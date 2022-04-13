const express = require("express")
const News = require("../models/News")
const Stories = require("../models/Stories")
const router = express.Router()
// const fs = require('fs')

//can Change const
const chooseNews = 16
const breakNews = 11

router.get('/', async (req, res)=>{
    const filter = {}
    const allNews = await News.find(filter)

    let topNews = []
    let latestNews = []
    let mal = []
    for (let index = 0; index < chooseNews; index++) {
        if (index>=breakNews) {
            mal.push(allNews[index])
        }
        else{
            topNews.push(allNews[index])
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