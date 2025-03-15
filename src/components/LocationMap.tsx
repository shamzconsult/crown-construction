import React from 'react';

const LocationMap = () => {
 

  return (
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31522.805826118518!2d7.466842800519354!3d9.031735159633795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b840d9bfc69%3A0xc322079c37635417!2sGarki%2C%20Abuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1742060461720!5m2!1sen!2sng" 
      width="1000" 
      height="600" 
      style={{ border: 0 } }
      allowFullScreen
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">

      </iframe>
  );
};

export default LocationMap;