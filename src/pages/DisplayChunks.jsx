// src/components/DisplayChunks.js
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { ChunksContext } from '../context/ChunksContext';

const DisplayChunks = () => {
    const { chunks } = useContext(ChunksContext);

    if (!chunks) {
        return <p>No chunks available. Please upload a document.</p>;
    }

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Document Chunks</h2>
            <pre className="bg-gray-100 p-2 rounded overflow-auto">
                {JSON.stringify(chunks, null, 2)}
            </pre>
        </div>
    );
};

export default DisplayChunks;
