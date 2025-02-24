// src/App.js or src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated imports for React Router v6
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AllCourses from './pages/AllCourses';  // Import AllCourses
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Updated Routes with "element" */}
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<AllCourses />} /> {/* Add the route for All Courses */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
