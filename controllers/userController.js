const User = require("../models/user");
const Course = require("../models/course");

exports.enrollCourse = async (req, res) => {
  try {
    const { id } = req.params; 
    const { courseId } = req.body;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    // Find user and add course to enrolledCourses
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if user is already enrolled
    if (user.enrolledCourses.includes(courseId)) {
      return res.status(400).json({ error: "User already enrolled in this course" });
    }

    user.enrolledCourses.push(courseId);
    await user.save();

    res.json({ message: "Enrolled successfully", user });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
