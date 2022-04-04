const mongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017"

const connecttomongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongo successfully")
    })
}

module.exports = connecttomongo