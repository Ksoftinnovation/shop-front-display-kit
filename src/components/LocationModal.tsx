
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import LocationMap from './LocationMap';
import { Location } from '../types/shift';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  startLocation?: Location;
  endLocation?: Location | Record<string, never>;
  shiftDate?: string;
  employeeName?: string;
}

const LocationModal: React.FC<LocationModalProps> = ({
  isOpen,
  onClose,
  startLocation,
  endLocation,
  shiftDate,
  employeeName,
}) => {
  // Check if endLocation has coordinates
  const hasEndLocation = endLocation && 
    Object.keys(endLocation).length > 0 && 
    'latitude' in endLocation && 
    'longitude' in endLocation;

  const formattedDate = shiftDate ? new Date(shiftDate).toLocaleDateString() : '';

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Location Details</DialogTitle>
          <DialogDescription>
            {employeeName && formattedDate && (
              <p>
                Showing locations for {employeeName} on {formattedDate}
              </p>
            )}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
          {startLocation && (
            <div>
              <LocationMap location={startLocation} title="Check In Location" />
            </div>
          )}
          
          {hasEndLocation ? (
            <div>
              <LocationMap location={endLocation as Location} title="Check Out Location" />
            </div>
          ) : (
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-2">Check Out Location</h3>
              <div className="h-64 w-full rounded-md border border-gray-300 shadow-sm flex items-center justify-center bg-gray-50">
                <p className="text-muted-foreground">No checkout recorded</p>
              </div>
            </div>
          )}
        </div>
        
        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LocationModal;
