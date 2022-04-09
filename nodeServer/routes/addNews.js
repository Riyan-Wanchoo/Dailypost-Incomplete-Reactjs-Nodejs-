const express = require("express")
const News = require("../models/News")
const router = express.Router()

router.post('/', (req, res)=>{
    const title = req.body.title
    const category = req.body.category
    const author = req.body.author
    const content = req.body.content
    const slug = req.body.slug
    const imageUrl = req.body.imageUrl

    const newsIns = News({
        title: title,
        category: category,
        author: author,
        content: content,
        slug: slug,
        imageUrl: imageUrl
    })
    newsIns.save()
    res.send(req.body)
})

module.exports = router