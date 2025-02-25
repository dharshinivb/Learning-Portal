const express = require("express");
const { getInstructor, deleteInstructor } = require("../controllers/adminController");
const router = express.Router();
router.get("/", getInstructor);
router.delete("/:id", deleteInstructor);
module.exports = router;