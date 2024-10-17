//import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//can add those radial buttons that turn green once a module has been gone through nice to have but tiiiiimeeeeeeeeeeeeeeee
const CourseModulesComponent = ({ courseTitle, modules, onModuleSelect }) => {
    const navigate = useNavigate();

    //const CourseModulesComponent = ({ courseTitle, onModuleSelect }) => {
    // const [modules, setModules] = useState([]);
    //const [loading, setLoading] = useState(false);
    //const [error, setError] = useState(null);
    //const navigate = useNavigate();

    {/*useEffect(() => {
             const fetchModules = async () => {
                 setLoading(true);
                 try {
                     const response = await fetch(`/api/courses/${courseTitle}/modules`); 
                     const data = await response.json();
                     setModules(data.modules); // Assuming the response contains an array of modules
                 } catch (err) {
                     console.error('Error fetching modules:', err);
                     setError('Failed to load modules.');
                 } finally {
                     setLoading(false);
                 }
             };
     
             fetchModules();
         }, [courseTitle]);
     */}
    return (
        <div className="sm:w-1/4 my-10 max-sm:mx-auto sm:my-36 rounded-2xl ml-8 flex flex-col bg-white sm:overflow-y-auto">
            <h1 className="text-2xl font-bold p-4 my-4  ">{courseTitle}</h1>

            {/*{loading && <p>Loading modules...</p>}
            {error && <p className="text-red-500">{error}</p>}*/}

            <div className='flex flex-col justify-evenly p-4 mb-16 '>
                {modules.map((module, index) => (
                    <div key={index} className="mb-4 cursor-pointer p-4 " onClick={() => onModuleSelect(module)}>
                        <h2 className="text-xl font-semibold">{module.title}</h2>
                        <p className="text-gray-600">{module.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-4 p-4">
                <div className="mt-2 cursor-pointer"
                    onClick={() => navigate(`/quizpage`)}>
                    <p className="text-gray-800 rounded-2xl bg-secondaryBackground text-2xl text-center font-bold p-4">{`Quiz`}</p>
                </div>
            </div>
        </div>
    );
};

export default CourseModulesComponent;





