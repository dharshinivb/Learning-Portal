const express = require("express");
const { getAllCourses, addCourse, deleteCourse, deleteAllCourses } = require("../controllers/courseController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getAllCourses);
router.post("/", authMiddleware, addCourse);
router.delete("/:id", authMiddleware, deleteCourse);
router.delete("/", authMiddleware, deleteAllCourses);

module.exports = router;
