const express = require('express')
const connecttomongo = require("./db")


connecttomongo()
const app = express()
var cors = require('cors')
const port = 8000

app.use(cors())
app.use(express.json())

app.use("/api/addNews", require("./routes/addNews"))
app.use("/api/addStory", require("./routes/addStory"))
app.use("/api/fetchNews", require("./routes/fetchNews"))
app.use("/api/fetchContent", require("./routes/fetchContent"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})