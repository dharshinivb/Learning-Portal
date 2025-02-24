// src/components/CreateCourse.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Appbar from "./Appbar";

function CreateCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  function handleSubmit() {
    // Placeholder for API integration
    console.log("Course Created:", { title, description });
    navigate("/user/courses");
  }

  return (
    <>
      <Appbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
          <h1 className="text-2xl font-bold mb-4">Create Course</h1>
          <input type="text" placeholder="Title" className="w-full p-2 border rounded my-2" onChange={e => setTitle(e.target.value)} />
          <textarea placeholder="Description" className="w-full p-2 border rounded my-2" onChange={e => setDescription(e.target.value)}></textarea>
          <button onClick={handleSubmit} className="w-full bg-blue-500 text-white py-2 rounded mt-4">Submit</button>
        </div>
      </div>
    </>
  );
}

export default CreateCourse;