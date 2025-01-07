import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface InputFormProps {
  onSubmit: (formData: any) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    inputValue: '',
    inputType: 'text',
    outputType: 'chat', // Default to a valid value
    streaming: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <motion.div
      className="bg-[#1A1A2E] shadow-lg rounded-lg p-6 mb-8 border border-blue-900/30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="inputValue" className="block text-sm font-medium text-blue-300 mb-1">
            Input
          </label>
          <input
            id="inputValue"
            name="inputValue"
            type="text"
            required
            className="w-full px-3 py-2 bg-[#111827] border border-blue-900/50 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-blue-100"
            value={formData.inputValue}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="inputType" className="block text-sm font-medium text-blue-300 mb-1">
            Input Type
          </label>
          <select
            id="inputType"
            name="inputType"
            className="w-full px-3 py-2 bg-[#111827] border border-blue-900/50 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-blue-100"
            value={formData.inputType}
            onChange={handleChange}
          >
            <option value="text">Text</option>
            <option value="url">URL</option>
            <option value="file">File</option>
          </select>
        </div>
        <div>
          <label htmlFor="outputType" className="block text-sm font-medium text-blue-300 mb-1">
            Output Type
          </label>
          <select
            id="outputType"
            name="outputType"
            className="w-full px-3 py-2 bg-[#111827] border border-blue-900/50 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-blue-100"
            value={formData.outputType}
            onChange={handleChange}
          >
            <option value="chat">Chat</option>
            <option value="text">Text</option>
            <option value="any">Any</option>
            <option value="debug">Debug</option>
          </select>
        </div>
        <div className="flex items-center">
          <input
            id="streaming"
            name="streaming"
            type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-blue-300 rounded"
            checked={formData.streaming}
            onChange={handleChange}
          />
          <label htmlFor="streaming" className="ml-2 block text-sm text-blue-300">
            Enable streaming mode
          </label>
        </div>
        <div>
          <motion.button
            type="submit"
            className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="w-5 h-5 mr-2" />
            Run Workflow
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default InputForm;
