import React, { useState } from 'react';
import Add from '../assets/Add.svg'

const FileUploadButton = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        console.log('File selected:', file);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedFile) {
            // Handle the file upload
            console.log('File ready to be uploaded:', selectedFile);
        } else {
            alert('Please select a file first!');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-96 h-56 rounded-2xl m-2 bg-Green">
            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    id="fileInput"
                    onChange={handleFileChange}
                    className="hidden"
                />

                {/* Conditionally renders the "Add Document" section only if no file is selected */}
                {!selectedFile && (
                    <label
                        htmlFor="fileInput"
                        className="flex flex-col items-center justify-center text-center"
                    >
                        <img src={Add} alt="Add icon" className="w-10 h-10" />
                        <p className=' font-extrabold text-xl p-1'>Add Document</p>
                    </label>
                )}

                {selectedFile && (
                    <>
                        <p className="mt-2 text-gray-700">{selectedFile.name}</p>
                        <button
                            type="submit"
                            className="mt-4 p-4 bg-black text-white rounded-2xl"
                        >
                            Upload File
                        </button>

                    </>
                )}
            </form>
        </div>
    );
};

export default FileUploadButton;
