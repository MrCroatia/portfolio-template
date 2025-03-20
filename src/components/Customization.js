import React from 'react';
import { motion } from 'framer-motion';

const Customization = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="customization bg-gray-200 py-20"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Customization Showcase
        </motion.h2>
        <motion.p
          className="text-xl text-gray-700 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Explore the possibilities to make this template your own.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="customization-item p-6 bg-white rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Color Scheme Variations</h3>
            <div className="flex justify-center space-x-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-500"></div>
              <div className="w-10 h-10 rounded-full bg-green-500"></div>
              <div className="w-10 h-10 rounded-full bg-purple-500"></div>
            </div>
            <p className="text-gray-700">Easily adapt the color palette to match your brand.</p>
          </motion.div>
          <motion.div
            className="customization-item p-6 bg-white rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Font Style Options</h3>
            <div className="mb-4">
              <p className="font-serif text-gray-700">Serif Font Example</p>
              <p className="font-sans text-gray-700">Sans-Serif Font Example</p>
            </div>
            <p className="text-gray-700">Choose from a variety of font styles to create the perfect look.</p>
          </motion.div>
          <motion.div
            className="customization-item p-6 bg-white rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Layout Variations</h3>
            <div className="mb-4">
              <p className="text-gray-700">Grid Layout for Projects</p>
              <p className="text-gray-700">List Layout for Projects</p>
            </div>
            <p className="text-gray-700">Switch between grid and list layouts for project displays.</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Customization;