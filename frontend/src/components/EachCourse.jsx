function EachCourse({ course }) {
    return (
      <div className="p-4 border rounded-lg shadow-md bg-white">
        <h2 className="text-xl font-bold">{course.title}</h2>
        <p className="text-gray-700">{course.description}</p>
      </div>
    );
  }
  
  export default EachCourse;