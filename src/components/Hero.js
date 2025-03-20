import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="hero bg-gray-100 py-20"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="text-5xl font-bold text-gray-900 mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Welcome, I'm John Doe
        </motion.h1>
        <motion.p
          className="text-xl text-gray-700 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Creative Professional & Agency
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4"
                          onClick={() => window.open('http://www.fragment42.com', '_blank')}
                      >
                          See My Work
                      </button>
                      <button
                          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"
                          onClick={() => window.open('http://www.fragment42.com', '_blank')}
                      >
                          Contact Me
                      </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;