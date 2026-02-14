// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/home/Hero';
import TripleCrisis from '../components/home/TripleCrisis';
import Stats from '../components/home/Stats';
import Features from '../components/home/Features';
import HowItWorks from '../components/home/HowItWorks';
import USP from '../components/home/USP';
import ApiOverview from '../components/api/ApiOverview';
import CTASection from '../components/home/CTASection';

const HomePage = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Stats />
      <TripleCrisis />
      <Features />
      <HowItWorks />
      <USP />
      <ApiOverview />
      <CTASection />
    </div>
  );
};

export default HomePage;