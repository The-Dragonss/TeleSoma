// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Features.css";

const features = [
  {
    id: "group",
    title: "Collaborative Study Groups",
    description: "Invite friends to join your learning journey.",
    color: "#EF98A1",
  },
  {
    id: "gamified",
    title: "Gamified Learning with Points",
    description:
      "Earn points as you complete modules, quizzes, and activities. Climb the leaderboard.",
    color: "#EF98A1",
  },
  {
    id: "pesonalised-study",
    title: "Personalised Study Guides",
    description:
      "Receive custom study modules tailored from your uploaded PDFs.",
    color: "#C38CF3",
  },
  {
    id: "quizzes",
    title: "Quizzes",
    description:
      "Test your knowledge with quizzes and challenges built right into your study modules.",
    color: "#F8B577",
  },
  {
    id: "Progress",
    title: "Progress Tracking",
    description: "Stay motivated with progress tracking.",
    color: "#4CAF50",
  },
];

const Features = () => {
  return (
    <div className="features-container h-screen">
       <h1 className='text-center font-bold text-2xl  pt-8 md:text-5xl '>Features</h1>
      {features.map((feature, index) => (
        <div
          key={index}
          id={feature.id} /* Assigning the ID */
          className="feature-card"
          style={{ borderColor: feature.color }}
        >
          <h3 key={index} style={{ color: feature.color }}>
            {feature.title}
          </h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
