import React from 'react';
import { motion } from 'framer-motion';
import { LoaderIcon } from 'lucide-react';

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-24">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <LoaderIcon className="w-12 h-12 text-blue-500" />
      </motion.div>
    </div>
  );
};

export default Loader;

