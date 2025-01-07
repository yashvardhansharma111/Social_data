import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowLeft } from 'lucide-react';

const ErrorPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0A0A0F]">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AlertTriangle className="w-24 h-24 mx-auto mb-4 text-red-500" />
        <h1 className="text-6xl font-bold mb-4 text-blue-400">404</h1>
        <p className="text-2xl mb-8 text-blue-300">Oops! Page not found</p>
        <Link to="/">
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg text-lg flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go back to home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorPage;

