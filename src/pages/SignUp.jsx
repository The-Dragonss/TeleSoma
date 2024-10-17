/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUpPage = () => {
  const features = [
    "STUDY PLANS",
    "QUIZZES",
    "LEADERBOARD",
    "POINT SYSTEM",
    "REMINDERS",
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "userName") setUserName(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  // Handle user sign up with email and password
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
  
      // Get the user object
      const user = userCredential.user;
  
      // Update the user's profile to include the display name (username)
      await updateProfile(user, {
        displayName: userName
      });
  
      // Show success alert and navigate to the landing page
      Swal.fire({
        title: "Success!",
        text: "You have successfully signed up!",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/homepage"); 
      });
    } catch (err) {
      // Handle errors here
      const errorMessage = err.message;
      const errorCode = err.code;
  
      setError(true);
  
      switch (errorCode) {
        case "auth/weak-password":
          setErrorMessage("The password is too weak.");
          break;
        case "auth/email-already-in-use":
          setErrorMessage(
            "This email address is already in use by another account."
          );
          break;
        case "auth/invalid-email":
          setErrorMessage("This email address is invalid.");
          break;
        case "auth/operation-not-allowed":
          setErrorMessage("Email/password accounts are not enabled.");
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
          <h1 className="text-3xl font-bold mb-6">Sign up to TeloSoma today</h1>
        </div>
        <div className="flex justify-center h-screen">
          <form className="p-6 rounded-md" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="userName"
                className="block text-sm font-medium text-gray-700"
              >
                Name *
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                placeholder="Enter your Name"
                className="mt-1 block w-96 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
                required
                onChange={handleChange}
                value={userName}
              />
            </div>
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
            <button
              type="submit"
              className="w-96 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Create Account
            </button>
            <p className="mt-4 text-sm text-gray-600">
              Already have an account?{" "}
              <Link to={"/login"} className="text-black font-semibold">
                Login Here
              </Link>
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

export default SignUpPage;
