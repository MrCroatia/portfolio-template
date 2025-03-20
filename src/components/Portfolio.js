import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projectsData = [
    {
      title: 'Project 1',
      description: 'Web design and development for a local business.',
      image: '/local.png',
            link: '#',
          },
          {
            title: 'Project 2',
            description: 'Mobile app development for a startup.',
            image: '/notaker.png',
            link: '#',
          },
          {
            title: 'Project 3',
            description: 'E-commerce platform development.',
            image: '/ecommerce.png',
            link: '#',
          },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="portfolio bg-gray-100 py-20"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Project Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="project-item rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <button
                    className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => window.open('http://www.fragment42.com', '_blank')}
                >
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;