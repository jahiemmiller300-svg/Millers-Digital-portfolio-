'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Instagram } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@millers-digital.com',
      href: 'mailto:hello@millers-digital.com',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+1 (555) 123-4567',
      href: 'https://wa.me/15551234567',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@millers.digital',
      href: 'https://instagram.com/millers.digital',
    },
  ];

  return (
    <section
      id="contact"
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
            Get In <span className="text-gold">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to transform your digital presence? Let&apos;s talk about your project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-black border border-gold/30 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-black border border-gold/30 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black border border-gold/30 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-3 bg-gold text-black font-bold rounded-lg hover:bg-gold-light transition-colors"
              >
                {submitted ? 'Message Sent! 🎉' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Other Ways to Connect
            </h3>

            <div className="space-y-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target={method.label !== 'Phone' && method.label !== 'Email' ? '_blank' : undefined}
                    rel={method.label !== 'Phone' && method.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-lg border border-gold/30 bg-gold/5 hover:border-gold/60 transition-all hover:translate-x-2"
                    whileHover={{ x: 10 }}
                  >
                    <Icon className="w-6 h-6 text-gold flex-shrink-0" />
                    <div>
                      <p className="text-gray-400 text-sm">{method.label}</p>
                      <p className="text-white font-semibold">{method.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              className="mt-8 p-6 rounded-lg border border-gold/30 bg-gradient-to-br from-gold/10 to-gold/5"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gold font-semibold mb-2">📍 Service Area</p>
              <p className="text-gray-300">
                We work with clients globally. No matter where you are, we can help bring
                your digital vision to life.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
