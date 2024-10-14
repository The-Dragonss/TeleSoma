import React, { useEffect, useState } from 'react';

const Welcome = () => {
    const [userName, setUserName] = useState('');


    {/*useEffect(() => {
        const fetchUserName = async () => {
            try {
                const response = await fetch('/api/user'); // Adjust endpoint 
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const data = await response.json();
                setUserName(data.name);
            } catch (error) {
                console.error('Error fetching user name:', error);
            }
        };

        fetchUserName();
    }, []);*/}


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
                <h1 className="text-7xl  text-left mt-10">Welcome back,<br></br> {userName}!</h1>
            ) : (
                <h1 className="text-7xl  text-left mt-10">Welcome back!</h1>
            )}
        </div>
    );
};

export default Welcome;


