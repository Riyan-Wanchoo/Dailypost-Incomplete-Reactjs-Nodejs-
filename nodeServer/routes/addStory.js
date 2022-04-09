const express = require("express")
const Stories = require("../models/Stories")
const router = express.Router()

router.post('/', (req, res)=>{
    const title = req.body.title
    const category = req.body.category
    const author = req.body.author
    const content = req.body.content
    const slug = req.body.slug

    const StoryIns = Stories({
        title: title,
        category: category,
        author: author,
        content: content,
        slug: slug
    })
    StoryIns.save()
    res.json(req.body)
})

module.exports = router