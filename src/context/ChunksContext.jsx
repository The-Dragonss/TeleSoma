// src/contexts/ChunksContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const ChunksContext = createContext();

// Create a provider component
export const ChunksProvider = ({ children }) => {
    const [chunks, setChunks] = useState(() => {
        // Initialize from localStorage if available
        const savedChunks = localStorage.getItem('chunks');
        return savedChunks ? JSON.parse(savedChunks) : null;
    });

    useEffect(() => {
        if (chunks) {
            localStorage.setItem('chunks', JSON.stringify(chunks));
        } else {
            localStorage.removeItem('chunks');
        }
    }, [chunks]);

    return (
        <ChunksContext.Provider value={{ chunks, setChunks }}>
            {children}
        </ChunksContext.Provider>
    );
};
