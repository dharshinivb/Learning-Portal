import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import ShowCourse from "./components/ShowCourse";
import CreateCourse from "./components/CreateCourse";
import NoPage from "./components/NoPage";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import CourseDetails from "./components/CourseDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<ShowCourse />} />
        <Route path="/user/courses" element={<ShowCourse />} />
        <Route path="/enrolled-course/:id" element={<CourseDetails />} />
        <Route path="/course/:id" element={<ShowCourse />} />
        <Route path="/course/create" element={<CreateCourse />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./components/Home";
// import Landing from "./components/Landing";
// function App() {
//     return (
//       <Router>
//         <Routes>
//         <Route path="/" element={<Landing />} />
//           <Route path="/Home" element={<HomePage />} />
          
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/register" element={<Register />} />
// //         <Route path="/user/courses" element={<ShowCourses />} />
// //         <Route path="/course/:id" element={<ShowCourse />} />
// //         <Route path="/course/create" element={<CreateCourse />} />
// //         <Route path="*" element={<NoPage />} />
         
//         </Routes>
//       </Router>
//     );
//   }
  
//   export default App;
