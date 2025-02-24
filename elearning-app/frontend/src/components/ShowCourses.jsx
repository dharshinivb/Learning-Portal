// src/components/ShowCourses.jsx
import GetCourses from "./GetCourses";

function ShowCourses() {
  const dummyCourses = [
    { id: 1, title: "React Basics", description: "Learn React from scratch." },
    { id: 2, title: "Advanced React", description: "Deep dive into React concepts." }
  ];
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Available Courses</h1>
      <GetCourses courses={dummyCourses} />
    </div>
  );
}

export default ShowCourses;