import React from 'react';
import Image from 'next/image';

function About() {
  return (
    <div className="relative py-16 bg-gray-100">
      <div className="max-w-screen-2xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side: Text and Images with Overlay */}
            <div className="lg:col-span-1">
                {/* Text Section */}
                <div className="mb-8">
                    <h2 className="text-4xl font-bold mb-4">See How We Manage <span className='text-yellow-400'>Our Projects</span> </h2>
                   
                    <p className="text-gray-600 mt-4">
                        Our business approach is client-focused and quality driven. We leverage cutting-edge technology to
                        deliver exceptional results. From concept and design to execution, we ensure our dedicated team
                        collaborates closely with clients to perfectly execute their ideas.
                        Our designs are human-centered, and environmental sustainability is our mantra. We emphasize this
                        commitment to customers every step of the way.
                    </p>
                </div>

                {/* Image with Overlay */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-1 lg:gap-0'>
                    <div className="relative h-48 rounded-lg overflow-hidden md:mb-10">
                        <Image
                            src="/image/Construction-engineer.webp" 
                            alt="Construction Site"
                            layout="fill"
                            objectFit="cover"
                            className="absolute z-0"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                            <div className="text-gray-300 mt-4 px-6 text-center">
                                <h3 className="text-lg md:text-2xl font-bold text-white text-center">
                                    Our Vision
                                </h3>
                                <p className='text-sm md:text-lg'>
                                    A leading construction and property development company in
                                    Nigeria, setting the benchmark for innovation, reliability, and
                                    sustainability.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                            src="/image/service-eng2.webp"
                            alt="Construction Site"
                            layout="fill"
                            objectFit="cover"
                            className="absolute z-0"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                            <div className="text-gray-300 mt-4 px-6 text-center">
                                <h3 className="text-lg md:text-2xl font-bold text-white text-center">
                                    Our Mission
                                </h3>
                                <p className='text-sm md:text-lg'>
                                    To deliver exceptional construction, design, and real estate services,
                                    contributing to Nigeria&apos;s infrastructural growth and economic
                                    development.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          {/* Right Side: Video */}
          <div className="lg:col-span-1 flex items-center">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <video
                src="/video/construction.mp4" 
                controls
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;