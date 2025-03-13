import Link from 'next/link'
import React from 'react'

function FounderProfile() {
  return (
    <section className=''>
        <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                <div className='mb-20 md:mb-4'>
                    <img
                    src="/image/PHOTO-2024-12-12-14-29-49.jpg"
                    className="rounded max-w-lg md:w-96 lg:w-full"
                    alt=""
                    />
                    <div className='text-center'>
                        <h1 className='text-2xl font-semibold mt-2'>Abdulrasaq Kaosarah Adeyi</h1>
                        <p className='font-semibold'>Founder and CEO</p>
                        <div>
                            <Link
                                href="https://"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="linkedin"
                                className="transition-colors duration-300 hover:text-orange-500"
                            >
                                <i className="bi bi-linkedin text-xl"></i>
                            </Link>
                        </div>
                    </div>
                </div> 
                
                <div className='mb-20'>
                    <div className="max-w-lg md:max-w-none lg:text-lg">
                        <h2 className="text-2xl p-2 font-semibold text-teal-900 sm:text-3xl">
                            Meet our Founder
                        </h2>

                        <p className="mt-4 text-gray-700 p-2">
                            Dr. Nasir Olaitan Raji-Mustapha is the chairman and chief executive officer of Crown Group of Companies. 
                            A group that comprises Crown Agrovet and Crown Properties and Constructions Limited. He is the Immediate 
                            Past Director-General of the National Productivity Centre (NPC) in Nigeria.
                           
                        </p>
                        <p className='mt-2 text-gray-700 p-2'>
                            Professionally, he joined the NPC in 1994 as a Senior Productivity Research Officer. Prior to this, he served 
                            as a Research Fellow with the European Economic Commission from 1991 to 1993. He also lectured at Haramaya University 
                            in Ethiopia between 2002 and 2004 under the Nigeria Technical Aid Corps program. 
                        </p>
                        <p className='md:hidden lg:block text-gray-700 p-2 mt-2'> We are intentional about providing quality services to budding businesses,
                            established private organizations, corporate enterprise, development
                            organizations, politicians and private individuals who takes branding
                            seriously and are desirous to create a unique persona that will ultimately
                            propel them for greater opportunities.
                            <br />
                            He is an astute community builder, a consummate public affairs analyst, an experienced business person and a leader of all and sundry.
                        </p>
                    </div>
                    <div className='p-2'>
                     <Link href='/founder' className='bg-teal-900 text-white p-2 mt-4 flex justify-center  w-48 rounded-sm justify-items-center'>VIEW MORE</Link>

                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default FounderProfile