import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import SignInwithGoogle from "./signInWIthGoogle";
import SignInwithGitHub from "./signinWithGithub";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User logged in successfully!", {
        position: "top-center",
      });
      navigate("/"); 
    } catch (error) {
      let errorMessage = "Something went wrong. Please try again!";
      if (error.code === "auth/user-not-found") {
        errorMessage = "User not found. Please register first.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Incorrect password. Please try again.";
      }
      toast.error(errorMessage, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 via-orange-50 to-orange-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg px-8 py-10 max-w-md w-full"
      >
        <h3 className="text-2xl font-bold text-orange-600 text-center mb-6">
          Login to Your Account
        </h3>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-200"
        >
          Login
        </button>

        <p className="text-sm text-center text-gray-500 mt-4">
          New user?{" "}
          <a
            href="/register"
            className="text-orange-600 font-medium hover:underline"
          >
            Register Here
          </a>
        </p>

        <div className="flex items-center justify-center mt-6">
          <div className="w-full border-t border-gray-300"></div>
          <p className="text-sm text-gray-500 px-4">OR</p>
          <div className="w-full border-t border-gray-300"></div>
        </div>

        <div className="flex flex-col items-center space-y-4 mt-6 mx-auto">
          <SignInwithGoogle />
          <SignInwithGitHub />
        </div>
      </form>
    </div>
  );
}

export default Login;
