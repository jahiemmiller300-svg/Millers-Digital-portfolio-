'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Send, Phone } from 'lucide-react';

export function AIReceptionistSection() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ id: string; text: string; sender: 'user' | 'ai' }[]>([
    {
      id: '1',
      text: 'Hello! How can I help you today?',
      sender: 'ai',
    },
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), text: message, sender: 'user' },
    ]);

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: "I'm an AI receptionist powered by advanced NLP. I can help schedule appointments, answer questions, and route calls. What would you like to do?",
          sender: 'ai',
        },
      ]);
    }, 800);

    setMessage('');
  };

  return (
    <section
      id="ai-receptionist"
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
            AI <span className="text-gold">Receptionist</span> Demo
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience our intelligent conversational AI that handles customer interactions
            with natural language understanding.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Demo Chat */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/30 rounded-lg overflow-hidden flex flex-col h-96 md:h-full"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-gold/20 to-gold/10 px-6 py-4 border-b border-gold/20">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <h3 className="text-white font-bold">Miller&apos;s AI Assistant</h3>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.sender === 'user'
                        ? 'bg-gold text-black'
                        : 'bg-black/50 text-white border border-gold/30'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="bg-black/50 border-t border-gold/20 p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 bg-black/50 border border-gold/30 text-white placeholder-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:border-gold"
                />
                <button
                  onClick={handleSendMessage}
                  className="p-2 bg-gold text-black rounded-lg hover:bg-gold-light transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Capabilities
            </h3>

            {[
              {
                icon: Phone,
                title: '24/7 Availability',
                desc: 'Always available to answer calls and messages',
              },
              {
                icon: Mic,
                title: 'Voice Integration',
                desc: 'Seamless voice recognition and natural speech',
              },
              {
                icon: Send,
                title: 'Smart Routing',
                desc: 'Intelligent call and inquiry routing',
              },
            ].map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="flex gap-4 p-4 rounded-lg border border-gold/30 bg-gold/5 hover:border-gold/60 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <Icon className="w-6 h-6 text-gold flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-bold mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
