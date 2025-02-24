// src/pages/AllCourses.jsx
import React, { useState, useEffect } from 'react';
import axios from '../axios';

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState("All Levels");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/courses');
        setCourses(response.data);
        setFilteredCourses(response.data); // Initially show all courses
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, []);

  const handleFilterChange = (level) => {
    setSelectedLevel(level);
    if (level === "All Levels") {
      setFilteredCourses(courses); // Show all courses
    } else {
      const filtered = courses.filter(course => course.level === level);
      setFilteredCourses(filtered); // Filter courses by level
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-semibold text-center mb-6">All Courses</h2>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-6 space-x-4">
        <button 
          className={`px-6 py-2 rounded-full ${selectedLevel === "All Levels" ? "bg-blue-600 text-white" : "bg-gray-200"}`} 
          onClick={() => handleFilterChange("All Levels")}
        >
          All Levels
        </button>
        <button 
          className={`px-6 py-2 rounded-full ${selectedLevel === "Beginner" ? "bg-blue-600 text-white" : "bg-gray-200"}`} 
          onClick={() => handleFilterChange("Beginner")}
        >
          Beginner Level
        </button>
        <button 
          className={`px-6 py-2 rounded-full ${selectedLevel === "Intermediate" ? "bg-blue-600 text-white" : "bg-gray-200"}`} 
          onClick={() => handleFilterChange("Intermediate")}
        >
          Intermediate Level
        </button>
      </div>

      {/* Courses Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map(course => (
          <div key={course._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={course.image || 'https://via.placeholder.com/400'} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{course.title}</h3>
              <p className="text-gray-600">{course.description}</p>
              <p className="text-gray-500 mt-2">Level: {course.level}</p>
              <button
                className="mt-4 py-2 px-6 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                onClick={() => alert('Enroll functionality will go here')}
              >
                Enroll
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
