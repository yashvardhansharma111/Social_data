import React from 'react';
import { motion } from 'framer-motion';

function Loader() {
  return (
    <div className="flex justify-center items-center h-20">
      <motion.div
        className="w-16 h-16 border-t-4 border-indigo-500 border-solid rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export default Loader;

