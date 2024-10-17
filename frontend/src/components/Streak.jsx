import React, { useEffect, useState } from 'react';
import Flame from '../assets/Flame.svg'

const Streak = ({ streakCount, lastActiveDate }) => {
    const [streak, setStreak] = useState(streakCount);
    const [today, setToday] = useState(new Date().getDay()); // Get current day

    useEffect(() => {
        const todayDate = new Date();

        // Check if the last active date was yesterday or today
        const isConsecutiveDay = (date1, date2) => {
            const diffInTime = Math.abs(date2.getTime() - date1.getTime());
            const diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));
            return diffInDays <= 1;
        };

        if (isConsecutiveDay(new Date(lastActiveDate), todayDate)) {
            setStreak(prev => prev + 1);
        } else if (new Date(lastActiveDate).getDate() !== todayDate.getDate()) {
            setStreak(0); // Reset if no activity for a day
        }
    }, [lastActiveDate]);

    return (
        <div className="w-full my-4">
            {/* Daily Streak */}
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Daily Streak</h3>
                <div className="flex items-center">
                    <img src={Flame} alt="Streak" className="w-6 h-6" />
                    <span className="ml-2 text-lg">{streak}</span>
                </div>
            </div>

            {/* Weekly Progress */}
            <div className="flex justify-around mb-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                    <div
                        key={index}
                        className={`w-10 h-10 rounded-full border border-black flex items-center justify-center 
                        ${today === index ? 'bg-pink-400' : 'bg-white'}`}
                    >
                        {day}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Streak;
