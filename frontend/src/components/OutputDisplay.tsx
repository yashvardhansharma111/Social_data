import React from 'react';
import { motion } from 'framer-motion';

interface OutputDisplayProps {
  result: {
    output: string;
  };
}

const OutputDisplay: React.FC<OutputDisplayProps> = ({ result }) => {
  return (
    <motion.div
      className="bg-[#1A1A2E] shadow-lg rounded-lg p-6 border border-blue-900/30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-blue-400">Result</h2>
      <pre className="bg-[#111827] p-4 rounded-md overflow-x-auto whitespace-pre-wrap text-sm text-blue-100 border border-blue-900/50">
        {result.output}
      </pre>
    </motion.div>
  );
};

export default OutputDisplay;

