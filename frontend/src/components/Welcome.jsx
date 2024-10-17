// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Welcome = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                // User is signed in
                setUser(currentUser);
            } else {
                // User is signed out
                setUser(null);
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [auth]);

    const getGreeting = () => {
        if (user) {
            // Use display name if available, otherwise use email
            const name = user.displayName || user.email.split('@')[0];
            return `Welcome, ${name}!`;
        }
        return 'Welcome!';
    };

    return (
        <div className="text-center p-4 ml-8 h-1/3">
            <h1 className="text-7xl text-left mt-10">{getGreeting()}</h1>
        </div>
    );
};

export default Welcome;