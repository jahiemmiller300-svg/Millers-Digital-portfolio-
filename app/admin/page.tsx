'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';

interface AIReceptionist {
  id: string;
  name: string;
  apiKey: string;
  webhookUrl: string;
  status: 'active' | 'inactive';
}

export default function AdminDashboard() {
  const [receptionists, setReceptionists] = useState<AIReceptionist[]>([
    {
      id: '1',
      name: 'Main Receptionist',
      apiKey: 'sk_***_hidden',
      webhookUrl: 'https://example.com/webhook',
      status: 'active',
    },
  ]);

  const [isAddingNew, setIsAddingNew] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    apiKey: '',
    webhookUrl: '',
    status: 'active' as const,
  });

  const handleAddNew = () => {
    setIsAddingNew(true);
    setFormData({ name: '', apiKey: '', webhookUrl: '', status: 'active' });
  };

  const handleEdit = (receptionist: AIReceptionist) => {
    setEditingId(receptionist.id);
    setFormData({
      name: receptionist.name,
      apiKey: receptionist.apiKey,
      webhookUrl: receptionist.webhookUrl,
      status: receptionist.status,
    });
  };

  const handleSave = () => {
    if (isAddingNew) {
      const newReceptionist: AIReceptionist = {
        id: Date.now().toString(),
        ...formData,
        apiKey: formData.apiKey.slice(-4) === '****' 
          ? formData.apiKey 
          : `sk_***_${formData.apiKey.slice(-4)}`,
      };
      setReceptionists([...receptionists, newReceptionist]);
    } else if (editingId) {
      setReceptionists(
        receptionists.map((r) =>
          r.id === editingId
            ? {
                ...r,
                ...formData,
                apiKey: formData.apiKey.slice(-4) === '****'
                  ? formData.apiKey
                  : `sk_***_${formData.apiKey.slice(-4)}`,
              }
            : r
        )
      );
    }
    handleCancel();
  };

  const handleCancel = () => {
    setIsAddingNew(false);
    setEditingId(null);
    setFormData({ name: '', apiKey: '', webhookUrl: '', status: 'active' });
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this receptionist?')) {
      setReceptionists(receptionists.filter((r) => r.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold text-white">
              Admin <span className="text-gold">Dashboard</span>
            </h1>
            {!isAddingNew && !editingId && (
              <button
                onClick={handleAddNew}
                className="flex items-center gap-2 px-6 py-3 bg-gold text-black font-bold rounded-lg hover:bg-gold-light transition-colors"
              >
                <Plus className="w-5 h-5" />
                Add Receptionist
              </button>
            )}
          </div>
        </motion.div>

        <div className="grid gap-6">
          {/* Add/Edit Form */}
          {(isAddingNew || editingId) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/30 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                {isAddingNew ? 'Add New AI Receptionist' : 'Edit Receptionist'}
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Receptionist name"
                    className="w-full px-4 py-3 bg-black border border-gold/30 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gold mb-2">
                    API Key
                  </label>
                  <input
                    type="password"
                    value={formData.apiKey}
                    onChange={(e) =>
                      setFormData({ ...formData, apiKey: e.target.value })
                    }
                    placeholder="sk_...your_api_key..."
                    className="w-full px-4 py-3 bg-black border border-gold/30 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gold mb-2">
                    Webhook URL
                  </label>
                  <input
                    type="url"
                    value={formData.webhookUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, webhookUrl: e.target.value })
                    }
                    placeholder="https://your-webhook-url.com"
                    className="w-full px-4 py-3 bg-black border border-gold/30 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gold mb-2">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        status: e.target.value as 'active' | 'inactive',
                      })
                    }
                    className="w-full px-4 py-3 bg-black border border-gold/30 text-white rounded-lg focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleSave}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gold text-black font-bold rounded-lg hover:bg-gold-light transition-colors"
                  >
                    <Save className="w-5 h-5" />
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-gold text-gold font-bold rounded-lg hover:bg-gold/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Receptionists List */}
          <div className="space-y-4">
            {receptionists.map((receptionist, index) => (
              <motion.div
                key={receptionist.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gold/5 to-transparent border border-gold/30 p-6 rounded-lg hover:border-gold/60 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">
                        {receptionist.name}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          receptionist.status === 'active'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-red-500/20 text-red-400'
                        }`}
                      >
                        {receptionist.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-1">
                      API Key: {receptionist.apiKey}
                    </p>
                    <p className="text-gray-400 text-sm">
                      Webhook: {receptionist.webhookUrl}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(receptionist)}
                      className="flex items-center gap-2 px-4 py-2 bg-gold/20 text-gold hover:bg-gold/30 rounded-lg transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(receptionist.id)}
                      className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {receptionists.length === 0 && !isAddingNew && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 border border-gold/20 rounded-lg"
            >
              <p className="text-gray-400 mb-4">No AI Receptionists configured yet</p>
              <button
                onClick={handleAddNew}
                className="px-6 py-2 bg-gold text-black font-bold rounded-lg hover:bg-gold-light transition-colors"
              >
                Add One Now
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
