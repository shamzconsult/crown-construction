import React from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function Introduction() {
  return (
    <div className="mx-auto max-w-screen-2xl p-10 md:flex py-20">
      {/* Text area */}
      <div className="md:w-2/5 pr-8">
        <h2 className="text-4xl font-bold mb-6 ">
          We Build Everything As Your <span className="text-yellow-400 text-5xl">Dream</span>
        </h2>
        <p className="text-gray-500 mb-8">
          Crown Properties and Constructions Limited is a leading construction firm committed to providing affordable housing and advancing sustainable structures. Our mission goes beyond meeting the needs of individuals and organizations—it also includes safeguarding our environment.
        </p>
        <p className="text-gray-500 mb-8 hidden lg:block">
            We achieve this through keen attention to industry
            trends and the Integration of innovative, cuttingedge technologies to deliver exceptional Value to
            our clients.
            From real estate development and road
            construction to housing and Urban development,
            our objective is to meet your aspirations in the real
            estate and construction sectors.
        </p>
        <ul className="space-y-4 text-gray-500">
          <li className="flex items-center gap-4">
            <IoMdCheckmarkCircleOutline className="text-teal-900 text-xl" />
            <span>100% Satisfaction Guarantee</span>
          </li>
          <li className="flex items-center gap-4">
            <IoMdCheckmarkCircleOutline className="text-teal-900 text-xl" />
            <span>5+ Years of Experience</span>
          </li>
          <li className="flex items-center gap-4">
            <IoMdCheckmarkCircleOutline className="text-teal-900 text-xl" />
            <span>Strong Building Materials</span>
          </li>
          <li className="flex items-center gap-4">
            <IoMdCheckmarkCircleOutline className="text-teal-900 text-xl" />
            <span>Real Estate Management</span>
          </li>
        </ul>
      </div>

      {/* Image area */}
      <div className="md:w-3/5 flex gap-4">
        <div className="w-1/2 flex flex-col gap-4">
          <div className="h-9/12">
            <img
              src="/image/construction-hero.jpg"
              alt="Construction"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="h-3/12">
            <img
              src="/image/construction-hero.jpg"
              alt="Construction"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="w-1/2 flex flex-col gap-4">
        <div className="h-3/12">
            <img
              src="/image/construction-hero.jpg"
              alt="Construction"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="h-9/12">
            <img
              src="/image/construction-hero.jpg"
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