// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Appbar from "./Appbar";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   async function handleLogin() {
//     try {
//       const res = await axios.post("/api/login", { email, password });
//       localStorage.setItem('token', res.data.token);
//       localStorage.setItem('user', email);
//       navigate('/user/courses');
//     } catch (err) {
//       setError("Invalid email or password");
//     }
//   }

//   return (
//     <>
//       <Appbar />
//       <div className="flex justify-center items-center min-h-screen bg-gray-100">
//         <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
//           <h1 className="text-2xl font-bold mb-4">Login</h1>
//           {error && <p className="text-red-500">{error}</p>}
//           <input type="email" placeholder="Email" className="w-full p-2 border rounded my-2" onChange={e => setEmail(e.target.value)} />
//           <input type="password" placeholder="Password" className="w-full p-2 border rounded my-2" onChange={e => setPassword(e.target.value)} />
//           <button onClick={handleLogin} className="w-full bg-blue-500 text-white py-2 rounded mt-4">Login</button>
//           <p className="mt-4">Not a user? <button onClick={() => navigate('/register')} className="text-blue-500">Signup</button></p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
 
      console.log("Login Success:", response.data);
      alert("Login successful!");
 
      // Store token (if received) in localStorage
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/Home");
      }
 
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      alert("Invalid email or password. Please try again.");
    }
  };
 
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
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
            Login
          </button>
          
          
        </form>
      </div>
    </section>
  );
}