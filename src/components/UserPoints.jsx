import React, { useState, useEffect } from 'react';

const UserPoints = () => {
    // State for daily and total points
    const [dailyXP, setDailyXP] = useState(0);
    const [totalXP, setTotalXP] = useState(0); // Assume the user has 1000 points initially

    // Function to update points when an action is completed
    const earnPoints = (points) => {
        setDailyXP(prevDailyXP => prevDailyXP + points);
        setTotalXP(prevTotalXP => prevTotalXP + points);
    };

    // Example of earning points (e.g., after completing a course or quiz)
    useEffect(() => {
        // Simulate a user earning points after completing an action
        const timer = setTimeout(() => {
            earnPoints(50); // Earn 50 points for an action
        }, 2000); // After 2 seconds

        return () => clearTimeout(timer);
    }, []);

    //Reset daily points at the end of the day
    useEffect(() => {
        const resetDailyPoints = () => {
            setDailyXP(0);
        };


        const midnight = new Date();
        midnight.setHours(24, 0, 0, 0);
        const timeToMidnight = midnight.getTime() - new Date().getTime();

        const resetTimer = setTimeout(resetDailyPoints, timeToMidnight);

        return () => clearTimeout(resetTimer);
    }, []);

    return (
        <div className="flex flex-col items-center  w-full p-4">

            {/* Display Daily Points and Total Points */}
            <div className="flex justify-between items-center w-4/5 my-4 bg-white rounded-2xl">
                {/* Daily XP */}
                <div className="flex flex-col items-center bg-white p-4 rounded-lg w-1/2 mx-2">
                    <h3 className="text-lg font-bold">Daily XP</h3>
                    <p className="text-xl">{dailyXP}</p>
                </div>
                <span className="block w-0.5 h-3/4 align-center bg-black"></span>

                {/* Total XP */}
                <div className="flex flex-col items-center bg-white p-4 rounded-lg w-1/2 mx-2">
                    <h3 className="text-lg font-bold">Total XP</h3>
                    <p className="text-xl">{totalXP}</p>
                </div>
            </div>

            {/* Button to simulate earning more points 
            <button
                className="bg-blue-500 text-white p-2 rounded-lg"
                onClick={() => earnPoints(10)} // Earn 10 points when clicked
            >
                Earn 10 Points
            </button>*/}
        </div>
    );
};

export default UserPoints;
