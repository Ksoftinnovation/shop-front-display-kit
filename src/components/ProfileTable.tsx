
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash } from "lucide-react";

export interface ProfileData {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  dateAdded: string;
}

interface ProfileTableProps {
  data: ProfileData[];
  onDelete: (id: string) => void;
  onEdit: (profile: ProfileData) => void;
}

const ProfileTable: React.FC<ProfileTableProps> = ({ data, onDelete, onEdit }) => {
  const { toast } = useToast();

  const handleDelete = (id: string) => {
    onDelete(id);
    toast({
      title: "Profile deleted",
      description: "Profile has been deleted successfully",
    });
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableCaption>A list of your profiles</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Date Added</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center">No profiles found. Add your first profile above.</TableCell>
            </TableRow>
          ) : (
            data.map((profile) => (
              <TableRow key={profile.id}>
                <TableCell className="font-medium">{profile.fullName}</TableCell>
                <TableCell>{profile.email}</TableCell>
                <TableCell>{profile.phoneNumber}</TableCell>
                <TableCell>{profile.address}</TableCell>
                <TableCell>{profile.dateAdded}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="icon" onClick={() => onEdit(profile)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => handleDelete(profile.id)}>
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProfileTable;
