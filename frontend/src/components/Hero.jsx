/* eslint-disable no-unused-vars */
import React from 'react';
import NavBar from './NavBar';

const Hero = () => {
  return (
    <>
  
  <div className="ball ball1"></div>
<div className="ball ball2"></div>
<div className="ball ball3"></div>
<div className="ball ball4"></div>
<div className="ball ball5"></div>
<div className="ball ball6"></div>
<div className="ball ball7"></div>

  
    <div className="bg-[#F3EBE5] h-screen font-sans">
     <NavBar />
     <main className="container mx-auto px-6 flex flex-col md:flex-row items-center">
  <div className="md:w-1/2 mb-8 md:mb-0">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
      Unlock Your Learning Potential with
      <span className="text-[#EF98A1] block">TeloSoma</span>
    </h1>
    <p className="text-gray-600 mb-6">
      An interactive, personalized learning experience designed to help students excel.
    </p>
    <button className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800">
      GET STARTED
    </button>
  </div>

  <div className="md:w-1/2 relative">
    <img src="/hero-image.png" alt="Hero Image" className="w-full h-auto object-cover" />
  </div>
</main>

    </div>
    </>
  );
};

export default Hero;