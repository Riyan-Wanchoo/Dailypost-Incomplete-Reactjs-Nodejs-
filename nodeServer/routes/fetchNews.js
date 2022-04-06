const express = require("express")
const News = require("../models/News")
const router = express.Router()

router.get('/', async (req, res)=>{
    const filter = {}
    const allnews = await News.find(filter)
    res.json(allnews)
})

module.exports = router