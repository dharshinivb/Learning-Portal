// src/pages/Profile.jsx
import React, { useEffect, useState } from 'react';
import axios from '../axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from API
    axios.get('/user/me')
      .then(response => setUser(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">My Profile</h2>
        {user ? (
          <>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Email:</span>
                <span className="text-gray-800">{user.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Enrolled Courses:</span>
                <ul className="list-disc pl-5 space-y-2">
                  {user.enrolledCourses.map((course, idx) => (
                    <li key={idx} className="text-gray-700">{course.title}</li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        ) : (
          <p className="text-gray-600">Loading...</p>
        )}
        <button className="mt-6 w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
