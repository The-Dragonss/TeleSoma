import React from 'react'
import Library from '../assets/Library.svg'
import Home from '../assets/Home.svg'
import Calendar from '../assets/Calendar.svg'
import Groups from '../assets/Groups.svg'
import Settings from '../assets/Settings.svg'


const NavColumn = () => {
    const toggleNavbar = () => {
        const navbar = document.getElementById("navbar");
        navbar.classList.toggle("hidden");
    };

    return (

        <>
            <div id="navbar" className='bg-secondaryBackground flex flex-col w-40 h-full my-6 ml-6 rounded-3xl flex-grow sm:max-sm:hidden md:flex'>

                <div className='mx-auto pt-4'>Logo
                    <a href="#home" className="">
                        <img src={Home} alt="Home Icon" className="w-6 h-6" />
                    </a>
                </div>

                <div className='flex flex-col my-auto mx-auto space-y-12 sm:max-sm:space-y-8'>
                    <div className="bg-white rounded-full h-14 w-14 hover:bg-primaryOrange relative">
                        <a href="#home" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <img src={Home} alt="Home Icon" className="w-6 h-6" />
                        </a>
                    </div>


                    <div className="bg-white rounded-full h-14 w-14 hover:bg-primaryOrange relative">
                        <a href="#home" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <img src={Library} alt="Library Icon" className="w-6 h-6" />
                        </a>
                    </div>

                    <div className="bg-white rounded-full h-14 w-14 hover:bg-primaryOrange relative">
                        <a href="#home" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <img src={Calendar} alt="Calendar Icon" className="w-6 h-6" />
                        </a>
                    </div>


                    <div className="bg-white rounded-full h-14 w-14 hover:bg-primaryOrange relative">
                        <a href="#home" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <img src={Groups} alt="Groups Icon" className="w-6 h-6" />
                        </a>
                    </div>
                </div>




                <div className='mx-auto pb-4 '>
                    <a href="#home" className="">
                        <img src={Settings} alt="Home Icon" className="h-10 w-10" />
                    </a>
                </div>



            </div>
            <button class="absolute top-0 right-0 p-4  sm:hidden block" onClick={toggleNavbar}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5m-16.5 6.75h16.5m-16.5 6.75h16.5" />
                </svg>
            </button>
        </>

    )
}

export default NavColumn