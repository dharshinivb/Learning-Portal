// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Home() {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showLogoutPopup, setShowLogoutPopup] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setShowLogoutPopup(true);
//   };

//   const confirmLogout = () => {
//     localStorage.removeItem("token");
//     setShowLogoutPopup(false);
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-blue-500 text-white p-4 shadow-md flex justify-between items-center">
//         <div className="flex items-center space-x-4">
//           <img src="/logo.png" alt="Logo" className="h-10" />
//           <h1 className="text-2xl font-bold">E-Learning Hub</h1>
//         </div>
//         <nav className="flex space-x-6">
//           <Link to="/" className="hover:underline">Home</Link>
//           <Link to="/about" className="hover:underline">About Us</Link>
//           <Link to="/courses" className="hover:underline">Courses</Link>
//           <div className="relative">
//             <button
//               onClick={() => setShowDropdown(!showDropdown)}
//               className="focus:outline-none"
//             >
//               Profile ▼
//             </button>
//             {showDropdown && (
//               <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-lg w-40">
//                 <Link to="/account" className="block px-4 py-2 hover:bg-gray-200">My Account</Link>
//                 <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-200">Dashboard</Link>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full text-left px-4 py-2 hover:bg-red-200 text-red-600"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </nav>
//       </header>

//       {/* Main Content */}
//       <main className="p-8">
//         <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
//           Welcome to E-Learning Hub
//         </h2>
//         <p className="text-lg text-gray-700 text-center">
//           Your one-stop destination for online learning. Browse courses, track progress, and achieve your learning goals!
//         </p>
//       </main>

//       {/* Logout Confirmation Popup */}
//       {showLogoutPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-lg font-bold mb-4">Are you sure you want to logout?</h3>
//             <div className="flex justify-center space-x-4">
//               <button
//                 onClick={confirmLogout}
//                 className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//               >
//                 Yes, Logout
//               </button>
//               <button
//                 onClick={() => setShowLogoutPopup(false)}
//                 className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Home() {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showLogoutPopup, setShowLogoutPopup] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setShowLogoutPopup(true);
//   };

//   const confirmLogout = () => {
//     localStorage.removeItem("token");
//     setShowLogoutPopup(false);
//     navigate("/"); // Redirect to landing page after logout
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-blue-500 text-white p-4 shadow-md flex justify-between items-center">
//         <div className="flex items-center space-x-4">
//           <img src="/logo.png" alt="Logo" className="h-10" />
//           <h1 className="text-2xl font-bold">E-Learning Hub</h1>
//         </div>
//         <nav className="flex space-x-6">
//           <Link to="/" className="hover:underline">Home</Link>
//           <Link to="/about" className="hover:underline">About Us</Link>
//           <Link to="/courses" className="hover:underline">Courses</Link>
//           <div className="relative">
//             <button
//               onClick={() => setShowDropdown(!showDropdown)}
//               className="focus:outline-none"
//             >
//               Profile ▼
//             </button>
//             {showDropdown && (
//               <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-lg w-40">
//                 <Link to="/account" className="block px-4 py-2 hover:bg-gray-200">My Account</Link>
//                 <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-200">Dashboard</Link>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full text-left px-4 py-2 hover:bg-red-200 text-red-600"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </nav>
//       </header>

//       {/* Main Content */}
//       <main className="p-8">
//         <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
//           Welcome to E-Learning Hub
//         </h2>
//         <p className="text-lg text-gray-700 text-center">
//           Your one-stop destination for online learning. Browse courses, track progress, and achieve your learning goals!
//         </p>
//       </main>

//       {/* Logout Confirmation Popup */}
//       {showLogoutPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-lg font-bold mb-4">Are you sure you want to logout?</h3>
//             <div className="flex justify-center space-x-4">
//               <button
//                 onClick={confirmLogout}
//                 className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//               >
//                 Yes, Logout
//               </button>
//               <button
//                 onClick={() => setShowLogoutPopup(false)}
//                 className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

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
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-blue-600 text-white p-5 shadow-md flex justify-between items-center px-10">
//         <div className="flex items-center space-x-4">
//           <img src={Logo} alt="Logo" className="h-12 rounded-full shadow-md" />
//           <h1 className="text-3xl font-extrabold tracking-wide">J-Learn</h1>
//         </div>
//         <nav className="flex space-x-8 text-lg font-medium">
//           <Link to="/" className="hover:text-gray-200 transition">Home</Link>
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
