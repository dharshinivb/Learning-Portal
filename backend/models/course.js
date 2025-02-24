const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  instructor: String,
  rating: String,
  reviewcount: String,
  duration: String,
  lectures: String,
  level: String,
});

module.exports = mongoose.model("Course", CourseSchema);