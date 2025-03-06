import React from 'react'
import { RiHandHeartLine } from "react-icons/ri";
import { HiLightBulb } from "react-icons/hi";
import { FaRegHandshake } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { PiInfinityBold } from "react-icons/pi";


function Values() {
  return (
    <div className='bg-slate-900 '>
        <div className='mx-auto max-w-screen-xl p-6'>
            <div className='py-10 max-w-3xl px-8'>
                <h2 className='text-white text-3xl md:text-5xl mb-6'>Who are WE?</h2>
                <p className='text-white'>Crown Properties and Constructions Limited is a
                    leading construction firm committed to providing
                    affordable housing and advancing sustainable
                    structures. Our mission goes beyond meeting the
                    needs of individuals and organizations—it also
                    includes safeguarding our environment.
                </p>
                
            </div>
            <div className='md:flex grid grid-cols-3 justify-around  p-8 rounded-b-full'>
                <div className=''>
                    <RiHandHeartLine className='mb-4 text-5xl text-teal-700' />
                    <p className='text-white'>Ethics</p>
                </div>
                <div>
                    <HiLightBulb className='mb-4 text-5xl text-teal-700' />
                    <p className='text-white'>Innovation</p>
                </div>
                <div>
                    <FaRegHandshake className='mb-4 text-5xl text-teal-700' />
                    <p className='text-white'>Collaboration</p>
                </div>
                <div>
                    <TbTargetArrow className='mb-4 text-5xl text-teal-700' />
                    <p className='text-white'>Quality</p>
                </div>
                <div>
                    <PiInfinityBold className='mb-4 text-5xl text-teal-700' />
                    <p className='text-white'>Sustainability</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Values