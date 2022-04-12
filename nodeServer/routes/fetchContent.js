const express = require("express")
const router = express.Router()
const News = require("../models/News")

router.post('/', async (req, res)=>{
    const slug = req.body.slug
    const category = req.body.category
    Onenews = await News.findOne({
        slug: slug,
        category: category
    })
    res.json(Onenews)
})

module.exports = router