import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NotificationIcon from '../assets/NotificationIcon.svg';
import ModeIcon from '../assets/ModeIcon.svg';
import UserAvatar from '../assets/Avatar1.svg';
import UserPoints from './UserPoints';
import Streak from './Streak';
import CompletedTracking from './CompletedTracking';
import RandomQuotes from './RandomQoutes';
const RightColumn = () => {
    const [showNotifications, setShowNotifications] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center gap-4 w-1/5  my-6 mx-8 rounded-2xl p-4 bg-secondaryBackground max-sm:hidden">
            {/* First Section */}
            <div className="flex justify-between w-full mb-4">
                <img
                    src={NotificationIcon}
                    alt="Notifications"
                    className="w-8 h-8 cursor-pointer"
                    onClick={() => setShowNotifications(!showNotifications)}
                />
                <img src={ModeIcon} alt="Mode" className="w-8 h-8 cursor-pointer" />
            </div>

            {/* Notification Pop-up */}
            {showNotifications && (
                <div className="absolute top-12 right-1/4 bg-white rounded-lg shadow-lg p-4">
                    {/* Replace with dynamic notification data */}
                    <p>No new notifications</p>
                </div>
            )}

            {/* User Avatar */}
            <img
                src={UserAvatar}
                alt="User Profile"
                className="w-20 h-20 rounded-full cursor-pointer mb-4"
                onClick={() => navigate('/profile')}
            />

            <UserPoints />
            <div className='bg-background rounded-2xl p-6'>
                <Streak />
                <span className="flex flex-row h-0.5 w-full align-center bg-black m-2"></span>
                <CompletedTracking />
            </div>

            <RandomQuotes />
        </div>





    )



}

export default RightColumn