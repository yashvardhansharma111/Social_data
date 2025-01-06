
import React from 'react';
import { motion } from 'framer-motion';

function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow overflow-hidden sm:rounded-lg"
        >
          <div className="px-4 py-5 sm:px-6">
            <h1 className="text-3xl leading-6 font-bold text-gray-900">About LangFlow</h1>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Empowering AI workflows for everyone.</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <p className="text-base text-gray-700">
              LangFlow is a cutting-edge platform designed to simplify the creation and execution of AI workflows. 
              Our mission is to make advanced AI technologies accessible to developers, researchers, and businesses of all sizes.
            </p>
            <h2 className="mt-6 text-xl font-semibold text-gray-900">Our Team</h2>
            <p className="mt-2 text-base text-gray-700">
              We are a diverse group of AI enthusiasts, software engineers, and product designers passionate about 
              pushing the boundaries of what's possible with artificial intelligence.
            </p>
            <h2 className="mt-6 text-xl font-semibold text-gray-900">Our Technology</h2>
            <p className="mt-2 text-base text-gray-700">
              LangFlow leverages state-of-the-art language models and workflow management systems to provide a 
              seamless experience for creating, managing, and executing complex AI tasks.
            </p>
            <h2 className="mt-6 text-xl font-semibold text-gray-900">Get in Touch</h2>
            <p className="mt-2 text-base text-gray-700">
              We're always excited to hear from our users and potential partners. If you have any questions, 
              suggestions, or just want to say hello, don't hesitate to reach out to us at 
              <a href="mailto:contact@langflow.com" className="text-indigo-600 hover:text-indigo-500"> contact@langflow.com</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutPage;

