// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const SignInPage = () => {
  const features = [
    "STUDY PLANS",
    "QUIZZES",
    "LEADERBOARD",
    "POINT SYSTEM",
    "REMINDERS",
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      // Optionally handle errors here
      console.error("Login failed:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="flex h-screen bg-[#F3EBE5]">
      <div className="w-1/2 p-12 m-12">
        <div className="flex flex-col items-center">
          {/* Centering container */}
          <h1 className="text-3xl font-bold mb-6">Login to TeloSoma today</h1>
        </div>
        <div className="flex justify-center">
          {/* Removed h-screen to prevent nested full height */}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-96 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Login
            </button>
            <p className="mt-4 text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-black font-semibold">
                Sign Up here
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

export default SignInPage;
