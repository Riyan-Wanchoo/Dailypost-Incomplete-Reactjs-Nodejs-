const connecttomongo = require("./db");
const express = require('express')
const app = express()
const port = 3000

app.post('/api/v1/fetchnews', (req, res) => {
    const name = req.query.name
    const age = req.query.age
    console.log(req.query)
    res.json({
        name: name,
        age: age
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

connecttomongo()