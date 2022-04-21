const express = require("express")
const Comments = require("../models/Comments")
const router = express.Router()

router.post('/', (req, res) => {
    if (req.body.auth == "johnDoeAuth@Dailypost-Auth") {
        const comment = req.body.comment
        const parentId = req.body.parentId
        const userId = req.body.userId

        const commentIns = Comments({
            comment: comment,
            parentId: parentId,
            userId: userId
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