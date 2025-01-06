import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InputForm from '../components/InputForm';
import OutputDisplay from '../components/OutputDisplay';
import Loader from '../components/Loader';
import api from '../utils/api';

function WorkflowPage() {
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      const response = await api.post('/api/langflow/run', formData);
      setOutput(response.data);
    } catch (error) {
      console.error('Error:', error);
      setOutput({ error: 'An error occurred while processing your request.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow overflow-hidden sm:rounded-lg"
      >
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-lg leading-6 font-medium text-gray-900">AI Workflow</h1>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Run your AI workflow and see the results.</p>
        </div>
        <div className="border-t border-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <InputForm onSubmit={handleSubmit} />
            {loading ? (
              <Loader />
            ) : (
              output && <OutputDisplay output={output} />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default WorkflowPage;

