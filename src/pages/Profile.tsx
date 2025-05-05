
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WelcomeSection from '../components/WelcomeSection';
import ProfileForm from '../components/ProfileForm';

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <WelcomeSection />
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
          <ProfileForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
