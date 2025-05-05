
import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <div className="bg-blue-50 py-10 px-4 md:px-8 lg:px-12 rounded-lg mb-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Welcome to your team's workspace <span className="inline-block animate-pulse">👋</span>
          </h1>
          <p className="text-gray-600 text-lg">
            This is a shared space for you and your team to design,
            build, and test APIs together.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="/lovable-uploads/4f71fae9-b184-4298-98da-bd524c4aa4f9.png" 
            alt="Team workspace illustration" 
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
