const express = require("express");
const { enrollCourse } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/:id/enroll", authMiddleware, enrollCourse); // Protected route

module.exports = router;
