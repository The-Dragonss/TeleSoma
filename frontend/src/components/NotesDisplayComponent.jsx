
import React, { useState } from 'react';

const NotesDisplayComponent = ({ notes, backgroundImage }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const notesPerPage = 5; // Max 5 sentences/lines per page

    const totalPages = Math.ceil(notes.length / notesPerPage);



    const currentNotes = notes.slice(currentPage * notesPerPage, (currentPage + 1) * notesPerPage); //calculates the starting & ending index of the notes displayed

    const goToNextPage = () => {
        if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
    };

    const goToPrevPage = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
    };

    return (
        <div
            className="relative w-full max-sm:mb-20 sm:my-28 rounded-2xl bg-cover sm:mx-8 bg-center sm:p-8 flex justify-center items-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="bg-white w-4/5 sm:p-6 rounded-2xl max-sm:h-4/5 sm:h-3/5 shadow-lg flex flex-col justify-between overflow-hidden">
                {currentNotes.length > 0 ? (
                    currentNotes.map((note, index) => (
                        <p
                            key={index}
                            className="mb-4 text-lg break-words overflow-hidden"
                            style={{ whiteSpace: 'pre-wrap' }}
                        >
                            {note}
                        </p>
                    ))
                ) : (
                    <p className="text-gray-500 text-lg">Choose topic to display.</p>
                )}

                <div className="flex justify-between items-center mt-4">
                    <button
                        onClick={goToPrevPage}
                        disabled={currentPage === 0}
                        className={`p-4 bg-primaryPink rounded-full text-2xl transition-opacity ${currentPage === 0 ? 'opacity-50' : 'opacity-100'} hover:opacity-75`}
                    >
                        &larr;
                    </button>
                    <p className="text-lg">
                        {currentPage + 1}/{totalPages}
                    </p>
                    <button
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages - 1}
                        className={`p-4 bg-purple rounded-full text-2xl transition-opacity ${currentPage === totalPages - 1 ? 'opacity-50' : 'opacity-100'} hover:opacity-75`}
                    >
                        &rarr;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotesDisplayComponent;
