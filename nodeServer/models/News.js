const mongoose = require('mongoose');
const { Schema } = mongoose;

const newsSchema = new Schema({
  title:  String,
  category:  String,
  author: String,
  desc: String,
  content:   String,
  slug: { type: String, unique: true },
  imageUrl: String,
  imageDesc: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("News", newsSchema)