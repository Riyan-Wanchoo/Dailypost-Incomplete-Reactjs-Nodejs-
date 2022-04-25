const express = require("express")
const Comments = require("../models/Comments")
const router = express.Router()

router.post('/', (req, res) => {
    if (req.body.auth == "johnDoeAuth@Dailypost-Auth") {
        const comment = req.body.comment
        const parentId = req.body.parentId
        const slug = req.body.slug
        const date = req.body.date

        const commentIns = Comments({
            comment: comment,
            parentId: parentId,
            userId: "Anonymous user",
            slug: slug,
            date: date
        })
        commentIns.save()
        res.json({
            success: true
        })
    }
    else{
        res.json({
            success: false
        })
    }
})

module.exports = router