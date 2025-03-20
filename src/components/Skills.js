import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsData = [
    { year: 2018, title: 'Started Freelancing', description: 'Began my journey as a freelance web developer, taking on various projects and clients.' },
    { year: 2020, title: 'Joined Agency X', description: 'Joined a digital agency where I worked on larger team projects and expanded my skill set.' },
    { year: 2022, title: 'Senior Developer', description: 'Promoted to senior developer role, leading projects and mentoring junior developers.' },
    { year: 2024, title: 'Lead UI/UX', description: 'Transitioned to lead UI/UX role, focusing on design and user experience strategy.' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="skills bg-white py-20"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Skills & Experience
        </motion.h2>
        <div className="timeline relative">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="timeline-item mb-8"
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
            >
              <div className="flex items-center">
                <div className="timeline-circle h-6 w-6 rounded-full bg-blue-500 z-10"></div>
                <div className="timeline-line h-0.5 bg-gray-400 w-full ml-4"></div>
              </div>
              <div className="ml-10 mt-2">
                <h3 className="text-xl font-semibold text-gray-900">{skill.title} ({skill.year})</h3>
                <p className="text-gray-700">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;