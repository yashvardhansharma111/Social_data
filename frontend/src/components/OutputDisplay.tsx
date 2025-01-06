import React from 'react';
import { motion } from 'framer-motion';

function OutputDisplay({ output }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 p-4 bg-gray-100 rounded-lg shadow-inner"
    >
      <h2 className="text-lg font-semibold mb-2">Output:</h2>
      <div className="max-h-60 overflow-y-auto">
        <pre className="whitespace-pre-wrap">{JSON.stringify(output, null, 2)}</pre>
      </div>
    </motion.div>
  );
}

export default OutputDisplay;

