'use client';

import React, { ReactNode } from 'react';
import { AdminProtection } from '@/components/admin-protection';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <AdminProtection>{children}</AdminProtection>;
}
