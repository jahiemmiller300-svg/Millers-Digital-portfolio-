'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const portfolio = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Modern shopping experience with AI recommendations',
    category: 'Web Development',
    image: 'placeholder-1',
    link: '#',
  },
  {
    id: 2,
    title: 'AI Chat Assistant',
    description: 'Custom AI receptionist for healthcare industry',
    category: 'AI Solution',
    image: 'placeholder-2',
    link: '#',
  },
  {
    id: 3,
    title: 'Corporate Website',
    description: 'Enterprise solution with CMS integration',
    category: 'Web Development',
    image: 'placeholder-3',
    link: '#',
  },
  {
    id: 4,
    title: 'Support Bot',
    description: 'Intelligent customer support automation',
    category: 'AI Solution',
    image: 'placeholder-4',
    link: '#',
  },
];

export function PortfolioSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="portfolio"
      className="relative w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-black/95"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gold">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcase of our latest projects combining stunning design with powerful
            functionality.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolio.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 h-64 md:h-80 bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20">
                {/* Placeholder for project image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black via-gold/5 to-black">
                  <div className="text-center">
                    <div className="text-gold text-4xl font-bold mb-2">
                      {project.id}
                    </div>
                    <p className="text-gray-400">{project.image}</p>
                  </div>
                </div>

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                  whileHover={{ opacity: 1 }}
                >
                  <ExternalLink className="w-12 h-12 text-gold" />
                </motion.div>
              </div>

              <div>
                <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-xs font-semibold rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-3 bg-gold text-black font-bold rounded-lg hover:bg-gold-light transition-colors">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
