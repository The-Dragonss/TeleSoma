import React, { useState, useEffect } from 'react';

const RandomQuotes = () => {
    // Array of predefined study quotes
    const quotes = [
        { quote: "“It does not matter how slowly you go as long as you do not stop.”", author: "Confucius" },
        { quote: "“The beautiful thing about learning is that no one can take it away from you.”", author: "B.B. King" },
        { quote: "“Success is the sum of small efforts, repeated day in and day out.”", author: "Robert Collier" },
        { quote: "“The expert in anything was once a beginner.”", author: "Helen Hayes" },
        { quote: "“You don’t have to be great to start, but you have to start to be great.”", author: "Zig Ziglar" },
        { quote: "“Education is the most powerful weapon which you can use to change the world.”", author: "Nelson Mandela" },
    ];

    // State to store the randomly selected quote
    const [randomQuote, setRandomQuote] = useState({});

    // Function to randomly pick a quote
    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setRandomQuote(quotes[randomIndex]);
    };

    // Get a new random quote when the component first loads
    useEffect(() => {
        getRandomQuote();
    }, []);

    return (
        <div className="w-full  p-4 text-center">
            <p className="italic text-2xl">"{randomQuote.quote}"</p>
            <p className="font-bold">- {randomQuote.author}</p>
        </div>
    );
};

export default RandomQuotes;
