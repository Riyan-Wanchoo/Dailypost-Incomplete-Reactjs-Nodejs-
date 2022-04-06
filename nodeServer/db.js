const mongoose = require("mongoose")
const mongoURI = "mongodb://localhost:27017/Dailypost"

const connecttomongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to database")
    })
}

module.exports = connecttomongo