const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const courseController = require('../controllers/courseController');

// Auth routes
router.post('/auth/signup', authController.signup);
router.post('/auth/login', authController.login);

// Course routes
router.get('/courses', courseController.getCourses);
router.post('/courses/enroll', courseController.enrollInCourse);

module.exports = router;
