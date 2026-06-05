'use client';

import React, { ReactNode, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'ajahjah2';

export function AdminProtection({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (token === 'authenticated') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('admin_token', 'authenticated');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password. Please try again.');
      setPassword('');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setIsAuthenticated(false);
    router.push('/');
  };

  if (!isAuthenticated) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-black px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="bg-gradient-to-br from-gold/10 to-gold/5 border-2 border-gold p-8 rounded-lg">
            <div className="flex justify-center mb-6">
              <Lock className="w-12 h-12 text-gold" />
            </div>

            <h1 className="text-3xl font-bold text-white text-center mb-2">
              Admin Access
            </h1>
            <p className="text-gray-400 text-center mb-6">
              Enter your admin password to continue
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 bg-black border border-gold/30 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:border-gold transition-colors"
              />

              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm"
                >
                  {error}
                </motion.p>
              )}

              <button
                type="submit"
                className="w-full px-4 py-3 bg-gold text-black font-bold rounded-lg hover:bg-gold-light transition-colors"
              >
                Login
              </button>
            </form>

            <p className="text-gray-500 text-xs text-center mt-4">
              For security purposes, this area is password protected.
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-black">
      <div className="fixed top-0 right-0 z-50 p-4">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-gold text-black font-bold rounded-lg hover:bg-gold-light transition-colors"
        >
          Logout
        </button>
      </div>
      {children}
    </div>
  );
}
