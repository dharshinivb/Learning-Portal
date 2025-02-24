const Course = require("../models/course");

// Get All Courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Add a New Course
exports.addCourse = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const course = new Course({ title, description, category });
    await course.save();

    res.json({ message: "Course added successfully", course });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.deleteCourse = async (req, res) => {
    try {
      const course = await Course.findByIdAndDelete(req.params.id);
  
      if (!course) {
        return res.status(404).json({ error: "Course not found" });
      }
  
      res.json({ message: "Course deleted successfully", course });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  };

  exports.deleteAllCourses = async (req, res) => {
    try {
      const result = await Course.deleteMany({}); // Deletes all documents
  
      res.json({ message: "All courses deleted successfully", deletedCount: result.deletedCount });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  };
