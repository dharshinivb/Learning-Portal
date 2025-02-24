import EachCourse from "./EachCourse";

function GetCourses({ courses }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map(course => <EachCourse key={course.id} course={course} />)}
    </div>
  );
}

export default GetCourses;