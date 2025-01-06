import React, { useState } from 'react';
import { motion } from 'framer-motion';

function InputForm({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');
  const [inputType, setInputType] = useState('chat');
  const [outputType, setOutputType] = useState('chat');
  const [streaming, setStreaming] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ inputValue, inputType, outputType, streaming });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="inputValue" className="block text-sm font-medium text-gray-700">
          Input Value
        </label>
        <input
          type="text"
          id="inputValue"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="inputType" className="block text-sm font-medium text-gray-700">
          Input Type
        </label>
        <select
          id="inputType"
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="chat">Chat</option>
          <option value="text">Text</option>
        </select>
      </div>
      <div>
        <label htmlFor="outputType" className="block text-sm font-medium text-gray-700">
          Output Type
        </label>
        <select
          id="outputType"
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="chat">Chat</option>
          <option value="text">Text</option>
        </select>
      </div>
      <div>
        <label htmlFor="streaming" className="flex items-center">
          <input
            type="checkbox"
            id="streaming"
            checked={streaming}
            onChange={(e) => setStreaming(e.target.checked)}
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <span className="ml-2 text-sm text-gray-600">Enable Streaming</span>
        </label>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </motion.button>
    </form>
  );
}

export default InputForm;

