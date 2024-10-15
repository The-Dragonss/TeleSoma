// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

const Welcome = () => {
    const [userName, setUserName] = useState('');


    useEffect(() => {
        // Simulate fetching user data
        const fetchUserName = async () => {
            // Mock API response
            const mockApiResponse = {
                name: "Olivia Youndeloke", // Dummy user name
            };

            // Simulate a delay for fetching
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setUserName(mockApiResponse.name);
        };

        fetchUserName();
    }, []);

    return (
        <div className="text-center p-4 ml-8 h-1/3  ">
            {userName ? (
                <h1 className="text-7xl  text-left mt-5">Welcome back,<br></br> {userName}!</h1>
            ) : (
                <h1 className="text-7xl  text-left mt-10">Welcome back!</h1>
            )}
        </div>
    );
};

export default Welcome;


