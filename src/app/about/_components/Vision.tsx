import Image from 'next/image'
import React from 'react'

function Vision() {
  return (
    <div className='mx-auto max-w-screen-lg py-20' id='vision'>
        <div>
            <div className='md:flex gap-10 p-6'>
                <div className='border mb-10 md:mb-0 shadow-md rounded-2xl p-6'>
                    <div className='h-40 flex items-center justify-center'>
                        <div className='bg-gray-100 p-6 rounded-full shadow-2xl flex items-center justify-center'>
                        <Image 
                            src="/image/Group 201.png" 
                            alt="Project 1"
                            width={100} 
                            height={100} 
                            className="w-20 h-20 object-cover" 
                        />
                        </div>
                    </div>

                    <h2 className='text-center mt-6 text-teal-900 text-xl font-semibold'>Vision</h2>
                    <p className='mt-4 text-center text-gray-600'>
                        To be a leading construction and property development company in Nigeria, setting the benchmark for innovation, reliability, and sustainability.
                    </p>
                </div>
                <div className='border mb-10 md:mb-0 shadow-md rounded-2xl p-6'>
                    <div className='h-40 flex items-center justify-center'>
                        <div className='bg-gray-100 p-6 rounded-full shadow-2xl flex items-center justify-center'>
                        <Image 
                            src="/image/Group 228.png" 
                            alt="Project 1"
                            width={100} 
                            height={100} 
                            className="w-20 h-20 object-cover" 
                        />
                        </div>
                    </div>

                    <h2 className='text-center mt-6 text-teal-900 text-xl font-semibold'>Mission</h2>
                    <p className='mt-4 text-center text-gray-600'>
                        To deliver exceptional construction, design, and real estate services,
                        contributing to Nigeria&apos;s infrastructural growth and economic
                        development.
                    </p>
                </div>
                <div className='border mb-10 md:mb-0 shadow-md rounded-2xl p-6'>
                    <div className='h-40 flex items-center justify-center'>
                        <div className='bg-gray-100 p-6 rounded-full shadow-2xl flex items-center justify-center'>
                        <Image 
                            src="/image/Group 229.png" 
                            alt="Project 1"
                            width={100} 
                            height={100} 
                            className="w-20 h-20 object-cover" 
                        />
                        </div>
                    </div>
                    
                    <h2 className='text-center mt-6 text-xl text-teal-900 font-semibold'>Goals</h2>
                    <p className='mt-4 text-center text-gray-600'>
                        Our goal is to revolutionize the construction industry,
                        adhering to regulatory standards, and keeping our clients informed
                        at every stage of the process.
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Vision