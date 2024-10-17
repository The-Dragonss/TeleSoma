// OpenaiService.js
import axios from 'axios';

const backendURL = 'http://localhost:3001/api/openai'; // Update if different

export const getOpenAIResponse = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await axios.post(backendURL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error(
            'Error fetching OpenAI response:',
            error.response ? error.response.data : error.message
        );
        throw error;
    }
};
