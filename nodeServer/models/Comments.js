const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  comment:  String,
  likes:  {type: Number, default: 0},
  dislikes: {type: Number, default: 0},
  parentId: Number,
  userId: String,
  slug: String,
  date: { type: String },
});

module.exports = mongoose.model("Comments", commentSchema)