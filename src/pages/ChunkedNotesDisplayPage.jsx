// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavColumn from '../components/NavColumn';
import CourseModulesComponent from '../components/CourseModulesComponent';
import NotesDisplayComponent from '../components/NotesDisplayComponent';
import background1 from '../assets/background1.jpg';
import background2 from '../assets/background2.jpg';
import background3 from '../assets/background3.jpg';
import background4 from '../assets/background4.jpg';
import background5 from '../assets/background5.jpg';
import background6 from '../assets/background6.jpg';

const backgroundImages = [
  background1,
  background2,
  background3,
  background4,
  background5,
  background6
];

const ChunkedNotesDisplay = () => {
  const [selectedContent, setSelectedContent] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [isNotesVisible, setIsNotesVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const courseData = {
    title: "React for Beginners",
    modules: [
      { title: "Introduction", description: "Learn the basics of React.", notes: ["Note 1", "Note 2"] },
      { title: "Components", description: "Understanding React components.", notes: ["Note 3", "Note 4"] },
      { title: "State and Props", description: "Managing state and props in React.", notes: ["Note 5", "Note 6"] }
    ],
    quizzes: [{ title: "Quiz for React for Beginners" }]
  };

  const handleModuleSelect = (moduleOrQuiz) => {
    if (!moduleOrQuiz.notes) {
      navigate('/quiz');
    } else {
      setSelectedContent(moduleOrQuiz.notes);
      setIsNotesVisible(true);
    }
  };

  const getRandomBackgroundImage = () => {
    return backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
  };

  return (
    <div className="bg-background max-sm:flex-col sm:h-screen flex">
      <NavColumn />
      <div className="bg-secondaryBackground max-sm:auto flex w-full sm:my-14 max-sm:h-screen sm:mx-8 justify-center rounded-2xl">
        {isSmallScreen ? (
          !isNotesVisible ? (
            <CourseModulesComponent
              courseTitle={courseData.title}
              modules={courseData.modules}
              onModuleSelect={handleModuleSelect}
            />
          ) : (
            <NotesDisplayComponent
              notes={selectedContent || []}
              backgroundImage={getRandomBackgroundImage()}
            />
          )
        ) : (
          <>
            <CourseModulesComponent
              courseTitle={courseData.title}
              modules={courseData.modules}
              onModuleSelect={handleModuleSelect}
            />
            <NotesDisplayComponent
              notes={selectedContent || []}
              backgroundImage={getRandomBackgroundImage()}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ChunkedNotesDisplay;