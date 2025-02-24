// backend/controllers/courseController.js
const Course = require('../models/Course');
const User = require('../models/User');

// Get all courses
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching courses' });
  }
};

// Enroll user in course
// backend/controllers/courseController.js
exports.enrollInCourse = async (req, res) => {
  const { userId, courseId } = req.body;
  
  try {
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    
    user.enrolledCourses.push(course);
    await user.save();
    
    res.status(200).json({ message: 'Course enrolled successfully', user });
  } catch (err) {
    res.status(500).json({ message: 'Error enrolling course' });
  }
};

