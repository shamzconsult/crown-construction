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
    <section className="relative py-16 ">
      <div className="container mx-auto max-w-screen-2xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4"> 
          {/* Left Side: Text */}
          <div className="lg:col-span-1 flex flex-col justify-center pl-8">
            <h2 className="text-4xl font-bold mb-4">We Have Extraordinary Team</h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Our team consists of energetic, skilled, and committed civil and
              structural engineers, builders, architects, designers, and project
              managers. Their goal is to help clients live and work in sustainable,
              eco-friendly structures. <br />
              We are passionate about revolutionizing the construction industry,
              adhering to regulatory standards, and keeping our clients informed
              at every stage of the process.
            </p>
            
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
                      src="/image/PHOTO-2024-12-12-14-29-49.jpg" 
                      alt="Dr. Raji Nasir-Mustapha"
                      layout="fill"
                      objectFit="contain" 
                      className="rounded-lg"
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-2">Dr. Raji Nasir-Mustapha</h3>
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
                      src="/image/PHOTO-2025-03-12-11-09-27 (1).jpg"
                      alt="Engr. Femi Omoshewo"
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Engr. Femi Omoshewo</h3>
                  <p className="text-gray-600 mb-4">Technical Engineer</p>
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

              {/* Team member 3 */}
              <SwiperSlide>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="relative h-64 w-full mb-4">
                    <Image
                      src="/image/mrs-kikielomo-new.png" 
                      alt="Dr. Raji Nasir-Mustapha"
                      layout="fill"
                      objectFit="cover" 
                      className="rounded-lg"
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-2">Latifat Kikelomo Nasir-Raji</h3>
                  <p className="text-gray-600 mb-4">Team Member</p>
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

              {/* Team Member 4 */}
              <SwiperSlide>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="relative h-64 w-full mb-4">
                    <Image
                      src="/image/PHOTO-2025-03-12-11-09-27.jpg" 
                      alt="Arch. Yusuf Abdulaziz"
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg "
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Arch. Yusuf Abdulaziz</h3>
                  <p className="text-gray-600 mb-4">Technical Engineer</p>
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

              {/* Team member 5 */}
              <SwiperSlide>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="relative h-64 w-full mb-4">
                    <Image
                      src="/image/miss-latifat-new.png" 
                      alt="Dr. Raji Nasir-Mustapha"
                      layout="fill"
                      objectFit="contain" 
                      className="rounded-lg"
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-2">Aisha Oluwatosin Nasir-Raji</h3>
                  <p className="text-gray-600 mb-4">Team Member</p>
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

              {/* Team member 6 */}
              <SwiperSlide>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="relative h-64 w-full mb-4">
                    <Image
                      src="/image/PHOTO-2025-03-12-11-09-59-removebg-preview.png" 
                      alt="Builder Murital Salawu"
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg "
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Builder Murital Salawu</h3>
                  <p className="text-gray-600 mb-4">Constructor</p>
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