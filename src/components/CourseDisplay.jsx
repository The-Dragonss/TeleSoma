import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseIcon1pink from '../assets/CourseIcon1pink.svg';
import CourseIcon2orange from '../assets/CourseIcon2orange.svg';
import Avatar1 from '../assets/Avatar1.svg';
import Avatar2 from '../assets/Avatar2.svg';
import SearchBar from './SearchBar';

const CourseDisplay = () => {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    // Defines colors and their corresponding icons and progress colors
    const courseSettings = [
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

    const Avatars = [Avatar1, Avatar2];

    // Using dummy data with only 2 courses
    useEffect(() => {
        const dummyCourses = [
            {
                id: 1,
                name: "Upload Course Files",
                percentageCompleted: 0,
            },
            {
                id: 2,
                name: "Advanced JavaScript",
                percentageCompleted: 15,
            },
            {
                id: 3,
                name: "Advanced JavaScript",
                percentageCompleted: 100,
            },
        ];
        setCourses(dummyCourses);
    }, []);

    // Function to handle file upload
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log("File selected:", file.name);
            // Handle file upload logic here (e.g., sending file to a server)
        }
    };

    return (
        <div className='ml-5'>
            <div className='flex flex-row justify-between items-center'>
                <span className="p-4 h-6 w-1/6 ml-6 mt-2 bg-secondaryBackground text-2xl font-bold rounded-2xl flex justify-center items-center">Courses</span> {/* Changed mt-4 to mt-2 */}
                <SearchBar
                    courses={courses}
                    onCourseSelect={(courseId) => navigate(`/courses/${courseId}`)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courses.map((course, index) => {
                    // Gets the settings for the current course
                    const { backgroundColor, progressColor, icon } = courseSettings[index % courseSettings.length];
                    const randomAvatar = Avatars[index % Avatars.length];

                    return (
                        <div
                            key={course.id}
                            className={`flex flex-col justify-between w-96 h-56 rounded-2xl m-2 p-4 ${backgroundColor} hover:shadow-lg cursor-pointer`}
                            onClick={() => {
                                if (index === 0) {
                                    // Trigger the file input click event
                                    document.getElementById("file-input").click();
                                } else {
                                    navigate(`/courses/${course.id}`);
                                }
                            }}
                        >
                            {/* Top icons */}
                            <div className="flex justify-between">
                                <div className='bg-white rounded-full p-2'>
                                    <img src={icon} alt="Course Icon" className="w-8 h-8" />
                                </div>
                                <img src={randomAvatar} alt="Avatar Icon" className="w-8 h-8" />
                            </div>

                            {/* Course Name */}
                            <h2 className="font-bold text-xl mt-8">{course.name}</h2>

                            {/* Progress Bar (Only shows for courses with progress) */}
                            {course.percentageCompleted > 0 && (
                                <div className="w-full bg-gray-200 rounded-full h-4 ">
                                    <div
                                        className={`h-4 rounded-full ${progressColor}`}
                                        style={{ width: `${course.percentageCompleted}%` }}
                                    ></div>
                                </div>
                            )}

                            {/* Percentage Text */}
                            {course.percentageCompleted > 0 && <p>{course.percentageCompleted}% completed</p>}
                        </div>
                    );
                })}

                {/* Hidden file input element */}
                <input
                    id="file-input"
                    type="file"
                    style={{ display: 'none' }}
                    onChange={handleFileUpload}
                />
            </div>
        </div>
    );
};

export default CourseDisplay;
