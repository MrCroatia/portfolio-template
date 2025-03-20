import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Future of Web Design',
      excerpt: 'Exploring the latest trends and technologies in web design...',
      link: '#',
    },
    {
      title: 'Tips for Freelancing Success',
      excerpt: 'Essential tips and strategies for a successful freelancing career...',
      link: '#',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="blog bg-gray-100 py-20"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Blog & Insights
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="blog-post p-6 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <a href={post.link} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Blog;