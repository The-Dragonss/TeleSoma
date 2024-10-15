import React, { useState } from "react";
import spacebg from "../assets/forestbg.jpg"; // Ensure the image path is correct

const ModuleView = () => {
  const [currentModule, setCurrentModule] = useState(1);
  const totalModules = 4;
  const progress = ((currentModule - 1) / (totalModules - 1)) * 100;

  const handleModuleChange = (moduleNumber) => {
    setCurrentModule(moduleNumber);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar Section */}
      <div className="w-1/4 bg-gray-100 p-4 border-r border-gray-300">
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Table of Contents</h3>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full bg-gray-300 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-right text-gray-600 text-sm mt-1">
            {progress.toFixed(0)}% completed
          </div>
        </div>

        {/* Module List */}
        <div className="space-y-4">
          <div>
            <h4 className="text-md font-medium mb-2">Section One Title</h4>
            <ul className="space-y-2">
              <li
                className="cursor-pointer"
                onClick={() => handleModuleChange(1)}
              >
                <span
                  className={`${
                    currentModule === 1 ? "text-blue-600" : "text-gray-700"
                  } hover:text-blue-600`}
                >
                  Module One
                </span>
              </li>
              <li
                className="cursor-pointer"
                onClick={() => handleModuleChange(2)}
              >
                <span
                  className={`${
                    currentModule === 2 ? "text-blue-600" : "text-gray-700"
                  } hover:text-blue-600`}
                >
                  Module Two
                </span>
              </li>
              <li
                className="cursor-pointer"
                onClick={() => handleModuleChange(3)}
              >
                <span
                  className={`${
                    currentModule === 3 ? "text-blue-600" : "text-gray-700"
                  } hover:text-blue-600`}
                >
                  Module Three
                </span>
              </li>
              <li
                className="cursor-pointer"
                onClick={() => handleModuleChange(4)}
              >
                <span
                  className={`${
                    currentModule === 4 ? "text-blue-600" : "text-gray-700"
                  } hover:text-blue-600`}
                >
                  Quiz
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-3/4 flex justify-center items-center relative p-8">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat p-8 rounded-lg shadow-lg border border-gray-300"
          style={{
            backgroundImage: `url(${spacebg})`,
            backgroundSize: "cover",
            borderRadius: "20px",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          {/* Centered Content */}
          <div className="flex justify-center items-center h-full">
            <div className="w-1/2 h-55 bg-modulecolor bg-opacity-90 rounded-lg shadow-md p-12 text-center relative border border-gray-300">
              {/* Top Progress Indicator */}
              <div className="absolute top-4 right-4 text-gray-700">
                <span>{progress.toFixed(0)}%</span>
              </div>

              {/* Content */}
              <div className="text-lg font-semibold mb-4">
                Module {currentModule} Title
              </div>
              <div className="text-gray-700 text-md">
                {currentModule === 1 && (
                  <p>
                    Technology has revolutionized the way we live, work, and
                    communicate. From smartphones and laptops to artificial
                    intelligence and the Internet of Things, tech advancements
                    have made our lives more connected and efficient.
                  </p>
                )}
                {currentModule === 2 && <p>Content for Module Two</p>}
                {currentModule === 3 && <p>Content for Module Three</p>}
                {currentModule === 4 && <p>Quiz Section</p>}
              </div>

              {/* Pagination */}
              <div className="flex justify-between mt-6">
                <button
                  className={`px-4 py-2 bg-gray-200 rounded-md ${
                    currentModule === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={() => handleModuleChange(currentModule - 1)}
                  disabled={currentModule === 1}
                >
                  Previous
                </button>
                <button
                  className={`px-4 py-2 bg-blue-600 text-white rounded-md ${
                    currentModule === 4 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={() => handleModuleChange(currentModule + 1)}
                  disabled={currentModule === 4}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleView;
