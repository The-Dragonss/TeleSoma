// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const offer = [
  {
    title: "QUIZES",
  },
  {
    title: "LEADERBOARD",
  },
  {
    title: "STUDY PLANS",
   
  },
  {
    title: "POINT SYSTEM",
  },
  {
    title: "REMINDERS",
  },
];

const CoursePageBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % offer.length);
    }, 3000); // Change testimonial every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-[#3f62c2] to-[#7db9e8]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row">
          {/* Title Section */}
          <div
            className="flex flex-col justify-center h-[400px] text-white md:w-1/2"
            style={{ marginTop: '-30px' }}
          >
            <h1 className="text-4xl md:text-5xl leading-[1.5]">
              Fancy Heading Topic
            </h1>
            <h4 className="font-light tracking-wide opacity-60 mt-4">
              Fancy Subheading Topic
            </h4>
          </div>

          {/* Testimonials Section */}
          <div className="relative flex md:w-1/2  bg-transparent mx-auto overflow-hidden cursor-pointer">
            {offer.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute left-1/2 transform  mx-auto mb-2 flex p-2 transition-all duration-700 ease-in-out ${
                  index === activeIndex
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-20 translate-y-36 scale-100'
                }`}
              >

                {/* Testimonial Content */}
                <div className="flex-1 ml-4">
                  <p className="text-sm leading-6">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePageBanner;
