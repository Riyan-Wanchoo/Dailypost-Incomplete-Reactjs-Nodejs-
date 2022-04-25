const express = require("express")
const Comments = require("../models/Comments")
const router = express.Router()

router.post('/', async (req, res)=>{
    let comments = []
    // let replies = []
    const filter = {}
    comments = await Comments.find({slug: req.body.slug}).sort({_id: -1})
    
    res.json(comments)
})

module.exports = router