// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { User, LayoutDashboard, LogOut } from "lucide-react";
// import Logo from '../assets/Logo.jpg'

// export default function Home() {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showLogoutPopup, setShowLogoutPopup] = useState(false);
//   const [courseCount, setCourseCount] = useState(100);
//   const [userCount, setUserCount] = useState(5000);
//   const [instructorCount, setInstructorCount] = useState(50);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setShowLogoutPopup(true);
//   };

//   const confirmLogout = () => {
//     localStorage.removeItem("token");
//     setShowLogoutPopup(false);
//     navigate("/"); // Redirect to landing page after logout
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCourseCount((prev) => prev + 1);
//       setUserCount((prev) => prev + Math.floor(Math.random() * 10));
//       setInstructorCount((prev) => prev + 1);
//     }, 10000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="">
//       {/* Header */}
//       <header className="bg-blue-600 text-white p-5 shadow-md flex justify-between items-center px-10">
//         <div className="flex items-center space-x-4">
//           <img src={Logo} alt="Logo" className="h-12 rounded-full shadow-md" />
//           <h1 className="text-3xl font-extrabold tracking-wide">J-Learn</h1>
//         </div>
//         <nav className="flex space-x-8 text-lg font-medium">
//           <Link to="/home" className="hover:text-gray-200 transition">Home</Link>
//           <Link to="/about" className="hover:text-gray-200 transition">About Us</Link>
//           <Link to="/courses" className="hover:text-gray-200 transition">Courses</Link>
//           <div className="relative">
//             <button
//               onClick={() => setShowDropdown(!showDropdown)}
//               className="flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition"
//             >
//               <User className="w-5 h-5" />
//               <span>Profile</span>
//             </button>
//             {showDropdown && (
//               <div className="absolute right-0 mt-3 bg-white text-black shadow-lg rounded-lg w-48">
//                 <Link to="/account" className="block px-4 py-2 hover:bg-gray-200 flex items-center">
//                   <User className="w-5 h-5 mr-2" /> My Account
//                 </Link>
//                 <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-200 flex items-center">
//                   <LayoutDashboard className="w-5 h-5 mr-2" /> Dashboard
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full text-left px-4 py-2 hover:bg-red-200 text-red-600 flex items-center"
//                 >
//                   <LogOut className="w-5 h-5 mr-2" /> Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </nav>
//       </header>

//       {/* Tagline Section */}
//       <section className="text-center py-16 bg-blue-50">
//         <h2 className="text-4xl font-bold text-blue-700">Learn. Grow. Succeed.</h2>
//         <p className="text-xl text-gray-600 mt-4">
//           Join millions of learners worldwide and build your skills today!
//         </p>
//       </section>

//       {/* Live Counters */}
//       <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center py-16 px-10">
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="bg-white p-6 shadow-lg rounded-lg"
//         >
//           <h3 className="text-3xl font-bold text-blue-600">{courseCount}+</h3>
//           <p className="text-lg text-gray-700">Live Courses</p>
//         </motion.div>
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="bg-white p-6 shadow-lg rounded-lg"
//         >
//           <h3 className="text-3xl font-bold text-blue-600">{userCount}+</h3>
//           <p className="text-lg text-gray-700">Happy Learners</p>
//         </motion.div>
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="bg-white p-6 shadow-lg rounded-lg"
//         >
//           <h3 className="text-3xl font-bold text-blue-600">{instructorCount}+</h3>
//           <p className="text-lg text-gray-700">Expert Instructors</p>
//         </motion.div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-16 px-10 bg-gray-200 text-center">
//         <h2 className="text-3xl font-bold text-blue-700">Why Choose Us?</h2>
//         <p className="text-lg text-gray-700 mt-4">
//           We provide high-quality courses taught by industry experts.
//         </p>
//       </section>

//       {/* Testimonials */}
//       <section className="py-16 px-10">
//         <h2 className="text-3xl font-bold text-center text-blue-700">What Our Students Say</h2>
//         <div className="flex justify-center mt-6">
//           <div className="bg-white p-6 shadow-lg rounded-lg w-80 mx-4">
//             <p className="text-gray-700">"This platform changed my life! The courses are amazing."</p>
//             <p className="text-blue-600 font-bold mt-2">- Alex Johnson</p>
//           </div>
//           <div className="bg-white p-6 shadow-lg rounded-lg w-80 mx-4">
//             <p className="text-gray-700">"I got a job after completing my certification here!"</p>
//             <p className="text-blue-600 font-bold mt-2">- Sarah Smith</p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-blue-700 text-white text-center py-6">
//         <p>&copy; 2025 E-Learning Hub. All rights reserved.</p>
//       </footer>

//       {/* Logout Confirmation Popup */}
//       {showLogoutPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
//           <div className="bg-white p-8 rounded-lg shadow-lg text-center">
//             <h3 className="text-xl font-semibold mb-4">Are you sure you want to logout?</h3>
//             <div className="flex justify-center space-x-4">
//               <button onClick={confirmLogout} className="px-5 py-2 bg-red-500 text-white rounded hover:bg-red-600">Yes, Logout</button>
//               <button onClick={() => setShowLogoutPopup(false)} className="px-5 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// import { useState } from "react";
// import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

// export default function Home() {
//   return (
//     <div className="bg-gray-100 font-sans">
//       {/* Header */}
//       <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-blue-600">LearnWave</h1>
//         <nav>
//           <ul className="flex space-x-6">
//             <li><a href="#" className="text-gray-700 hover:text-blue-600">Home</a></li>
//             <li><a href="#" className="text-gray-700 hover:text-blue-600">Courses</a></li>
//             <li><a href="#" className="text-gray-700 hover:text-blue-600">About</a></li>
//             <li><a href="#" className="text-gray-700 hover:text-blue-600">Contact</a></li>
//           </ul>
//         </nav>
//         <input type="text" placeholder="Search courses..." className="px-3 py-1 border rounded-md" />
//         <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Account</button>
//       </header>

//       {/* Hero Section */}
//       <section className="text-center py-16 bg-blue-600 text-white">
//         <h2 className="text-4xl font-bold">Dive into a World of Knowledge</h2>
//         <p className="mt-4 text-lg">Discover, learn, and grow with LearnWave's expert-led courses.</p>
//         <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-md">Start Learning Now</button>
//       </section>

//       {/* Why Choose LearnWave */}
//       <section className="py-16 px-6 text-center">
//         <h3 className="text-3xl font-bold">Why Choose LearnWave?</h3>
//         <div className="mt-8 grid md:grid-cols-3 gap-8">
//           <div className="p-6 bg-white shadow-md rounded-lg">
//             <h4 className="text-xl font-bold">Diverse Course Selection</h4>
//             <p>Explore a wide range of subjects taught by industry experts.</p>
//           </div>
//           <div className="p-6 bg-white shadow-md rounded-lg">
//             <h4 className="text-xl font-bold">Interactive Learning</h4>
//             <p>Engage with instructors and peers through forums and live sessions.</p>
//           </div>
//           <div className="p-6 bg-white shadow-md rounded-lg">
//             <h4 className="text-xl font-bold">Recognized Certifications</h4>
//             <p>Earn industry-recognized certificates to advance your career.</p>
//           </div>
//         </div>
//       </section>

//       {/* Statistics */}
//       <section className="text-center py-16 bg-gray-200">
//         <div className="grid md:grid-cols-3 gap-6">
//           <div>
//             <h3 className="text-3xl font-bold">100+</h3>
//             <p>Courses Available</p>
//           </div>
//           <div>
//             <h3 className="text-3xl font-bold">5000+</h3>
//             <p>Happy Learners</p>
//           </div>
//           <div>
//             <h3 className="text-3xl font-bold">50+</h3>
//             <p>Expert Instructors</p>
//           </div>
//         </div>
//       </section>

//       {/* Featured Courses */}
//       <section className="py-16 px-6 text-center">
//         <h3 className="text-3xl font-bold">Featured Courses</h3>
//         <div className="mt-8 grid md:grid-cols-3 gap-8">
//           {[1, 2, 3].map((course) => (
//             <div key={course} className="p-6 bg-white shadow-md rounded-lg">
//               <h4 className="text-xl font-bold">Course Title {course}</h4>
//               <p>Brief description of the course and its key learning outcomes.</p>
//               <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">Learn More</button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-16 bg-blue-600 text-white text-center">
//         <h3 className="text-3xl font-bold">What Our Students Say</h3>
//         <blockquote className="mt-6 italic">“LearnWave's courses helped me transition into a new career in web development. The instructors are top-notch and the community support is incredible.”</blockquote>
//         <p className="mt-2 font-bold">Sarah Johnson, Web Developer</p>
//       </section>

//       {/* Call to Action */}
//       <section className="py-16 text-center">
//         <h3 className="text-3xl font-bold">Ready to Transform Your Future?</h3>
//         <p className="mt-4">Join LearnWave today and take the first step towards achieving your goals.</p>
//         <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-md">Get Started Now</button>
//       </section>

//       {/* Footer */}
//       <footer className="py-12 bg-gray-900 text-white text-center">
//         <h3 className="text-xl font-bold">About LearnWave</h3>
//         <p className="mt-2">LearnWave is dedicated to providing high-quality online education to learners worldwide.</p>
//         <div className="mt-6 flex justify-center space-x-4">
//           <FaFacebook className="text-xl" />
//           <FaTwitter className="text-xl" />
//           <FaLinkedin className="text-xl" />
//         </div>
//         <p className="mt-6">© 2025 LearnWave. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { User, LayoutDashboard, LogOut } from "lucide-react";
// import Logo from "../assets/Logo.jpg";
// import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

// export default function Home() {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showLogoutPopup, setShowLogoutPopup] = useState(false);
//   const [courseCount, setCourseCount] = useState(100);
//   const [userCount, setUserCount] = useState(5000);
//   const [instructorCount, setInstructorCount] = useState(50);
//   const navigate = useNavigate();

//   const handleLogout = () => setShowLogoutPopup(true);
//   const confirmLogout = () => {
//     localStorage.removeItem("token");
//     setShowLogoutPopup(false);
//     navigate("/");
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCourseCount((prev) => prev + 1);
//       setUserCount((prev) => prev + Math.floor(Math.random() * 10));
//       setInstructorCount((prev) => prev + 1);
//     }, 10000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-blue-600 text-white p-5 shadow-md flex justify-between items-center px-10">
//         <div className="flex items-center space-x-4">
//           <img src={Logo} alt="Logo" className="h-12 rounded-full shadow-md" />
//           <h1 className="text-3xl font-extrabold tracking-wide">LearnWave</h1>
//         </div>
//         <nav className="flex space-x-8 text-lg font-medium">
//           <Link to="/home" className="hover:text-gray-200 transition">Home</Link>
//           <Link to="/about" className="hover:text-gray-200 transition">About Us</Link>
//           <Link to="/courses" className="hover:text-gray-200 transition">Courses</Link>
//           <div className="relative">
//             <button
//               onClick={() => setShowDropdown(!showDropdown)}
//               className="flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition"
//             >
//               <User className="w-5 h-5" />
//               <span>Profile</span>
//             </button>
//             {showDropdown && (
//               <div className="absolute right-0 mt-3 bg-white text-black shadow-lg rounded-lg w-48">
//                 <Link to="/account" className="block px-4 py-2 hover:bg-gray-200 flex items-center">
//                   <User className="w-5 h-5 mr-2" /> My Account
//                 </Link>
//                 <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-200 flex items-center">
//                   <LayoutDashboard className="w-5 h-5 mr-2" /> Dashboard
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full text-left px-4 py-2 hover:bg-red-200 text-red-600 flex items-center"
//                 >
//                   <LogOut className="w-5 h-5 mr-2" /> Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </nav>
//       </header>

//       {/* Tagline Section with Animation */}
//       <motion.section
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center py-16 bg-blue-50"
//       >
//         <h2 className="text-4xl font-bold text-blue-700">Learn. Grow. Succeed.</h2>
//         <p className="text-xl text-gray-600 mt-4">
//           Join millions of learners worldwide and build your skills today!
//         </p>
//       </motion.section>

//       {/* Live Counters */}
//       <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center py-16 px-10">
//         {[{count: courseCount, text: 'Live Courses'}, {count: userCount, text: 'Happy Learners'}, {count: instructorCount, text: 'Expert Instructors'}].map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//             className="bg-white p-6 shadow-lg rounded-lg"
//           >
//             <h3 className="text-3xl font-bold text-blue-600">{item.count}+</h3>
//             <p className="text-lg text-gray-700">{item.text}</p>
//           </motion.div>
//         ))}
//       </section>

//       {/* Testimonials */}
//       <section className="py-16 px-10">
//         <h2 className="text-3xl font-bold text-center text-blue-700">What Our Students Say</h2>
//         <div className="flex flex-wrap justify-center mt-6 gap-6">
//           {["LearnWave's courses helped me transition into a new career!", "The instructors are top-notch and always available!", "I got a high-paying job thanks to the certifications!"].map((testimonial, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               className="bg-white p-6 shadow-lg rounded-lg w-80 mx-4"
//             >
//               <p className="text-gray-700">"{testimonial}"</p>
//               <p className="text-blue-600 font-bold mt-2">- Student {index + 1}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-blue-700 text-white text-center py-6">
//         <p>&copy; 2025 LearnWave. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const JLearnHomepage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-teal-500 text-white">
//       {/* Header */}
//       <header className="flex justify-between items-center p-6 shadow-lg bg-opacity-30">
//         <div className="flex items-center space-x-4">
//           <img src="/logo.png" alt="J-Learn Logo" className="h-10" />
//           <h1 className="text-2xl font-bold">J-Learn</h1>
//         </div>
//         <nav className="space-x-6">
//           <Link to="/courses" className="hover:underline">Courses</Link>
//           <Link to="/about" className="hover:underline">About Us</Link>
//           <Link to="/dashboard" className="hover:underline">User</Link>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section className="text-center py-20">
//         <h2 className="text-4xl font-extrabold">"Unlock Knowledge, Elevate Your Future"</h2>
//       </section>

//       {/* Course Counts */}
//       <div className="flex justify-center space-x-6 py-10">
//         {["50+ Courses", "10K+ Students", "500+ Instructors"].map((item, index) => (
//           <motion.div key={index} className="p-6 bg-white text-gray-900 rounded-xl shadow-lg"
//             whileHover={{ scale: 1.1 }}>
//             {item}
//           </motion.div>
//         ))}
//       </div>

//       {/* Sample Course */}
//       <section className="text-center py-10">
//         <h3 className="text-3xl font-semibold mb-6">Featured Course</h3>
//         <motion.div className="p-6 bg-white text-gray-900 rounded-xl shadow-lg max-w-md mx-auto"
//           whileHover={{ scale: 1.05 }}>
//           <h4 className="text-xl font-bold">React for Beginners</h4>
//           <p>Learn how to build interactive UIs with React.</p>
//         </motion.div>
//       </section>

//       {/* Testimonials Carousel */}
//       <section className="py-10 px-6">
//         <h3 className="text-center text-3xl font-semibold mb-6">What Our Students Say</h3>
//         <Carousel autoPlay infiniteLoop showThumbs={false}>
//           {[...Array(10)].map((_, i) => (
//             <div key={i} className="p-6 bg-white text-gray-900 rounded-xl shadow-lg">
//               <p>"Amazing platform! Learned so much!"</p>
//               <span>- Student {i + 1}</span>
//             </div>
//           ))}
//         </Carousel>
//       </section>

//       {/* Footer */}
//       <footer className="text-center p-6 bg-opacity-30 shadow-lg">
//         &copy; 2025 J-Learn. All Rights Reserved.
//       </footer>
//     </div>
//   );
// };

// export default JLearnHomepage;

// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const JLearnHomepage = () => {
//   return (
//     <div className="bg-gradient-to-r from-teal-600 to-blue-700 min-h-screen text-white">
//       {/* Header */}
//       <header className="flex justify-between items-center p-6 border-b-2 border-gray-200 shadow-md bg-gray-900">
//         <div className="flex items-center space-x-4">
//           <img src="/logo.png" alt="J-Learn Logo" className="h-12" />
//           <h1 className="text-3xl font-bold">J-Learn</h1>
//         </div>
//         <nav className="space-x-8 text-gray-300 text-lg">
//           <Link to="/courses" className="hover:text-white">Courses</Link>
//           <Link to="/about" className="hover:text-white">About Us</Link>
//           <Link to="/dashboard" className="hover:text-white">User</Link>
//         </nav>
//       </header>

//       {/* Main Section */}
//       <main className="p-16 space-y-20">
//         {/* Slogan */}
//         <motion.h2
//           className="text-5xl font-semibold text-center mb-12 border-b-2 border-gray-300 pb-4"
//           animate={{ scale: [0.95, 1] }}
//           transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
//         >
//           "Empowering Learning, One Course at a Time!"
//         </motion.h2>

//         {/* Why Use This Website */}
//         <section className="text-center space-y-6 p-12 bg-gray-800 border border-gray-500 rounded-lg shadow-lg">
//           <h3 className="text-4xl font-bold mb-6">Why Choose J-Learn?</h3>
//           <p className="text-xl">✓ Expert Instructors with Real-World Experience</p>
//           <p className="text-xl">✓ Flexible Learning at Your Own Pace</p>
//           <p className="text-xl">✓ Interactive Courses with Hands-On Projects</p>
//           <p className="text-xl">✓ Certification Upon Course Completion</p>
//         </section>

//         {/* Course Counts */}
//         <div className="grid grid-cols-3 gap-12 text-center">
//           <div className="p-8 bg-gray-800 text-white shadow-lg border border-gray-500 rounded-lg text-xl">100+ Courses</div>
//           <div className="p-8 bg-gray-800 text-white shadow-lg border border-gray-500 rounded-lg text-xl">50+ Instructors</div>
//           <div className="p-8 bg-gray-800 text-white shadow-lg border border-gray-500 rounded-lg text-xl">10k+ Students</div>
//         </div>

//         {/* Sample Course Section */}
//         <section className="mb-16 border-b-2 border-gray-400 pb-12">
//           <h3 className="text-4xl font-bold mb-8">Featured Courses</h3>
//           <div className="grid grid-cols-3 gap-12">
//             <div className="p-8 bg-gray-800 text-white shadow-lg border border-gray-500 rounded-lg text-lg">Course 1</div>
//             <div className="p-8 bg-gray-800 text-white shadow-lg border border-gray-500 rounded-lg text-lg">Course 2</div>
//             <div className="p-8 bg-gray-800 text-white shadow-lg border border-gray-500 rounded-lg text-lg">Course 3</div>
//           </div>
//         </section>

//         {/* Testimonials */}
//         <section className="border-t-2 border-gray-400 pt-12">
//           <h3 className="text-4xl font-bold mb-8">What Our Students Say</h3>
//           <Carousel showThumbs={false} autoPlay infiniteLoop>
//             <div className="p-8 bg-gray-800 text-white shadow-lg border border-gray-500 rounded-lg text-lg">"Great platform!" - Alex</div>
//             <div className="p-8 bg-gray-800 text-white shadow-lg border border-gray-500 rounded-lg text-lg">"Learned so much!" - Sarah</div>
//             <div className="p-8 bg-gray-800 text-white shadow-lg border border-gray-500 rounded-lg text-lg">"Highly recommend!" - John</div>
//           </Carousel>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="text-center p-6 bg-gray-900 text-gray-300 border-t-2 border-gray-400 text-lg">
//         © 2025 J-Learn. All Rights Reserved.
//       </footer>
//     </div>
//   );
// };

// export default JLearnHomepage;

// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const JLearnHomepage = () => {
//   return (
//     <div className="bg-gradient-to-r from-teal-700 to-blue-800 min-h-screen text-white">
//       {/* Header */}
//       <header className="flex justify-between items-center p-6 border-b border-gray-300 shadow-md bg-gray-900">
//         <div className="flex items-center space-x-4">
//           <img src="/logo.png" alt="J-Learn Logo" className="h-12" />
//           <h1 className="text-3xl font-bold">J-Learn</h1>
//         </div>
//         <nav className="space-x-8 text-gray-200 text-lg">
//           <Link to="/courses" className="hover:text-white">Courses</Link>
//           <Link to="/about" className="hover:text-white">About Us</Link>
//           <Link to="/dashboard" className="hover:text-white">User</Link>
//         </nav>
//       </header>

//       {/* Main Section */}
//       <main className="p-20 space-y-24">
//         {/* Slogan */}
//         <motion.h2
//           className="text-5xl font-semibold text-center mb-16 border-b border-gray-400 pb-4"
//           animate={{ scale: [0.95, 1] }}
//           transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
//         >
//           "Empowering Learning, One Course at a Time!"
//         </motion.h2>

//         {/* Why Use This Website */}
//         <section className="text-center space-y-6 p-12 bg-gray-800 border border-gray-600 rounded-lg shadow-lg">
//           <h3 className="text-4xl font-bold mb-6">Why Choose J-Learn?</h3>
//           <p className="text-xl">✓ Expert Instructors with Real-World Experience</p>
//           <p className="text-xl">✓ Flexible Learning at Your Own Pace</p>
//           <p className="text-xl">✓ Interactive Courses with Hands-On Projects</p>
//           <p className="text-xl">✓ Certification Upon Course Completion</p>
//         </section>

//         {/* Course Counts */}
//         <div className="grid grid-cols-3 gap-16 text-center">
//           <div className="p-10 bg-gray-800 text-white shadow-lg border border-gray-600 rounded-lg text-xl">100+ Courses</div>
//           <div className="p-10 bg-gray-800 text-white shadow-lg border border-gray-600 rounded-lg text-xl">50+ Instructors</div>
//           <div className="p-10 bg-gray-800 text-white shadow-lg border border-gray-600 rounded-lg text-xl">10k+ Students</div>
//         </div>

//         {/* Sample Course Section */}
//         <section className="mb-20 border-b border-gray-500 pb-12">
//           <h3 className="text-4xl font-bold mb-8">Featured Courses</h3>
//           <div className="grid grid-cols-3 gap-16">
//             <div className="p-10 bg-gray-800 text-white shadow-lg border border-gray-600 rounded-lg text-lg">Course 1</div>
//             <div className="p-10 bg-gray-800 text-white shadow-lg border border-gray-600 rounded-lg text-lg">Course 2</div>
//             <div className="p-10 bg-gray-800 text-white shadow-lg border border-gray-600 rounded-lg text-lg">Course 3</div>
//           </div>
//         </section>

//         {/* Testimonials */}
//         <section className="border-t border-gray-500 pt-12">
//           <h3 className="text-4xl font-bold mb-8">What Our Students Say</h3>
//           <Carousel showThumbs={false} autoPlay infiniteLoop>
//             <div className="p-10 bg-gray-800 text-white shadow-lg border border-gray-600 rounded-lg text-lg">"Great platform!" - Alex</div>
//             <div className="p-10 bg-gray-800 text-white shadow-lg border border-gray-600 rounded-lg text-lg">"Learned so much!" - Sarah</div>
//             <div className="p-10 bg-gray-800 text-white shadow-lg border border-gray-600 rounded-lg text-lg">"Highly recommend!" - John</div>
//           </Carousel>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="text-center p-6 bg-gray-900 text-gray-300 border-t border-gray-500 text-lg">
//         © 2025 J-Learn. All Rights Reserved.
//       </footer>
//     </div>
//   );
// };

// export default JLearnHomepage;

// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const JLearnHomepage = () => {
//   return (
//     <div className="bg-gradient-to-r  from-teal-00 to-teal-800 min-h-screen text-white" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
//       {/* Header */}
//       <header className="flex justify-between items-center p-6 border-b border-gray-300 shadow-md bg-gray-900">
//         <div className="flex items-center space-x-4">
//           <img src="/logo.png" alt="J-Learn Logo" className="h-12" />
//           <h1 className="text-3xl font-bold">J-Learn</h1>
//         </div>
//         <nav className="space-x-8 text-gray-200 text-lg">
//           <Link to="/courses" className="hover:text-white">Courses</Link>
//           <Link to="/about" className="hover:text-white">About Us</Link>
//           <Link to="/dashboard" className="hover:text-white">User</Link>
//         </nav>
//       </header>

//       {/* Main Section */}
//       <main className="p-20 space-y-24">
//         {/* Slogan */}
//         <motion.h2
//           className="text-5xl font-semibold text-center mb-16 border-b border-gray-400 pb-4"
//           animate={{ scale: [0.95, 1] }}
//           transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
//         >
//           "Empowering Learning, One Course at a Time!"
//         </motion.h2>

//         {/* Why Use This Website */}
//         <section className="text-center space-y-6 p-12 bg-gray-800 border border-gray-600 rounded-lg shadow-lg">
//           <h3 className="text-4xl font-bold mb-6">Why Choose J-Learn?</h3>
//           <p className="text-xl">✓ Expert Instructors with Real-World Experience</p>
//           <p className="text-xl">✓ Flexible Learning at Your Own Pace</p>
//           <p className="text-xl">✓ Interactive Courses with Hands-On Projects</p>
//           <p className="text-xl">✓ Certification Upon Course Completion</p>
//         </section>

//         {/* Course Counts */}
//         <div className="grid grid-cols-3 gap-16 text-center">
//           <div className="p-10 bg-gray-800 text-white shadow-lg border border-gray-600 rounded-lg text-xl">100+ Courses</div>
//           <div className="p-10 bg-gray-800 text-white shadow-lg border border-gray-600 rounded-lg text-xl">50+ Instructors</div>
//           <div className="p-10 bg-gray-800 text-white shadow-lg border border-gray-600 rounded-lg text-xl">10k+ Students</div>
//         </div>

//         {/* Sample Course Section */}
//         <section className="mb-20 border-b border-gray-500 pb-12">
//           <h3 className="text-4xl font-bold mb-8">Featured Courses</h3>
//           <div className="grid grid-cols-3 gap-16">
//             <div className="p-10 bg-gray-800 text-white shadow-lg border border-gray-600 rounded-lg text-lg">Course 1</div>
//             <div className="p-10 bg-gray-800 text-white shadow-lg border border-gray-600 rounded-lg text-lg">Course 2</div>
//             <div className="p-10 bg-gray-800 text-white shadow-lg border border-gray-600 rounded-lg text-lg">Course 3</div>
//           </div>
//         </section>

//         {/* Testimonials */}
//         <section className="border-t border-gray-500 pt-12">
//           <h3 className="text-4xl font-bold mb-8">What Our Students Say</h3>
//           <Carousel showThumbs={false} autoPlay infiniteLoop>
//             <div className="p-10 bg-gray-800 text-white shadow-lg border border-gray-600 rounded-lg text-lg">"Great platform!" - Alex</div>
//             <div className="p-10 bg-gray-800 text-white shadow-lg border border-gray-600 rounded-lg text-lg">"Learned so much!" - Sarah</div>
//             <div className="p-10 bg-gray-800 text-white shadow-lg border border-gray-600 rounded-lg text-lg">"Highly recommend!" - John</div>
//           </Carousel>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="text-center p-6 bg-gray-900 text-gray-300 border-t border-gray-500 text-lg">
//         © 2025 J-Learn. All Rights Reserved.
//       </footer>
//     </div>
//   );
// };

// export default JLearnHomepage;


import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const JLearnHomepage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-600 min-h-screen text-white px-10 py-6" style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-gray-300 shadow-lg bg-gray-900 rounded-xl">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="J-Learn Logo" className="h-12" />
          <h1 className="text-3xl font-bold">J-Learn</h1>
        </div>
        <nav className="space-x-8 text-gray-200 text-lg">
          <Link to="/courses" className="hover:text-white">Courses</Link>
          <Link to="/about" className="hover:text-white">About Us</Link>
          <Link to="/dashboard" className="hover:text-white">User</Link>
        </nav>
      </header>

      {/* Main Section */}
      <main className="p-16 space-y-20">
        {/* Slogan */}
        <motion.h2 
          className="text-5xl font-semibold text-center mb-12 border-b border-gray-400 pb-4"
          animate={{ scale: [0.95, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        >
          "Empowering Learning, One Course at a Time!"
        </motion.h2>

        {/* Why Use This Website */}
        <section className="text-center space-y-6 p-10 bg-gray-800 border border-gray-600 rounded-xl shadow-lg">
          <h3 className="text-4xl font-bold mb-6">Why Choose J-Learn?</h3>
          <p className="text-xl">✓ Expert Instructors with Real-World Experience</p>
          <p className="text-xl">✓ Flexible Learning at Your Own Pace</p>
          <p className="text-xl">✓ Interactive Courses with Hands-On Projects</p>
          <p className="text-xl">✓ Certification Upon Course Completion</p>
        </section>

        {/* Course Counts */}
        <div className="grid grid-cols-3 gap-16 text-center">
          <div className="p-8 bg-gray-800 text-white shadow-lg border border-gray-600 rounded-xl text-xl">100+ Courses</div>
          <div className="p-8 bg-gray-800 text-white shadow-lg border border-gray-600 rounded-xl text-xl">50+ Instructors</div>
          <div className="p-8 bg-gray-800 text-white shadow-lg border border-gray-600 rounded-xl text-xl">10k+ Students</div>
        </div>

        {/* Sample Course Section */}
        <section className="mb-20 border-b border-gray-500 pb-12">
          <h3 className="text-4xl font-bold mb-8">Featured Courses</h3>
          <div className="grid grid-cols-3 gap-16">
            <div className="p-8 bg-gray-800 text-white shadow-lg border border-gray-600 rounded-xl text-lg">Course 1</div>
            <div className="p-8 bg-gray-800 text-white shadow-lg border border-gray-600 rounded-xl text-lg">Course 2</div>
            <div className="p-8 bg-gray-800 text-white shadow-lg border border-gray-600 rounded-xl text-lg">Course 3</div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-t border-gray-500 pt-12">
          <h3 className="text-4xl font-bold mb-8">What Our Students Say</h3>
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            <div className="p-8 bg-gray-800 text-white shadow-lg border border-gray-600 rounded-xl text-lg">"Great platform!" - Alex</div>
            <div className="p-8 bg-gray-800 text-white shadow-lg border border-gray-600 rounded-xl text-lg">"Learned so much!" - Sarah</div>
            <div className="p-8 bg-gray-800 text-white shadow-lg border border-gray-600 rounded-xl text-lg">"Highly recommend!" - John</div>
          </Carousel>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center p-6 bg-gray-900 text-gray-300 border-t border-gray-500 text-lg rounded-xl">
        © 2025 J-Learn. All Rights Reserved.
      </footer>
    </div>
  );
};

export default JLearnHomepage;
