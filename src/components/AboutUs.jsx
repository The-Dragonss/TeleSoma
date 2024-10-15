/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

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
            <h2 className="text-sm text-gray-600 uppercase tracking-wide mb-2">ABOUT TELOSOMI</h2>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              The <span className="text-[#EF98A1]">study buddy</span> you've always needed!
            </h1>
            <p className="text-gray-600 mb-6">
              Bulky notes, endless chapters, and the dreaded exam prep - we know the struggle! Traditional learning can feel overwhelming and uninspiring. But learning doesn't have to be this hard. TeloSomi is here to shake things up. Dive into a world where learning is interactive, tailored just for you, and way more fun than flipping through boring textbooks and lecture notes.
            </p>
            <button className="bg-black text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition duration-300">
              GET STARTED
            </button>
          </div>
        </div>

      </div>
    </div>
    <svg width="1509" height="290" viewBox="0 0 1509 290" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M-3 227H60C123 227 249 227 375 197C501 166 627 106 753 121C879 136 1005 227 1131 265C1257 303 1383 288 1446 280L1509 272V0H1446C1383 0 1257 0 1131 0C1005 0 879 0 753 0C627 0 501 0 375 0C249 0 123 0 60 0H-3V227Z" fill="#D5D2FE"/>
    </svg>
    </>
  );
};

export default AboutUs;