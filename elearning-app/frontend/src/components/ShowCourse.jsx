import { useParams } from "react-router-dom";

function ShowCourse() {
  const { id } = useParams();
  return <div className="text-center text-2xl">Showing details for course ID: {id}</div>;
}

export default ShowCourse;

