'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoConstructOutline } from 'react-icons/io5';
import { GiFamilyHouse } from "react-icons/gi";
import { BsFillBuildingsFill } from "react-icons/bs";
import { TbHomeEco } from "react-icons/tb";
import { MdEngineering } from "react-icons/md";

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

function ServicesSection() {
  return (
    <section className="relative py-16 bg-gray-100">
      {/* Background Image */}
      <Image
        src="/image/building.jpg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="container mx-auto px-4 relative">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">We help You achieve your desired Structure</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Our suite of integrated construction services ensures the highest degree of quality, safety, efficiency, and innovation on your project.
          </p>
        </div>

        {/* Swiper Slider */}
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true, el: '.swiper-pagination' }} 
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="bg-white/20 backdrop-blur-md p-8 rounded-lg shadow-lg text-center h-70 flex flex-col justify-between overflow-y-auto">
                <IoConstructOutline className="text-5xl text-yellow-400 mx-auto" />
                <h3 className="text-xl font-bold mb-2 text-white">Preconstruction</h3>
                <p className="text-gray-200">
                  From preconstruction to virtual design and construction, we offer a wide range of services.
                </p>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="bg-white/20 backdrop-blur-md p-8 rounded-lg shadow-lg text-center h-70 flex flex-col justify-between overflow-y-auto">
                <MdEngineering className="text-5xl text-yellow-400 mx-auto " />
                <h3 className="text-xl font-bold mb-2 text-white">Engineering</h3>
                <p className="text-gray-200">
                  We provide innovative engineering solutions to meet your building needs.
                </p>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="bg-white/20 backdrop-blur-md p-8 rounded-lg shadow-lg text-center h-70 flex flex-col justify-between overflow-y-auto">
                <BsFillBuildingsFill className="text-5xl text-yellow-400 mx-auto " />
                <h3 className="text-xl font-bold mb-2 text-white">Construction</h3>
                <p className="text-gray-200">
                  Our construction services ensure quality, safety, and efficiency.
                </p>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="bg-white/20 backdrop-blur-md p-8 rounded-lg shadow-lg text-center h-70 flex flex-col justify-between overflow-y-auto">
                <TbHomeEco className="text-5xl text-yellow-400 mx-auto " />
                <h3 className="text-xl font-bold mb-2 text-white">Smart Homes</h3>
                <p className="text-gray-200">
                  We specialize in developing smart and eco-friendly residential, industrial, and commercial buildings.
                </p>
              </div>
            </SwiperSlide>

            {/* Slide 5 */}
            <SwiperSlide>
              <div className="bg-white/20 backdrop-blur-md p-8 rounded-lg shadow-lg text-center h-70 flex flex-col justify-between overflow-y-auto">
                <GiFamilyHouse className="text-5xl text-yellow-400 mx-auto " />
                <h3 className="text-xl font-bold mb-2 text-white">Building Contracting</h3>
                <p className="text-gray-200">
                  We excel in land acquisition, planning, development, allocation, and property sales.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Custom Pagination Container */}
          <div className="swiper-pagination mt-8"></div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;