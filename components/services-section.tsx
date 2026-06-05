'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const packages = [
  {
    id: 1,
    name: 'Starter',
    price: 2999,
    description: 'Perfect for small businesses',
    features: [
      'Landing page',
      'Mobile responsive',
      'Basic SEO optimization',
      'Contact form',
      '3 months support',
    ],
    highlighted: false,
  },
  {
    id: 2,
    name: 'Professional',
    price: 7999,
    description: 'Complete web solution',
    features: [
      'Full website (5-10 pages)',
      'Custom design',
      'AI Receptionist integration',
      'Analytics dashboard',
      'E-commerce ready',
      '12 months support',
      'Free hosting (1 year)',
    ],
    highlighted: true,
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions',
    features: [
      'Custom development',
      'Advanced AI systems',
      'API integration',
      'Dedicated account manager',
      'Priority support 24/7',
      'Custom infrastructure',
      'Training included',
    ],
    highlighted: false,
  },
];

export function ServicesSection() {
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
      id="services"
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
            Services & <span className="text-gold">Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the perfect package for your business needs. All packages include support
            and ongoing optimization.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={itemVariants}
              className={`relative rounded-lg overflow-hidden transition-all ${
                pkg.highlighted
                  ? 'md:scale-105 border-2 border-gold bg-gradient-to-br from-gold/10 to-gold/5 shadow-lg shadow-gold/20'
                  : 'border border-gold/30 bg-gradient-to-br from-gold/5 to-transparent'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 right-0 bg-gold text-black px-4 py-1 text-xs font-bold rounded-bl-lg">
                  POPULAR
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gold">
                    {typeof pkg.price === 'string' ? pkg.price : `$${pkg.price}`}
                  </span>
                  {typeof pkg.price === 'number' && (
                    <span className="text-gray-400 ml-2">/project</span>
                  )}
                </div>

                <button
                  className={`w-full py-2 rounded-lg font-bold transition-colors mb-6 ${
                    pkg.highlighted
                      ? 'bg-gold text-black hover:bg-gold-light'
                      : 'border border-gold text-gold hover:bg-gold/10'
                  }`}
                >
                  Get Started
                </button>

                <div className="space-y-3">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
