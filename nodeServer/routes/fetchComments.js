const express = require("express")
const Comments = require("../models/Comments")
const router = express.Router()

router.get('/', async (req, res)=>{
    let comments = []
    let replies = []
    const filter = {}
    const allNews = await Comments.find(filter).sort({_id: -1})

    allNews.forEach((element)=>{
        if (element.parentId==null) {
            comments.push(element)
        }
        else{
            replies.push(element)
        }
    })
    let allData = {
        comments: comments,
        replies: replies
    }
    res.json(allData)
})

module.exports = router