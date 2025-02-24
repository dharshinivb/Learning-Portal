// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import Appbar from "./Appbar";

// // function Register() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();

// //   async function handleSignup() {
// //     try {
// //       await axios.post("/api/register", { email, password });
// //       navigate('/login');
// //     } catch (err) {
// //       setError("User already exists");
// //     }
// //   }

// //   return (
// //     <>
// //       <Appbar />
// //       <div className="flex justify-center items-center min-h-screen bg-gray-100">
// //         <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
// //           <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
// //           {error && <p className="text-red-500">{error}</p>}
// //           <input type="email" placeholder="Email" className="w-full p-2 border rounded my-2" onChange={e => setEmail(e.target.value)} />
// //           <input type="password" placeholder="Password" className="w-full p-2 border rounded my-2" onChange={e => setPassword(e.target.value)} />
// //           <button onClick={handleSignup} className="w-full bg-green-500 text-white py-2 rounded mt-4">Signup</button>
// //           <p className="mt-4">Already a user? <button onClick={() => navigate('/login')} className="text-blue-500">Login</button></p>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default Register;

// // src/components/Register.jsx
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Appbar from "./Appbar";

// function Register() {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("student"); // Default role is student
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   async function handleSignup() {
//     try {
//       await axios.post("https://coursify.onrender.com/users/signup", {
//         email,
//         name,
//         password,
//         role,
//       });
//       navigate("/login");
//     } catch (err) {
//       setError("User already exists or invalid input");
//     }
//   }

//   return (
//     <>
//       <Appbar />
//       <div className="flex justify-center items-center min-h-screen bg-gray-100">
//         <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
//           <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
//           {error && <p className="text-red-500">{error}</p>}
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full p-2 border rounded my-2"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="w-full p-2 border rounded my-2"
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full p-2 border rounded my-2"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {/* <div className="flex justify-center gap-4 my-3">
//             <button
//               className={`px-4 py-2 rounded ${role === "student" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
//               onClick={() => setRole("student")}
//             >
//               Student
//             </button>
//             <button
//               className={`px-4 py-2 rounded ${role === "admin" ? "bg-green-500 text-white" : "bg-gray-200"}`}
//               onClick={() => setRole("admin")}
//             >
//               Admin
//             </button>
//           </div> */}
//           <button
//             onClick={handleSignup}
//             className="w-full bg-green-500 text-white py-2 rounded mt-4"
//           >
//             Signup
//           </button>
//           <p className="mt-4">
//             Already a user? <button onClick={() => navigate("/login")} className="text-blue-500">Login</button>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Register;


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation (only Gmail)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid Gmail address.");
      return;
    }

    // Password validation (minimum 6 characters)
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password
      });

      console.log("Signup Success:", response.data);
      alert("User registered successfully!");

      // Redirect to login page
      navigate("/login");
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
      alert("Error signing up. Please try again.");
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}
