/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className=" mx-auto  bg-[#D5D2FE] font-sans">
        <div className="max-w-6xl mx-auto px-4 py-8 ">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left side - Illustration */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-100 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-yellow-200 rounded-3xl p-6">
                  <img
                    src="telos4.png"
                    alt="Frustrated student"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-sm text-gray-600 uppercase tracking-wide mb-2">
                ABOUT TELOSOMI
              </h2>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                The <span className="text-[#EF98A1]">study buddy</span> you've
                always needed!
              </h1>
              <p className="text-gray-600 mb-6">
                Bulky notes, endless chapters, and the dreaded exam prep - we
                know the struggle! Traditional learning can feel overwhelming
                and uninspiring. But learning doesn't have to be this hard.
                TeloSomi is here to shake things up. Dive into a world where
                learning is interactive, tailored just for you, and way more fun
                than flipping through boring textbooks and lecture notes.
              </p>
              <button className="bg-black text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition duration-300">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#D5D2FE"
          fill-opacity="1"
          d="M0,256L48,250.7C96,245,192,235,288,213.3C384,192,480,160,576,154.7C672,149,768,171,864,154.7C960,139,1056,85,1152,101.3C1248,117,1344,203,1392,245.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default AboutUs;
