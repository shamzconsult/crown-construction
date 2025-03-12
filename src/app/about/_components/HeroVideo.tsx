import React from 'react';

function HeroVideo() {
  return (
    <div className="relative">
      {/* Video Background */}
      <video
        className="w-full h-[500px] object-cover"
        autoPlay
        loop
        muted
        src="/video/construction.mp4" 

      >
        {/* <source src="/video/construction-site.mp4" type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay with opacity */}
      <div className="absolute inset-0 bg-zinc-700 opacity-75"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">

        <h1 className="text-4xl md:text-5xl lg:text-6xl md:max-w-xl font-bold mb-6 lg:max-w-4xl font-sans">
          Building Your Future with Quality and Precision
        </h1>
      </div>
    </div>
  );
}

export default HeroVideo;