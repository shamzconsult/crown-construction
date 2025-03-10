// pages/location.js
import LocationMap from '@/components/LocationMap';
import React from 'react';

const LocationPage = () => {
  return (
    <div className="p-8 mx-auto max-w-screen-lg" id='location'>
      <h1 className="text-3xl font-bold mb-6">Our Location</h1>
      <p className="text-gray-600 mb-8">
        Visit us at our office or construction sites. We are always ready to
        welcome you!
      </p>
      <div className="border rounded-lg overflow-hidden shadow-lg">
        <LocationMap />
      </div>
    </div>
  );
};

export default LocationPage;