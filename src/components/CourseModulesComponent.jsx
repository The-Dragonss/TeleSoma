import React from 'react';

//can add those radial buttons that turn green once a module has been gone through nice to have but tiiiiimeeeeeeeeeeeeeeee
const CourseModulesComponent = ({ courseTitle, modules, onModuleSelect }) => {
    return (
        <div className="sm:w-1/4 my-10 max-sm:mx-auto sm:my-36 rounded-2xl ml-8 flex flex-col bg-white ">
            <h1 className="text-3xl font-bold p-4 my-4">{courseTitle}</h1>

            <div className='flex flex-col justify-evenly p-4 mb-16 '>
                {modules.map((module, index) => (
                    <div key={index} className="mb-4 cursor-pointer p-4 " onClick={() => onModuleSelect(module)}>
                        <h2 className="text-xl font-semibold">{module.title}</h2>
                        <p className="text-gray-600">{module.description}</p>
                    </div>
                ))}</div>

            <div className="mt-4 p-4">
                <div className="mt-2 cursor-pointer" onClick={() => onModuleSelect({ notes: [] })}>
                    <p className="text-gray-800 rounded-2xl bg-secondaryBackground text-2xl font-bold p-4">{`Quiz for ${courseTitle}`}</p>
                </div>
            </div>
        </div>
    );
};

export default CourseModulesComponent;
