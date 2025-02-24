// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import axios from '../axios';

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch all available courses
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white p-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-semibold">Welcome to J Learning</h1>
          <p className="text-xl mt-2">Explore courses and start learning today</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">Available Courses</h2>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course._id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
              <p className="text-gray-600 mt-2">{course.description}</p>
              <p className="text-gray-500 mt-2"><strong>Level:</strong> {course.level}</p>
              <div className="mt-4">
                <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-blue-600 text-white p-6 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 J Learning. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
