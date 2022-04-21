const express = require("express")
const Comments = require("../models/Comments")
const router = express.Router()

router.get('/', async (req, res)=>{
    const filter = {}
    const allNews = await Comments.find(filter).sort({_id: -1})

    res.json(allNews)
})

module.exports = router