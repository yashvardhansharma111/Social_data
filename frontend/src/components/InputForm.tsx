import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { WorkflowFormData, InputFormProps } from '../types';

const initialFormData: WorkflowFormData = {
  inputValue: '',
  inputType: 'text',
  outputType: 'chat',
  streaming: false,
};

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<WorkflowFormData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' 
        ? (e.target as HTMLInputElement).checked 
        : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const inputTypes = [
    { value: 'text', label: 'Text' },
    { value: 'url', label: 'URL' },
    { value: 'file', label: 'File' },
  ] as const;

  const outputTypes = [
    { value: 'chat', label: 'Chat' },
    { value: 'text', label: 'Text' },
    { value: 'any', label: 'Any' },
    { value: 'debug', label: 'Debug' },
  ] as const;

  return (
    <motion.div
      className="bg-[#1A1A2E] shadow-lg rounded-lg p-6 mb-8 border border-blue-900/30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label 
            htmlFor="inputValue" 
            className="block text-sm font-medium text-blue-300"
          >
            Input
          </label>
          <input
            id="inputValue"
            name="inputValue"
            type="text"
            required
            placeholder="Enter your input here..."
            className="w-full px-3 py-2 bg-[#111827] border border-blue-900/50 rounded-md shadow-sm 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                     text-blue-100 placeholder-blue-700"
            value={formData.inputValue}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-1">
          <label 
            htmlFor="inputType" 
            className="block text-sm font-medium text-blue-300"
          >
            Input Type
          </label>
          <select
            id="inputType"
            name="inputType"
            className="w-full px-3 py-2 bg-[#111827] border border-blue-900/50 rounded-md shadow-sm 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                     text-blue-100"
            value={formData.inputType}
            onChange={handleChange}
          >
            {inputTypes.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <label 
            htmlFor="outputType" 
            className="block text-sm font-medium text-blue-300"
          >
            Output Type
          </label>
          <select
            id="outputType"
            name="outputType"
            className="w-full px-3 py-2 bg-[#111827] border border-blue-900/50 rounded-md shadow-sm 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                     text-blue-100"
            value={formData.outputType}
            onChange={handleChange}
          >
            {outputTypes.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <input
            id="streaming"
            name="streaming"
            type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-blue-300 rounded 
                     cursor-pointer"
            checked={formData.streaming}
            onChange={handleChange}
          />
          <label 
            htmlFor="streaming" 
            className="text-sm text-blue-300 cursor-pointer"
          >
            Enable streaming mode
          </label>
        </div>

        <motion.button
          type="submit"
          className="w-full flex justify-center items-center px-4 py-2 border border-transparent 
                   rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 
                   hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                   focus:ring-blue-500 transition-colors duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Send className="w-5 h-5 mr-2" />
          Run Workflow
        </motion.button>
      </form>
    </motion.div>
  );
};

export default InputForm;