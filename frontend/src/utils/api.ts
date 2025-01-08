import axios, { AxiosError } from 'axios';
import { WorkflowFormData, WorkflowResult } from '../types';

const api = axios.create({
  baseURL:'http://localhost:3000/api/langflow',//WorkflowFormData
  timeout: 40000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export const runWorkflow = async (formData: WorkflowFormData): Promise<WorkflowResult> => {
  try {
    const response = await api.post<WorkflowResult>('/run', formData);
    console.log( "log from api : ",response);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error('Error running workflow:', axiosError.response?.data || axiosError.message);
    throw axiosError.response?.data || { message: 'Error running workflow' };
  }
};