/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignInPage = () => {
  const features = [
    "STUDY PLANS",
    "QUIZZES",
    "LEADERBOARD",
    "POINT SYSTEM",
    "REMINDERS",
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  // Handle user sign in with email and password
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sign in with email and password in Firebase Auth service
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // The signed-in user info
      const user = userCredential.user;

      // Show success alert and navigate to the landing page
      Swal.fire({
        title: "Welcome Back!",
        text: "You have successfully signed in!",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/homepage"); // Redirect to landing page
      });
    } catch (err) {
      // Handle Errors here.
      const errorMessage = err.message;
      const errorCode = err.code;

      setError(true);

      switch (errorCode) {
        case "auth/invalid-email":
          setErrorMessage("This email address is invalid.");
          break;
        case "auth/user-disabled":
          setErrorMessage(
            "This email address is disabled by the administrator."
          );
          break;
        case "auth/user-not-found":
          setErrorMessage("This email address is not registered.");
          break;
        case "auth/wrong-password":
          setErrorMessage("The password is invalid or the user does not have a password.");
          break;
        default:
          setErrorMessage(errorMessage);
          break;
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen bg-[#F3EBE5]">
      <div className="w-1/2 p-12 m-12">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-6">LogIn to TeloSoma</h1>
        </div>
        <div className="flex justify-center h-screen">
          <form className="p-6 rounded-md" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email"
                className="mt-1 block w-96 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
                required
                onChange={handleChange}
                value={email}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password *
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="mt-1 block w-96 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
                required
                onChange={handleChange}
                value={password}
              />
            </div>
            {error && (
              <p className="mb-4 text-sm text-red-600">
                {errorMessage}
              </p>
            )}
            <button
              type="submit"
              className="w-96 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Log In
            </button>
            <p className="mt-4 text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="/signup" className="text-black font-semibold">
                Sign Up Here
              </a>
            </p>
          </form>
        </div>
      </div>
      <div className="w-1/2 bg-[#F1A9AF] p-8 flex flex-col justify-center items-center relative overflow-hidden m-6 rounded-xl">
        {features.map((feature, index) => (
          <div
            key={feature}
            className={`text-3xl font-bold absolute transition-all duration-500 ease-in-out ${
              index === activeIndex
                ? "opacity-100 translate-y-0 text-black text-5xl"
                : index < activeIndex
                ? "opacity-70 -translate-y-full text-gray-200"
                : "opacity-70 translate-y-full text-gray-200"
            }`}
            style={{
              transitionDelay: `${Math.abs(index - activeIndex) * 0.1}s`,
              transform: `translateY(${(index - activeIndex) * 100}%)`,
            }}
          >
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SignInPage;
