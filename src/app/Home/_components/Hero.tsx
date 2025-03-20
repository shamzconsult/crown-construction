"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const heroImages = [
  "/image/real-estate-hero4.jpg",
  "/image/real-estate-3.jpg",
  "/image/real-estate-hero (1).jpg",
  "/image/real-estate-hero (2).jpg",
]; 

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {heroImages.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className={`absolute z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100 scale-100 animate-zoomOut" : "opacity-0 scale-105"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/25 sm:bg-transparent sm:from-gray-900/65 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-2xl text-center ltr:sm:text-left rtl:sm:text-right bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg">
          <h1 className="text-5xl font-extrabold text-white sm:text-5xl">
            Building{" "}
            <strong className="block font-extrabold md:text-7xl text-yellow-400">Smart Homes,</strong>
            <span className="text-xl">Advancing Environmental Sustainability</span>
          </h1>

          {/* <p className="mt-4 max-w-xl text-white sm:text-xl/relaxed">
            Our designs are human-centered, and environmental sustainability is our mantra. We emphasize this
            commitment to customers every step of the way.
          </p> */}

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="/services"
              className="block w-full rounded-sm bg-white px-12 py-3 text-sm font-medium text-teal-900 shadow-sm hover:text-white hover:bg-teal-900 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
