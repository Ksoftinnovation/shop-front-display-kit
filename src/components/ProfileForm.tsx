
import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ProfileData } from './ProfileTable';
import { Input } from "@/components/ui/input";

interface ProfileFormProps {
  onSubmit: (data: Omit<ProfileData, 'id' | 'dateAdded'>) => void;
  initialData?: ProfileData;
  isEditing?: boolean;
  onCancelEdit?: () => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ 
  onSubmit, 
  initialData, 
  isEditing = false, 
  onCancelEdit 
}) => {
  const { toast } = useToast();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (initialData) {
      setFullName(initialData.fullName);
      setEmail(initialData.email);
      setPhoneNumber(initialData.phoneNumber);
      setAddress(initialData.address);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    onSubmit({
      fullName,
      email,
      phoneNumber,
      address,
    });

    if (!isEditing) {
      // Reset form after submission if not editing
      setFullName('');
      setEmail('');
      setPhoneNumber('');
      setAddress('');
    }

    toast({
      title: isEditing ? "Profile updated" : "Profile information submitted",
      description: isEditing 
        ? "Your profile has been updated successfully." 
        : "Your information has been saved successfully.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Information Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Address Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Address
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <Input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Contact Details Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Contact Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <Input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter phone number"
                required
              />
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="flex justify-center gap-4">
        <Button type="submit" size="lg" className="min-w-[200px]">
          {isEditing ? 'Update' : 'Submit'}
        </Button>
        
        {isEditing && onCancelEdit && (
          <Button 
            type="button" 
            variant="outline" 
            size="lg" 
            className="min-w-[200px]"
            onClick={onCancelEdit}
          >
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
};

export default ProfileForm;
