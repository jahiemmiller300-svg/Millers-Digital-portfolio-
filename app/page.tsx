'use client';

import React from 'react';
import {
  Navigation,
  HeroSection,
  AboutSection,
  PortfolioSection,
  AIReceptionistSection,
  ServicesSection,
  ContactSection,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <main className="w-full bg-black text-white overflow-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <AIReceptionistSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
