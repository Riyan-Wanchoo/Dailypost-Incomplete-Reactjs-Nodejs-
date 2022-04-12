const express = require("express")
const News = require("../models/News")
const Stories = require("../models/Stories")
const router = express.Router()
// const fs = require('fs')

router.get('/', async (req, res)=>{
    const filter = {}
    const allNews = await News.find(filter)

    let topNews = []
    let latestNews = []
    let mal = []
    for (let index = 0; index < 15; index++) {
        if (index>=10) {
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