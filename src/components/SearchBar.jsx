import React, { useEffect, useState } from 'react';
import SearchIcon from '../assets/Search.svg';

const SearchBar = ({ courses, onCourseSelect }) => {
    const [searchInput, setSearchInput] = useState('');
    const [filteredCourses, setFilteredCourses] = useState([]);

    // Update filtered courses based on search input
    useEffect(() => {
        const results = courses.filter(course =>
            course.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilteredCourses(results);
    }, [searchInput, courses]);

    return (
        <div className="relative flex flex-col w-1/4 justify-center items-center mr-4">
            {/* Container for the input and icon */}
            <div className="flex items-center bg-secondaryBackground rounded-2xl p-2 mx-6 mt-4 w-full">
                {/* Icon before the input */}
                <img src={SearchIcon} alt="Search" className="w-6 h-6 mr-2" />

                {/* Input field for searching */}
                <input
                    type="text"
                    placeholder="Search for courses..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="bg-secondaryBackground flex-grow rounded-2xl p-2 h-10 w-full outline-none"
                />
            </div>

            {/* Only show the suggestions if the user is typing */}
            {searchInput && filteredCourses.length > 0 && (
                <ul className="absolute bg-white rounded top-20 shadow-lg mt-1 w-full mx-6 z-10">
                    {filteredCourses.map(course => (
                        <li
                            key={course.id}
                            className="p-2 hover:bg-gray-200 cursor-pointer"
                            onClick={() => {
                                setSearchInput(''); // Clear the input after selection
                                onCourseSelect(course.id); // Trigger course selection
                            }}
                        >
                            {course.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
