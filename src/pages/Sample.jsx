// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Dummy data for modules and chunks
const modules = [
    {
        title: 'Module One',
        chunks: [
            { chunkTitle: 'Chunk 1', content: 'This is the content of chunk 1. It can go on for several lines. Here is some more content that might extend beyond the limits. We should ensure this is handled properly.' },
            { chunkTitle: 'Chunk 2', content: 'This is the content of chunk 2.' },
            { chunkTitle: 'Chunk 3', content: 'This is the content of chunk 3. This content can also be quite lengthy. We can include even more details here to simulate a realistic scenario of chunk content.' },
        ],
    },
    {
        title: 'Module Two',
        chunks: [
            { chunkTitle: 'Chunk 1', content: 'This is the content of chunk 1 in Module Two. It can have several lines as well. Let’s add more content here for testing purposes to see how pagination works.' },
            { chunkTitle: 'Chunk 2', content: 'This is the content of chunk 2 in Module Two.' },
        ],
    },
];

const LearningPlatform = () => {
    const [selectedModuleIndex, setSelectedModuleIndex] = useState(0);
    const [currentChunkIndex, setCurrentChunkIndex] = useState(0);
    const [completedModules, setCompletedModules] = useState(new Set());
    const [quizPrompt, setQuizPrompt] = useState(false);

    const handleModuleChange = (index) => {
        if (completedModules.has(index - 1)) {
            setSelectedModuleIndex(index);
            setCurrentChunkIndex(0); // Reset chunk index when changing module
            setQuizPrompt(false); // Reset quiz prompt when changing module
        } else {
            alert("Please complete the previous module and take the quiz before continuing.");
        }
    };

    const currentModule = modules[selectedModuleIndex];
    const currentChunk = currentModule.chunks[currentChunkIndex];

    // Function to handle pagination
    const nextChunk = () => {
        if (currentChunkIndex < currentModule.chunks.length - 1) {
            setCurrentChunkIndex(currentChunkIndex + 1);
        } else {
            // Mark module as complete and prompt for quiz
            setCompletedModules((prev) => new Set(prev).add(selectedModuleIndex));
            setQuizPrompt(true);
        }
    };

    const prevChunk = () => {
        if (currentChunkIndex > 0) {
            setCurrentChunkIndex(currentChunkIndex - 1);
        }
    };

    // Function to handle quiz attempt
    const attemptQuiz = () => {
        setQuizPrompt(false); // Close the quiz prompt
        handleModuleChange(selectedModuleIndex + 1); // Move to the next module
    };

    // Split content into lines and limit to 10 lines per page
    const lines = currentChunk.content.split('\n');
    const maxLines = 10;
    const paginatedContent = lines.slice(currentChunkIndex * maxLines, (currentChunkIndex + 1) * maxLines).join('\n');

    return (
        <div className="flex h-screen bg-background">
            {/* Content Area */}
            <div className="flex flex-1">
                {/* Table of Contents */}
                <div className="w-60 p-4 overflow-y-auto shadow-lg mt-10 bg-secondaryPink rounded-3xl ml-20">
                    <h2 className="font-bold mb-4 mt-4">Table of Contents</h2>
                    <div className="space-y-5">
                        {modules.map((module, index) => (
                            <div key={index}>
                                <h3
                                    className={`font-semibold flex items-center cursor-pointer ${completedModules.has(index) ? 'text-green-600' : 'text-gray-800'}`}
                                    onClick={() => handleModuleChange(index)}
                                >
                                    {module.title}
                                    <ChevronRight className="ml-auto" />
                                </h3>
                                <ul className="mt-4 space-y-3">
                                    {module.chunks.map((chunk, chunkIndex) => (
                                        <li
                                            key={chunkIndex}
                                            className="flex items-center cursor-pointer"
                                            onClick={() => setCurrentChunkIndex(chunkIndex)}
                                        >
                                            <div className={`w-4 h-4 rounded-full ${completedModules.has(index) ? 'bg-green-500' : 'bg-blue-500'} mr-5`}></div>
                                            {chunk.chunkTitle}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-3/4 p-6 flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold mb-4">{currentModule.title}</h1>
                    <div className="bg-purple rounded-lg p-6 relative w-full h-full max-w-4xl">
                        <img src="space.png" alt="Space themed illustration" className="w-full h-auto rounded mt-3" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white p-4 rounded-lg w-3/4 h-96">
                                <h2 className="font-bold">{currentChunk.chunkTitle}</h2>
                                <p className="text-sm whitespace-pre-wrap" style={{ maxHeight: '160px', overflow: 'hidden' }}>
                                    {paginatedContent}
                                </p>
                            </div>
                        </div>
                        <div className="absolute bottom-4 right-4 text-white">{currentChunkIndex + 1}/{currentModule.chunks.length}</div>
                        <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-1" onClick={prevChunk}>
                            <ChevronLeft />
                        </button>
                        <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-1" onClick={nextChunk}>
                            <ChevronRight />
                        </button>
                    </div>
                    {/* Quiz Prompt Modal */}
                    {quizPrompt && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg ml-15">
                                <h2 className="font-bold text-lg mb-4">You've completed this module!</h2>
                                <p>Would you like to attempt the quiz?</p>
                                <div className="flex justify-end mt-4">
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={attemptQuiz}>Attempt Quiz</button>
                                    <button className="ml-2 bg-gray-300 px-4 py-2 rounded" onClick={() => setQuizPrompt(false)}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LearningPlatform;
