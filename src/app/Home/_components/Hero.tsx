import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <Image
        src="/image/hero-image.webp"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      {/* Content */}
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="max-w-2xl text-center ltr:sm:text-left rtl:sm:text-right bg-white/1 backdrop-blur-lg rounded-lg p-6 shadow-lg">
            <h1 className="text-5xl font-extrabold text-white sm:text-5xl">
                Building <strong className="block font-extrabold md:text-7xl text-yellow-400">Smart Homes,</strong>
                <span className="text-3xl">Advancing Environmental Sustainability</span>
            </h1>



                <p className="mt-4 max-w-xl text-white sm:text-xl/relaxed">
                    Our designs are human-centered, and environmental
                    sustainability is our mantra. We emphasize this
                    commitment to customers every step of the way
                </p>

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
