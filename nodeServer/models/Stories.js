const mongoose = require('mongoose');
const { Schema } = mongoose;

const storySchema = new Schema({
  title:  String,
  category:  String,
  author: String,
  content:   String,
  slug: { type: String, unique: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Stories", storySchema)