// eslint-disable-next-line no-unused-vars
import React from "react";

const Sample = () => {
  return (
    <div className="flex h-screen bg-pink-50">
      <div className="w-1/2 p-12 m-10">
        <h1 className="text-3xl font-bold mb-6">Sign up to TeloSoma today</h1>
        <button className="w-full py-2 px-4 border border-gray-300 rounded-full mb-4 flex items-center justify-center">
          <span className="mr-2">G</span>{" "}
          {/* Simple text representation of Google logo */}
          Sign in with Google
        </button>
        <div className="text-center text-gray-500 mb-4">or</div>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Username *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your Name"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
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
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
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
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Create Account
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <a href="#" className="text-black font-semibold">
            Login Here
          </a>
        </p>
      </div>
      <div className="w-1/2 bg-pink-200 p-8 flex flex-col justify-center items-center">
        <div className="text-3xl font-bold mb-4">STUDY PLANS</div>
        <div className="text-xl text-gray-600 opacity-50">QUIZZES</div>
        <div className="text-xl text-gray-600 opacity-50">LEADERBOARD</div>
        <div className="text-xl text-gray-600 opacity-50">POINT SYSTEM</div>
        <div className="text-xl text-gray-600 opacity-50">REMINDERS</div>
      </div>
    </div>
  );
};

export default Sample;
