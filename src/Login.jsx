import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate("/admin-dashboard");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    
    <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-b from-orange-400 from-50% to-gray-100 to-50% space-y-6">
      <h2 className="font-Anton lg:text-5xl text-3xl md:text-5xl text-white">KSS ROADWAYS PRIVATE LIMITED </h2>
      <div className="border shadow p-6 w-80 bg-white">
        <h2 className="text-2xl font-bold mb-4 font-Merriweather">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-Merriweather">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border font-Merriweather"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-Merriweather">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border mb-2 font-Merriweather"
              placeholder="******"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4 flex items-center justify-center">
            <button
              type="submit"
              className="w-full bg-orange-400 text-white py-2 font-Merriweather"
            >
              Login
            </button>
          </div>
          <p className="flex justify-center py-2 px-2 font-Merriweather">
            Already Have an Account
          </p>
        </form>
        <div className="mb-4">
          <Link to="/register">
            <button
              type="submit"
              className="w-full bg-orange-400 text-white py-2 font-Merriweather"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
