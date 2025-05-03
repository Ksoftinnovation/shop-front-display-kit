
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default Index;
