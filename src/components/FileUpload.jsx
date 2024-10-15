import React, { useState } from 'react';
import Add from '../assets/Add.svg';
import { useNavigate } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';

const FileUploadButton = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        // Validate if the file is a PDF, DOCX, or TXT
        const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
        if (file && allowedTypes.includes(file.type)) {
            setSelectedFile(file);
        } else {
            alert('Please upload a valid document (PDF, DOCX, or TXT)');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (selectedFile) {
            setLoading(true);

            // FormData to send the file to the backend
            const formData = new FormData();
            formData.append('file', selectedFile);

            try {
                // Simulating file upload (Replace with actual API call)
                const response = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData,
                });

                const chunkedNotes = await response.json();
                setLoading(false);
                navigate('/chunkednotesdisplayPage', { state: { chunkedNotes } });

            } catch (error) {
                console.error('Error uploading file:', error);
                setLoading(false);
                alert('There was an error uploading the file.');
            }
        } else {
            alert('Please select a file first!');
        }
    };

    // Handle Cancel
    const handleCancel = () => {
        setSelectedFile(null);  // Clear the selected file
        setLoading(false);      // Ensure loading state is reset
    };

    return (
        <div className="flex flex-col items-center justify-center w-96 h-56 rounded-2xl m-2 bg-Green">
            {loading ? (
                <div className="flex flex-col items-center justify-center text-center">
                    <p className='font-extrabold text-xl p-1'>Uploading and Processing...</p>
                    <Audio
                        height="30"
                        width="30"
                        color="#4fa94d"
                        ariaLabel="audio-loading"
                        visible={true}
                    />
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="file"
                        id="fileInput"
                        accept=".pdf,.docx,.txt"  // Accept PDF, DOCX, and TXT formats
                        onChange={handleFileChange}
                        className="hidden"
                    />

                    {!selectedFile && (
                        <label
                            htmlFor="fileInput"
                            className="flex flex-col items-center justify-center text-center"
                        >
                            <img src={Add} alt="Add icon" className="w-10 h-10" />
                            <p className='font-extrabold text-xl p-1'>Add Document</p>
                            <span className='text-xs'>(PDF, DOCX, TXT)</span>
                        </label>
                    )}

                    {selectedFile && (
                        <>
                            <p className="mt-2 text-gray-700 text-center">{selectedFile.name}</p>
                            <div className="flex flex-col justify-center mt-4">
                                <button
                                    type="submit"
                                    className="p-4 bg-black text-white rounded-2xl mr-2"
                                >
                                    Upload File
                                </button>
                                <button
                                    type="button"
                                    className=" underline"
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </button>
                            </div>
                        </>
                    )}
                </form>
            )}
        </div>
    );
};

export default FileUploadButton;
