/ eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseIcon1pink from '../assets/CourseIcon1pink.svg';
import CourseIcon2orange from '../assets/CourseIcon2orange.svg';
import CourseIcon3purple from '../assets/CourseIcon3purple.svg';
import Avatar1 from '../assets/Avatar1.svg';
import Avatar2 from '../assets/Avatar2.svg';
import Avatar3 from '../assets/Avatar3.svg';
import Avatar4 from '../assets/Avatar4.svg';
import FileUpload from './FileUpload';
import { ChunksContext } from '../context/ChunksContext';
const CourseDisplay = () => {
    const navigate = useNavigate();
    // Access chunks from context
    const { chunks } = useContext(ChunksContext);
    // Define course settings
    const courseSettings = [
        {
            backgroundColor: 'bg-purple',
            progressColor: 'bg-secondaryPurple',
            icon: CourseIcon3purple,
        },
        {
            backgroundColor: 'bg-primaryOrange',
            progressColor: 'bg-secondaryOrange',
            icon: CourseIcon2orange,
        },
        {
            backgroundColor: 'bg-primaryPink',
            progressColor: 'bg-secondaryPink',
            icon: CourseIcon1pink,
        },
    ];
    const Avatars = [Avatar1, Avatar2, Avatar3, Avatar4];
    if (!chunks) {
        return (
            <div className='ml-8  mb-6 max-sm:flex-col max-sm:h-screen max-sm:flex max-sm:w-full max-sm:overflow-y-auto max-sm:items-center max-sm:ml-0 '>
                <div className='flex flex-row justify-between items-center max-sm:w-fit  max-sm:flex-col-reverse max-sm:mt-4'>
                    <span className="p-4 h-14 w-1/6 ml-6 my-4 bg-secondaryBackground text-2xl font-bold rounded-2xl flex justify-center items-center max-sm:w-40">Courses</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FileUpload />
                    <p>No courses available.</p>
                </div>
            </div>
        );
    }
    const { backgroundColor, progressColor, icon } = courseSettings[0 % courseSettings.length];
    const randomAvatar = Avatars[0 % Avatars.length];
    return (
        <div className='ml-8  mb-6 max-sm:flex-col max-sm:h-screen max-sm:flex max-sm:w-full max-sm:overflow-y-auto max-sm:items-center max-sm:ml-0  '>
            <div className='flex flex-row justify-between items-center max-sm:w-fit  max-sm:flex-col-reverse max-sm:mt-4'>
                <span className="p-4 h-14 w-1/6 ml-6 my-4 bg-secondaryBackground text-2xl font-bold rounded-2xl flex justify-center items-center max-sm:w-40">Courses</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FileUpload />
                <div
                    key={chunks.id}
                    className={`flex flex-col justify-between max-sm:w-80 max-sm:h-60 w-96 h-56 rounded-2xl m-2 p-4 ${backgroundColor} hover:shadow-lg cursor-pointer`}
                    onClick={() => navigate('/notes')}
                >
                    {/* Top icons */}
                    <div className="flex justify-between">
                        <div className='bg-white rounded-full p-2'>
                            <img src={icon} alt="Course Icon" className="w-8 h-8" />
                        </div>
                        <img src={randomAvatar} alt="Avatar Icon" className="w-8 h-8" />
                    </div>
                    {/* Course Name */}
                    <h2 className="font-bold text-xl mt-6">{chunks.title}</h2>
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                            className={`h-4 rounded-full ${progressColor}`}
                            style={{ width: `${chunks.percentageCompleted}%` }}
                        ></div>
                    </div>
                    {/* Percentage Text */}
                    <p className="">{chunks.percentageCompleted}% completed</p>
                </div>
            </div>
        </div>
    );
};
export default CourseDisplay;