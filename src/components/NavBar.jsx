/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="container container mx-auto flex justify-between items-center p-6">
      <div className="flex space-x-6">
        <a href="#about" className="text-gray-700 hover:text-gray-900 relative group">
          About
          <span className="block h-1 bg-black absolute left-0 bottom-[-6px] w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
        </a>
        <a href="#how-it-works" className="text-gray-700 hover:text-gray-900 relative group">
          How it Works
          <span className="block h-1 bg-black absolute left-0 bottom-[-6px] w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
        </a>
        <a href="#contact" className="text-gray-700 hover:text-gray-900 relative group">
          Contact Us
          <span className="block h-1 bg-black absolute left-0 bottom-[-6px] w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
        </a>
      </div>
      <div className="flex space-x-4">
       <Link to={"/signup"}> <button className="bg-black text-white px-4 py-2 w-32 rounded-full hover:bg-gray-800">Sign Up</button></Link>
       <Link to={"/login"}> <button className="bg-black text-white px-4 py-2 w-32 rounded-full hover:bg-gray-800">Login</button></Link>
      </div>
    </nav>
  )
}

export default NavBar;
