import React from "react";
import Colablinesvg from "../assets/collabline.svg";

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
    <div className="relative h-screen bg-[#f3ebe5] p-20">
      {/* Collaborative Study Groups */}
      <div
        id="group"
        className="absolute top-12 left-7 border-4 rounded-xl p-5 w-60 text-center shadow-lg"
        style={{ borderColor: "#EF98A1", backgroundColor: "#f3ebe5" }}
      >
        <h3 className="text-xl mb-4" style={{ color: "#EF98A1" }}>
          Collaborative Study Groups
        </h3>
        <p className="text-gray-600">
          Invite friends to join your learning journey.
        </p>
      </div>
      <svg
        className="absolute top-[2rem] left-[18rem]"
        width="690"
        height="750"
        viewBox="0 0 430 406"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M93.8408 2H-0.00390625V0H95.8408V201H214.257V203H93.8408V2Z"
          fill="#EF98A1"
        />
      </svg>

      {/* Gamified Learning with Points */}
      <div
        id="gamified"
        className="absolute top-18 right-16 border-4 rounded-xl p-5 w-60 text-center shadow-lg"
        style={{ borderColor: "#EF98A1", backgroundColor: "#f3ebe5" }}
      >
        <h3 className="text-xl mb-4" style={{ color: "#EF98A1" }}>
          Gamified Learning with Points
        </h3>
        <p className="text-gray-600">
          Earn points as you complete modules, quizzes, and activities. Climb
          the leaderboard.
        </p>
      </div>
      <svg
        className="absolute top-[10rem] right-[19rem]"
        width="470"
        height="197"
        viewBox="0 0 235 97"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M103.179 94.0889H0.733398V96.0889H105.179V2.00024H234.425V0.000236511H103.179V94.0889Z"
          fill="#F4CBCB"
        />
      </svg>

      {/* Personalised Study Guides */}
      <div
        id="pesonalised-study"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 rounded-xl p-5 w-60 text-center shadow-lg z-10"
        style={{ borderColor: "#C38CF3", backgroundColor: "#f3ebe5" }}
      >
        <h3 className="text-xl mb-4" style={{ color: "#C38CF3" }}>
          Personalised Study Guides
        </h3>
        <p className="text-gray-600">
          Receive custom study modules tailored from your uploaded PDFs.
        </p>
      </div>

      {/* Quizzes */}
      <div
        id="quizzes"
        className="absolute bottom-[1.5rem] left-[14rem] border-4 rounded-xl p-5 w-60 text-center shadow-lg"
        style={{ borderColor: "#F8B577", backgroundColor: "#f3ebe5" }}
      >
        <h3 className="text-xl mb-4" style={{ color: "#F8B577" }}>
          Quizzes
        </h3>
        <p className="text-gray-600">
          Test your knowledge with quizzes and challenges built right into your
          study modules.
        </p>
      </div>

      <svg
        className="absolute bottom-[8rem] left-[29rem] z-0"
        width="415"
        height="250"
        viewBox="0 0 469 244"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M206.608 242H0.515625V244H208.608V2H468.351V0H206.608V242Z"
          fill="#F8B577"
        />
      </svg>

      {/* Progress Tracking */}
      <div
        id="Progress"
        className="absolute bottom-10 right-[19rem] border-4 rounded-xl p-5 w-60 text-center shadow-lg z-10"
        style={{ borderColor: "#4CAF50", backgroundColor: "#f3ebe5" }}
      >
        <h3 className="text-xl mb-4" style={{ color: "#4CAF50" }}>
          Progress Tracking
        </h3>
        <p className="text-gray-600">Stay motivated with progress tracking.</p>
      </div>
      <svg
        className="absolute bottom-[3rem] right-[12rem] z-0"
        width="630"
        height="250"
        viewBox="0 0 215 203"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M94.0498 2H0.205078V0H96.0498V201H214.466V203H94.0498V2Z"
          fill="#82EDBF"
        />
      </svg>
    </div>
  );
};

export default Features;
