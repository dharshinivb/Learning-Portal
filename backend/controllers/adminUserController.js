const User = require("../models/user");

// Get all users and their enrolled courses
// exports.getUsers = async (req, res) => {
//   try {
//     const users = await User.find().populate("enrolledCourses", "title");
//     res.json({ users, count: users.length });
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// };
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().populate("enrolledCourses", "title");
    console.log("Fetched Users:", users); // Debugging line
    res.json({ users, count: users.length });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password, enrolledCourses: [] });
    await user.save();
    res.json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
};

// Edit a user
exports.editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ message: "User updated successfully", updatedUser });
  } catch (error) {
    res.status(500).json({ error: "Error updating user" });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting user" });
  }
};
