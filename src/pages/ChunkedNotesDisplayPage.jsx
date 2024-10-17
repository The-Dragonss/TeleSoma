// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChunksContext } from '../context/ChunksContext'; // Import useChunks hook
import NavColumn from '../components/NavColumn';
import CourseModulesComponent from '../components/CourseModulesComponent';
import NotesDisplayComponent from '../components/NotesDisplayComponent';
import background1 from '../assets/background1.jpg';
import background2 from '../assets/background2.jpg';
import background3 from '../assets/background3.jpg';
import background4 from '../assets/background4.jpg';
import background5 from '../assets/background5.jpg';
import background6 from '../assets/background6.jpg';

const backgroundImages = [background1, background2, background3, background4, background5, background6];

const ChunkedNotesDisplay = () => {
    const [selectedContent, setSelectedContent] = useState(null);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768); // Initial state
    const [isNotesVisible, setIsNotesVisible] = useState(false); // To control module or notes display
    const navigate = useNavigate();
    
    // Fetch chunks from the context
    const { chunks } = useContext(ChunksContext);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize); // Listen to window resize

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Transform the summarizedContent into a structure that the CourseModulesComponent can use
    const modules = chunks.summarizedContent.map(item => ({
        title: item.chunk,
        description: item.description,
        notes: [item.content]
    }));

    const handleModuleSelect = (moduleOrQuiz) => {
        if (!moduleOrQuiz.notes) {
            navigate('/quiz');
        } else {
            setSelectedContent(moduleOrQuiz.notes);
            setIsNotesVisible(true); // Show notes on small screen
        }
    };

    return (
        <div className="bg-background max-sm:flex-col sm:h-screen flex">
            <NavColumn />

            <div className="bg-secondaryBackground max-sm:auto flex w-full sm:my-14 max-sm:h-screen sm:mx-8 justify-center rounded-2xl">
                {isSmallScreen ? (
                    !isNotesVisible ? (
                        <CourseModulesComponent
                            courseTitle={chunks.title} // Dynamic title from chunks
                            modules={modules} // Use the transformed modules data
                            onModuleSelect={handleModuleSelect}
                        />
                    ) : (
                        <NotesDisplayComponent
                            notes={selectedContent || []}
                            backgroundImage={backgroundImages[Math.floor(Math.random() * backgroundImages.length)]}
                        />
                    )
                ) : (
                    <>
                        <CourseModulesComponent
                            courseTitle={chunks.title} // Dynamic title from chunks
                            modules={modules} // Use the transformed modules data
                            onModuleSelect={handleModuleSelect}
                        />
                        <NotesDisplayComponent
                            notes={selectedContent || []}
                            backgroundImage={backgroundImages[Math.floor(Math.random() * backgroundImages.length)]}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default ChunkedNotesDisplay;
