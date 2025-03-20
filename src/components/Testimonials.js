import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'John Smith',
      title: 'CEO, Company Y',
      testimonial: 'Roo is a fantastic developer. Their work is top-notch and they are a pleasure to work with.',
      image: '/man.png',
          },
          {
            name: 'Jane Doe',
            title: 'Marketing Manager, Company Z',
            testimonial: 'We were impressed with Roo\'s creativity and technical skills. Highly recommended!',
            image: '/woman.png',
          }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="testimonials bg-white py-20"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Testimonials
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-item p-6 bg-gray-100 rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
            >
              <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 object-cover rounded-full mx-auto mb-4" />
              <p className="text-gray-700 mb-4 italic">"{testimonial.testimonial}"</p>
              <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
              <p className="text-gray-500">{testimonial.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;