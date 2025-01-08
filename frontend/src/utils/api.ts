import axios, { AxiosError } from 'axios';
import { WorkflowFormData, WorkflowResult } from '../types';

const Backend_Url = import.meta.env.Backend_API

const api = axios.create({
  baseURL: Backend_Url ||'https://original-bebe-yashvardhan-09a9299f.koyeb.app/api/langflow',
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