'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Zap } from 'lucide-react';

export function AboutSection() {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description:
        'Cutting-edge Next.js and React applications with stunning animations and seamless user experiences.',
    },
    {
      icon: Brain,
      title: 'AI Receptionists',
      description:
        'Intelligent conversational AI systems that handle customer inquiries 24/7 with natural interactions.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description:
        '60fps animations, optimized loading, and pixel-perfect responsive design across all devices.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      id="about"
      className="relative w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black"
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
            About <span className="text-gold">Miller&apos;s Digital</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We specialize in creating extraordinary digital experiences that combine stunning
            design with intelligent technology.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="p-8 rounded-lg border border-gold/30 bg-gradient-to-br from-gold/5 to-transparent hover:border-gold/60 transition-all hover:shadow-lg hover:shadow-gold/20"
              >
                <Icon className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gold/10 to-gold/5 p-8 md:p-12 rounded-lg border border-gold/30"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Our Expertise</h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <p className="mb-4">
                ✨ Award-winning web design that converts visitors into customers
              </p>
              <p className="mb-4">
                🤖 Advanced AI systems that understand and respond to customer needs
              </p>
            </div>
            <div>
              <p className="mb-4">
                ⚡ Performance-optimized applications with 60fps animations
              </p>
              <p>
                📱 Fully responsive designs that look perfect on any device
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
