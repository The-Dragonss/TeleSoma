// eslint-disable-next-line no-unused-vars
import React from "react";
import Library from "../assets/Library.svg";
import Home from "../assets/Home.svg";
import Calendar from "../assets/Calendar.svg";
import Groups from "../assets/Groups.svg";
import Settings from "../assets/Settings.svg";

const NavColumn = () => {
  return (
    <>
      {/* Navbar hidden by default on small screens */}
      <div
        id="navbar"
        className="bg-secondaryBackground flex flex-row max-sm:items-center max-sm:p-5 max-sm:fixed max-sm:bottom-0 max-sm:w-full sm:flex-col sm:w-40 sm:my-6 sm:ml-6 sm:rounded-3xl sm:flex"
      >
        <div className="mx-auto pt-4 hidden sm:flex">
          Logo
          <a href="#home" className="">
            <img src={Home} alt="Home Icon" className="w-6 h-6" />
          </a>
        </div>

        <div className="flex flex-row max-sm:gap-6 max-sm:mx-auto sm:flex-col sm:my-auto sm:mx-auto sm:space-y-12">
          {/* Home Icon */}
          <div className="bg-white rounded-full h-12 w-12 hover:bg-primaryOrange flex justify-center items-center">
            <a href="#home">
              <img src={Home} alt="Home Icon" className="w-8 h-8" />
            </a>
          </div>

          {/* Library Icon */}
          <div className="bg-white rounded-full h-12 w-12 hover:bg-primaryOrange flex justify-center items-center">
            <a href="#library">
              <img src={Library} alt="Library Icon" className="w-8 h-8" />
            </a>
          </div>

          {/* Calendar Icon */}
          <div className="bg-white rounded-full h-12 w-12 hover:bg-primaryOrange flex justify-center items-center">
            <a href="#calendar">
              <img src={Calendar} alt="Calendar Icon" className="w-8 h-8" />
            </a>
          </div>

          {/* Groups Icon */}
          <div className="bg-white rounded-full h-12 w-12 hover:bg-primaryOrange flex justify-center items-center">
            <a href="#groups">
              <img src={Groups} alt="Groups Icon" className="w-8 h-8" />
            </a>
          </div>
        </div>

        <div className="mx-auto pb-4 hidden sm:flex">
          <a href="#settings" className="">
            <img src={Settings} alt="Settings Icon" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </>
  );
};

export default NavColumn;
