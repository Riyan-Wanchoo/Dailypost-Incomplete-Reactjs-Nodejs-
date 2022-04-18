const express = require("express")
const News = require("../models/News")
const router = express.Router()

router.post('/', (req, res) => {
    if (req.body.data.auth == "johnDoeAuth@Dailypost-Auth") {
        const title = req.body.data.title
        const category = req.body.data.category
        const author = req.body.data.author
        const desc = req.body.data.desc
        const content = req.body.data.content
        const slug = req.body.data.slug
        const imageUrl = req.body.data.imageUrl
        const imageDesc = req.body.data.imageDesc

        const newsIns = News({
            title: title,
            category: category,
            author: author,
            desc: desc,
            content: content,
            slug: slug,
            imageUrl: imageUrl,
            imageDesc: imageDesc
        })
        newsIns.save()
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