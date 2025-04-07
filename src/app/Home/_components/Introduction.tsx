import React from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineEngineering } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";



function Introduction() {
  return (
    <div className="mx-auto max-w-screen-2xl p-10 md:flex py-20" id='introduction'>
      {/* Text area */}
      <div className="md:w-2/5 pr-8">
        <h2 className="text-4xl font-bold mb-6 ">
          We Build Everything As Your <span className="text-yellow-400 text-5xl">Dream</span>
        </h2>
        <p className="text-gray-500 mb-8">
          Crown Properties and Constructions Limited is a leading construction firm committed to providing 
          affordable housing and advancing sustainable structures. Our mission goes beyond meeting the needs of 
          individuals and organizations, it also includes safeguarding our environment.
        </p>
        <p className="text-gray-500 mb-8 hidden lg:block">
            We achieve this through keen attention to industry
            trends and the Integration of innovative, cutting edge technologies to deliver exceptional Value to
            our clients.
            From real estate development and road
            construction to housing and Urban development,
            our objective is to meet your aspirations in the real
            estate and construction sectors.
        </p>
        <ul className="space-y-4 text-gray-500">
          <li className="flex items-center gap-4">
            <IoMdCheckmarkCircleOutline className="text-yellow-400 text-xl" />
            <span>100% Satisfaction Guaranteed</span>
          </li>
          <li className="flex items-center gap-4">
            <IoMdCheckmarkCircleOutline className="text-yellow-400  text-xl" />
            <span>5+ Years of Experience</span>
          </li>
          <li className="flex items-center gap-4">
            <IoMdCheckmarkCircleOutline className="text-yellow-400  text-xl" />
            <span>Strong Building Materials</span>
          </li>
          <li className="flex items-center gap-4">
            <IoMdCheckmarkCircleOutline className="text-yellow-400  text-xl" />
            <span>Excellent Construction Service</span>
          </li>
        </ul>
      </div>

      {/* Image area 1&2 */}
      <div className="md:w-3/5 md:flex gap-4 mt-10 sm:mt-10">
        <div className="md:w-1/2 mb-4 md:mb-0 flex flex-col gap-4">
            <div className="h-10/12">
                <img
                src="/image/Construction1.jpg"
                alt="Construction"
                className="w-full h-full object-cover rounded-lg"
                />
            </div>
            <div className="h-2/12 relative">
                {/* Image */}
                <img
                    src="/image/construction-hero.jpg"
                    alt="Construction"
                    className="w-full h-full object-cover rounded-lg"
                />

                {/* Black Overlay */}
                <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent rounded-lg sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

                {/* Text */}
                <div className="absolute inset-0 flex items-center gap-6 justify-center text-white">
                    <div className='md:text-3xl bg-yellow-400 p-2 rounded-full'>
                        <MdOutlineEngineering />
                    </div>
                    <div  className=''>
                        <h3 className="md:text-lg font-bold">20+</h3>
                        <p className=" text-gray-300 font-bold">Satisfied Clients </p>
                    </div>
                   
                </div>
            </div>
        </div>

        <div className="md:w-1/2 flex flex-col gap-4">
            <div className="h-2/12 relative">
                {/* Image 3&4*/}
                <img
                    src="/image/construction.png"
                    alt="Construction"
                    className="w-full h-full object-cover rounded-lg"
                />

                {/* Black Overlay */}
                <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent rounded-lg sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

                {/* Text */}
                <div className="absolute inset-0 flex items-center gap-6 justify-center text-white">
                    <div className='md:text-3xl bg-yellow-400 p-2 rounded-full'>
                    <GrUserExpert />
                    </div>
                    <div  className=''>
                        <h3 className="md:text-lg  font-bold">5+ Years</h3>
                        <p className=" text-gray-300 font-bold">Of Experience </p>
                    </div>
                   
                </div>
            </div>
            <div className="h-10/12">
                <img
                src="/image/construction4.webp"
                alt="Construction"
                className="w-full h-full object-cover rounded-lg"
                />
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default Introduction;