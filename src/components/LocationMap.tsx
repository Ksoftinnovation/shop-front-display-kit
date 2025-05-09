
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Location } from '../types/shift';

// Replace with your own public token or use environment variable
// Note: In production, you should store this in .env file
const MAPBOX_TOKEN = 'pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbGV4YW1wbGUxMjM0NTY3ODkwMTIzNDU2Nzg5MCJ9.example';

interface LocationMapProps {
  location: Location;
  title: string;
}

const LocationMap: React.FC<LocationMapProps> = ({ location, title }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Initialize the map
    mapboxgl.accessToken = MAPBOX_TOKEN;
    
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [location.longitude, location.latitude],
      zoom: 14,
    });

    // Add navigation controls
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add marker at the location
    new mapboxgl.Marker({ color: '#9b87f5' })
      .setLngLat([location.longitude, location.latitude])
      .addTo(map);

    mapRef.current = map;

    return () => {
      map.remove();
    };
  }, [location]);

  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div 
        ref={mapContainerRef} 
        className="h-64 w-full rounded-md border border-gray-300 shadow-sm"
      />
    </div>
  );
};

export default LocationMap;
