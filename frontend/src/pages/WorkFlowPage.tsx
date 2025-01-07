import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InputForm from '../components/InputForm';
import OutputDisplay from '../components/OutputDisplay';
import Loader from '../components/Loader';
import { runWorkflow } from '../utils/api';
import { AlertCircle } from 'lucide-react';

interface WorkflowResult {
  output: string;
}

const WorkflowPage: React.FC = () => {
  const [result, setResult] = useState<WorkflowResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (formData: any) => {
    setLoading(true);
    setError(null);
    try {
      const data = await runWorkflow(formData);
      setResult(data);
    } catch (err) {
      setError('An error occurred while processing your request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        AI Workflow
      </motion.h1>
      <InputForm onSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && (
        <motion.div
          className="bg-red-900/20 border border-red-500 text-red-100 px-4 py-3 rounded-lg relative mt-4"
          role="alert"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            <span className="block sm:inline">{error}</span>
          </div>
        </motion.div>
      )}
      {result && <OutputDisplay result={result} />}
    </div>
  );
};

export default WorkflowPage;

