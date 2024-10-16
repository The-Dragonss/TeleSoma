import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseIcon1pink from '../assets/CourseIcon1pink.svg';
import CourseIcon2orange from '../assets/CourseIcon2orange.svg';
import CourseIcon3purple from '../assets/CourseIcon3purple.svg';
import Avatar1 from '../assets/Avatar1.svg';
import Avatar2 from '../assets/Avatar2.svg';
import Avatar3 from '../assets/Avatar3.svg';
import Avatar4 from '../assets/Avatar4.svg';
import FileUpload from './FileUpload';
import SearchBar from './SearchBar';

const CourseDisplay = () => {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();



    // Defines colors and their corresponding icons and progress colors
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

    {/*const handleCourseClick = async (courseId) => {
        setLoading(true);
        try {
            // fetching chunked notes based on course ID
            const response = await fetch(`/api/courses/${courseId}/notes`);
            const chunkedNotes = await response.json();  // Assume you get chunked notes as response

            // Navigate to chunked notes display page with notes data
            navigate('/chunkednotesdisplayPage', { state: { chunkedNotes } });
        } catch (error) {
            console.error('Error fetching course notes:', error);
            setError('Failed to load course notes.');
        } finally {
            setLoading(false);
        }
    };
*/}

    // Using dummy data 
    useEffect(() => {
        const dummyCourses = [
            {
                id: 1,
                name: "React for Beginners",
                percentageCompleted: 70,
            },
            {
                id: 2,
                name: "Advanced JavaScript",
                percentageCompleted: 15,
            },
            {
                id: 3,
                name: "Node.js Mastery",
                percentageCompleted: 80,
            },
            {
                id: 4,
                name: "Python for Data Science",
                percentageCompleted: 50,
            },
            {
                id: 5,
                name: "UI/UX Design Principles",
                percentageCompleted: 95,
            },
        ];
        setCourses(dummyCourses);
    }, []);

    return (

        <div className='ml-8 mb-6'>

            <div className='flex flex-row justify-between items-center'>
                <span className="p-4 h-14 w-1/6 ml-6 my-4 bg-secondaryBackground text-2xl font-bold rounded-2xl flex justify-center items-center">Courses</span>
                <SearchBar
                    courses={courses}
                    onCourseSelect={(courseId) => navigate(`/courses/${courseId}`)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <FileUpload />


                {courses.map((course, index) => {
                    // Gets the settings for the current course
                    const { backgroundColor, progressColor, icon } = courseSettings[index % courseSettings.length]; //Randomizes
                    const randomAvatar = Avatars[index % Avatars.length];

                    return (
                        <div
                            key={course.id}
                            className={`flex flex-col justify-between w-[500px] h-72 rounded-2xl m-2 p-4 ${backgroundColor} hover:shadow-lg cursor-pointer`}
                            onClick={() => navigate(`/courses/${course.id}`)}
                        >
                            {/* Top icons */}
                            <div className="flex justify-between">
                                <div className='bg-white rounded-full p-2'> <img src={icon} alt="Course Icon" className="w-8 h-8" /> </div>
                                <img src={randomAvatar} alt="Avatar Icon" className="w-8 h-8" />
                            </div>

                            {/* Course Name */}
                            <h2 className="font-bold text-xl mt-8">{course.name}</h2>

                            {/* Progress Bar */}
                            <div className="w-full bg-gray-200 rounded-full h-4 ">
                                <div
                                    className={`h-4 rounded-full ${progressColor}`}
                                    style={{ width: `${course.percentageCompleted}%` }}
                                ></div>
                            </div>

                            {/* Percentage Text */}
                            <p className="">{course.percentageCompleted}% completed</p>
                        </div>
                    );
                })}
            </div>
        </div>

    );
};

export default CourseDisplay;



