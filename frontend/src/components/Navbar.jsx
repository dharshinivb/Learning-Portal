// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">J Learning</h1>
        <nav>
          <Link to="/" className="px-4 py-2">Home</Link>
          <Link to="/courses" className="px-4 py-2">All Courses</Link>
          <Link to="/login" className="px-4 py-2">Login</Link>
          <Link to="/signup" className="px-4 py-2">SignUp</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;