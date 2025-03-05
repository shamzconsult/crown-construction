'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Social media icons
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

function TeamSection() {
  return (
    <section className="relative py-16 bg-gray-100">
      <div className="container mx-auto max-w-screen-2xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4"> 
          {/* Left Side: Text */}
          <div className="lg:col-span-1 flex flex-col justify-center pl-8">
            <h2 className="text-4xl font-bold mb-4">We Have Extraordinary Members</h2>
            <p className="text-gray-600 mb-8 max-w-md">
              We are a rapidly growing, highly diversified service provider with working experience in professionals, skilled craftspeople, and colleges recruiting jobs. Our industry-leading team is here to serve you.
            </p>
            <button className="bg-teal-900 text-white px-6 py-3 rounded-lg hover:bg-teal-800 transition max-w-[300px]">
                Explore All Team Members
            </button>
          </div>

          {/* Right Side: Swiper Slider */}
          <div className="lg:col-span-1">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{ clickable: true, el: '.swiper-pagination' }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 2 }, 
                1024: { slidesPerView: 2 }, 
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {/* Team Member 1 */}
              <SwiperSlide>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="relative h-64 w-full mb-4">
                    <Image
                      src="/image/team.png" 
                      alt="Richard Abraham"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Richard Abraham</h3>
                  <p className="text-gray-600 mb-4">Founder & CEO</p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                      <FaFacebook className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-400">
                      <FaTwitter className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-700">
                      <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-pink-500">
                      <FaInstagram className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              {/* Team Member 2 */}
              <SwiperSlide>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="relative h-64 w-full mb-4">
                    <Image
                      src="/image/team.png"
                      alt="Lucas Andrew"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Lucas Andrew</h3>
                  <p className="text-gray-600 mb-4">Senior Engineer</p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                      <FaFacebook className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-400">
                      <FaTwitter className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-700">
                      <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-pink-500">
                      <FaInstagram className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              {/* Team Member 3 */}
              <SwiperSlide>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="relative h-64 w-full mb-4">
                    <Image
                      src="/image/team.png" 
                      alt="Lucas Andrew"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Lucas Andrew</h3>
                  <p className="text-gray-600 mb-4">Senior Engineer</p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                      <FaFacebook className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-400">
                      <FaTwitter className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-700">
                      <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-pink-500">
                      <FaInstagram className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* Custom Pagination Container */}
            <div className="swiper-pagination mt-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;