import axios from 'axios';

// Create an axios instance with a base URL and custom configuration
const api = axios.create({
  baseURL: 'http://localhost:5173',
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Function to run the workflow
export const runWorkflow = async (formData: any) => {
  try {
    const response = await api.post('/workflow', formData);
    return response.data;
  } catch (error) {
    console.error('Error running workflow:', error);
    throw error;
  }
};

export default api;

