import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti'; // For confetti effect
import QuizIcon from '../assets/QuizIcon.svg'

const QuizPage = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [feedback, setFeedback] = useState(null); // null, 'correct', or 'incorrect'

    // Fetch questions on component mount
    useEffect(() => {
        // Simulating an API fetch
        const fetchedQuestions = [
            { question: "What is React?", choices: ["Library", "Framework", "Language", "Tool"], correct: "Library" },
            { question: "What is JSX?", choices: ["JavaScript XML", "JavaScript Extension", "Java External", "None"], correct: "JavaScript XML" },
            { question: "What is React?", choices: ["Library", "Framework", "Language", "Tool"], correct: "Library" },
            { question: "What is React?", choices: ["Library", "Framework", "Language", "Tool"], correct: "Library" },
            { question: "What is JSX?", choices: ["JavaScript XML", "JavaScript Extension", "Java External", "None"], correct: "JavaScript XML" },
            { question: "What is React?", choices: ["Library", "Framework", "Language", "Tool"], correct: "Library" },
            { question: "What is JSX?", choices: ["JavaScript XML", "JavaScript Extension", "Java External", "None"], correct: "JavaScript XML" },
            { question: "What is React?", choices: ["Library", "Framework", "Language", "Tool"], correct: "Library" },
            { question: "What is JSX?", choices: ["JavaScript XML", "JavaScript Extension", "Java External", "None"], correct: "JavaScript XML" },
            { question: "What is JSX?", choices: ["JavaScript XML", "JavaScript Extension", "Java External", "None"], correct: "JavaScript XML" },

            // Add more questions here
        ];
        setQuestions(fetchedQuestions);
    }, []);

    const handleAnswerSelect = (selectedAnswer) => {
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedAnswer === currentQuestion.correct) {
            setFeedback('correct');
            setScore((prevScore) => prevScore + 1);
        } else {
            setFeedback('incorrect');
        }
        setUserAnswers({ ...userAnswers, [currentQuestionIndex]: selectedAnswer });
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setFeedback(null); // Reset feedback
        } else {
            setQuizFinished(true);
            if ((score / questions.length) * 100 > 70) {
                confetti(); // Trigger confetti if score is above 70%
            }
        }
    };

    const handlePrevQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setFeedback(null); // Reset feedback
        }
    };

    if (quizFinished) {
        const percentage = (score / questions.length) * 100;
        return (
            <div className="flex flex-col items-center gap-2 justify-center h-screen bg-background">
                <h1 className="text-6xl font-bold">Quiz Finished!</h1>
                <p className="text-3xl font-semibold">Your score: {percentage}%</p>
                {percentage > 70 ? (
                    <p className="text-green-500 text-xl">🎉 Congratulations! You passed!</p>
                ) : (
                    <p className="text-red-500 text-xl" >😢 Better luck next time!</p>
                )}
            </div>
        );
    }

    return (
        <div className="p-8 flex flex-col  w-full">

            <div className="flex justify-center mb-6">
                <img src={QuizIcon} alt="Quiz Icon" className="h-2/4 w-2/4 mx-auto" />
            </div>


            <div className="w-40 bg-gray-300 h-4 mb-4 rounded-2xl mx-auto">
                <div className="bg-secondaryPink h-4 rounded-2xl" style={{ width: `${(currentQuestionIndex / questions.length) * 100}%` }}></div>
            </div>

            {/* Question Counter */}
            <p className="text-center text-xl sm:text-3xl font-bold my-4">
                {currentQuestionIndex + 1} of {questions.length}
            </p>

            <div className='bg-secondaryBackground rounded-2xl w-full p-8 h-5/6'>
                {/* Current Question */}
                <h2 className="sm:text-3xl text-xl text-center font-semibold mb-6">{questions[currentQuestionIndex]?.question}</h2>

                {/* Answer Choices */}
                <div className="grid grid-cols-1 gap-8 smtext-2xl font-semibold mb-6 sm:mt-20 mx-auto w-full sm:w-2/3">
                    {questions[currentQuestionIndex]?.choices.map((choice, index) => (
                        <button
                            key={index}
                            className={`flex items-center p-6 rounded-2xl text-left w-full mx-auto ${userAnswers[currentQuestionIndex] === choice
                                ? feedback === 'correct'
                                    ? 'bg-Green'
                                    : 'bg-red-300'
                                : 'bg-background'
                                }`}
                            onClick={() => handleAnswerSelect(choice)}
                        >
                            {/* Circle containing the letter A, B, C, D */}
                            <div className="sm:w-12 sm:h-12 w-8 h-8 rounded-full bg-primaryPink flex items-center justify-center mr-4 text-black font-bold">
                                {String.fromCharCode(65 + index)} {/* 65 is ASCII for 'A' */}
                            </div>
                            {choice}
                        </button>
                    ))}
                </div>


                {/* Navigation Buttons */}
                <div className="flex justify-between sm:mt-20">
                    <button onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0} className="p-4 rounded-2xl bg-black font-semibold text-background ">Prev</button>
                    <button onClick={handleNextQuestion} className="p-4 bg-black text-background font-semibold rounded-2xl">
                        {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizPage;
