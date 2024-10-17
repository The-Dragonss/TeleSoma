import React, { useEffect, useState } from 'react';

const CompletedTracking = () => {
    const [courseComplete, setCourseComplete] = useState(0);  // State for completed courses
    const [modulesComplete, setModulesComplete] = useState(0); // State for completed modules
    const [quizzesComplete, setQuizzesComplete] = useState(0); // State for completed quizzes

    // Fetch data when the component loads
    {/*useEffect(() => {
        const fetchCompletionData = async () => {
            try {
                // Fetch the data from your API
                const response = await fetch('/api/user-completion-data');
                const data = await response.json();

                // Update the state with the fetched data
                setCourseComplete(data.coursesCompleted);
                setModulesComplete(data.modulesCompleted);
                setQuizzesComplete(data.quizzesCompleted);
            } catch (error) {
                console.error("Error fetching completion data:", error);
            }
        };

        fetchCompletionData();
    }, []);*/}


    useEffect(() => {
        // Dummy data to simulate the API response
        const dummyData = {
            coursesCompleted: 0,
            modulesCompleted: 0,
            quizzesCompleted: 0
        };

        // Simulating a fetch call with a timeout
        const fetchCompletionData = () => {
            setTimeout(() => {
                setCourseComplete(dummyData.coursesCompleted);
                setModulesComplete(dummyData.modulesCompleted);
                setQuizzesComplete(dummyData.quizzesCompleted);
            }, 1000); // Delay of 1 second to simulate API call
        };

        fetchCompletionData();
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4 p-2">
            {/* Course Complete */}
            <div className=" rounded-2xl text-center bg-primaryOrange ">
                <h3 className="text-sm font-bold bg-secondaryOrange rounded-2xl">Courses Complete</h3>
                <p className="text-2xl font-bold pt-4">{courseComplete}</p>
            </div>



            {/* Modules Complete */}
            <div className=" bg-purple rounded-2xl text-center">
                <h3 className="text-sm font-bold bg-secondaryPurple rounded-2xl">Modules Complete</h3>
                <p className="text-2xl font-bold pt-4">{modulesComplete}</p>
            </div>





            {/* Quizzes Completed */}
            <div className="bg-Green rounded-2xl text-center">
                <h3 className="text-sm font-bold bg-teal-200 rounded-2xl">Quizzes Completed</h3>
                <p className="text-2xl font-bold pt-4">{quizzesComplete}</p>
            </div>
        </div>
    );
};

export default CompletedTracking;
