'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full py-12 px-4 sm:px-6 lg:px-8 bg-black border-t border-gold/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gold mb-2">
              Miller&apos;s Digital
            </h3>
            <p className="text-gray-400 text-sm">
              Premium web solutions and AI receptionist technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#about" className="hover:text-gold transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-gold transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gold/20 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Miller&apos;s Digital. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Crafted with precision and passion for the digital age.
          </p>
        </div>
      </div>
    </footer>
  );
}
