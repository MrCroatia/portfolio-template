import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="contact bg-white py-20"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Contact Me
        </motion.h2>
        <motion.div
          className="contact-form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Contact form placeholder - replace with actual form */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">Contact form will be here</p>
            <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                            onClick={() => window.open('http://www.fragment42.com', '_blank')}
                        >
                          Send Message
                        </button>
          </div>
        </motion.div>
        <motion.div
          className="cta-banner mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-xl text-gray-700 mb-4">
            Ready to start your project?
          </p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full">
            Get a Quote
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;