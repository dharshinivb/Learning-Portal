const User = require("../models/user");
const Course = require("../models/course");

const jwt = require("jsonwebtoken");

const ADMIN_EMAIL = "admin@example.com";
const ADMIN_PASSWORD = "admin123";

// Admin Login with Hardcoded Credentials
exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, { expiresIn: "2h" });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
// // Get all users and their enrolled courses
// exports.getUsers = async (req, res) => {
//   try {
//     const users = await users.find().populate("enrolledCourses", "title");
//     res.json({ users, count: users.length });
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// };

// Get all users and their enrolled courses
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().populate("enrolledCourses", "title description instructor rating reviewcount duration lectures level");
    res.json({ users, count: users.length });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    await users.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Error deleting user" });
  }
};