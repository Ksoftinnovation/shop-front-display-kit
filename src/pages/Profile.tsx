
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WelcomeSection from '../components/WelcomeSection';
import ProfileForm from '../components/ProfileForm';
import ProfileTable, { ProfileData } from '../components/ProfileTable';
import { v4 as uuidv4 } from 'uuid';

const Profile: React.FC = () => {
  const [profiles, setProfiles] = useState<ProfileData[]>(() => {
    // Load from localStorage on initial render
    const savedProfiles = localStorage.getItem('profiles');
    return savedProfiles ? JSON.parse(savedProfiles) : [];
  });
  
  const [editingProfile, setEditingProfile] = useState<ProfileData | null>(null);

  // Save to localStorage whenever profiles change
  useEffect(() => {
    localStorage.setItem('profiles', JSON.stringify(profiles));
  }, [profiles]);

  const handleProfileSubmit = (data: Omit<ProfileData, 'id' | 'dateAdded'>) => {
    const currentDate = new Date().toLocaleDateString();
    
    if (editingProfile) {
      // Update existing profile
      setProfiles(profiles.map(profile => 
        profile.id === editingProfile.id 
          ? { ...data, id: profile.id, dateAdded: profile.dateAdded } 
          : profile
      ));
      setEditingProfile(null);
    } else {
      // Add new profile
      const newProfile: ProfileData = {
        ...data,
        id: uuidv4(),
        dateAdded: currentDate
      };
      setProfiles([...profiles, newProfile]);
    }
  };

  const handleDeleteProfile = (id: string) => {
    setProfiles(profiles.filter(profile => profile.id !== id));
    if (editingProfile?.id === id) {
      setEditingProfile(null);
    }
  };

  const handleEditProfile = (profile: ProfileData) => {
    setEditingProfile(profile);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <WelcomeSection />
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">
            {editingProfile ? 'Edit Profile' : 'Profile Information'}
          </h2>
          <ProfileForm 
            onSubmit={handleProfileSubmit}
            initialData={editingProfile || undefined}
            isEditing={!!editingProfile}
            onCancelEdit={() => setEditingProfile(null)}
          />
        </div>

        <div className="my-12">
          <h2 className="text-2xl font-bold mb-6">Your Profiles</h2>
          <ProfileTable 
            data={profiles} 
            onDelete={handleDeleteProfile} 
            onEdit={handleEditProfile} 
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
