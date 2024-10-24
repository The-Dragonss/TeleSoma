import React from 'react';
import Library from '../assets/Library.svg';
import Home from '../assets/Home.svg';
import Calendar from '../assets/Calendar.svg';
import Groups from '../assets/Groups.svg';
import Settings from '../assets/Settings.svg';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.jpeg'

const NavColumn = () => {


    return (
        <>
            <div id="navbar" className="bg-secondaryBackground flex flex-row max-sm:items-center max-sm:p-2 max-sm:fixed max-sm:bottom-0 max-sm:w-full sm:flex-col sm:w-60 sm:my-6 sm:ml-6 sm:rounded-3xl  sm:flex">
                <div className="mx-auto pt-4 font-bold text-2xl hidden sm:flex">
                    <a href="#home" className="">
                        <img src={Logo} alt="Home Icon" className="w-12 h-12 rounded-full" />

                    </a>
                </div>

                <div className="flex flex-row max-sm:gap-6  max-sm:mx-auto sm:flex-col sm:my-auto sm:mx-auto sm:space-y-12">
                    <div className="bg-white rounded-full h-16 w-16 hover:bg-primaryOrange relative">
                        <Link to={'/homepage'} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <img src={Home} alt="Home Icon" className="w-10 h-10" />
                        </Link>
                    </div>

                    <div className="bg-white rounded-full h-16 w-16 hover:bg-primaryOrange relative">
                        <a href="#library" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <img src={Library} alt="Library Icon" className="w-10 h-10" />
                        </a>
                    </div>

                    <div className="bg-white rounded-full h-16 w-16 hover:bg-primaryOrange relative">
                        <a href="#calendar" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <img src={Calendar} alt="Calendar Icon" className="w-10 h-10" />
                        </a>
                    </div>

                    <div className="bg-white rounded-full h-16 w-16 hover:bg-primaryOrange relative">
                        <a href="#groups" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <img src={Groups} alt="Groups Icon" className="w-10 h-10" />
                        </a>
                    </div>
                </div>

                <div className="mx-auto pb-4 hidden sm:flex">
                    <a href="#settings" className="">
                        <img src={Settings} alt="Settings Icon" className="h-10 w-10" />
                    </a>
                </div>
            </div>


        </>
    );
};

export default NavColumn;
