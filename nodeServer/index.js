const express = require('express')
const connecttomongo = require("./db")

connecttomongo()
const app = express()
const port = 3000

app.use(express.json())

app.use("/api/addNews", require("./routes/addNews"))
app.use("/api/fetchNews", require("./routes/fetchNews"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})