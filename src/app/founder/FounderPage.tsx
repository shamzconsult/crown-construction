import Link from 'next/link'
import React from 'react'

function FounderPage() {
  return (
    <section className=''>
        <div className="mx-auto max-w-screen-md px-4 py-2 sm:px-6 lg:px-8">
            <div className=" md:items-center md:gap-8">
                <div className='mb-20 md:mb-4'>
                    <div className='flex justify-center'>
                        <img
                        src="/image/PHOTO-2024-12-12-14-29-49.jpg"
                        className="rounded max-w-lg md:w-96 lg:w-full"
                        alt=""
                        />
                    </div>
                    
                    <div className='text-center'>
                        <h1 className='text-2xl font-semibold mt-2'>Dr. Nasir Olaitain Raji-Mustapha</h1>
                        <p className='font-semibold'>Founder and CEO</p>
                        <div className=' '>
                            <Link
                                href="https://www.linkedin.com/in/dr-nasir-olaitan-raji-mustapha-4b3167318/"
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
                        {/* <h2 className="text-2xl p-2 text-center font-semibold text-teal-900 sm:text-3xl">
                            Meet our Founder
                        </h2> */}

                        <p className="mt-4 text-gray-700 p-2">
                            Dr. Nasir Olaitan Raji-Mustapha is the chairman and chief executive officer of Crown Group of Companies. 
                            A group that comprises Crown Agrovet and Crown Properties and Constructions Limited. He is the Immediate 
                            Past Director-General of the National Productivity Centre (NPC) in Nigeria.
                           
                        </p>
                        <p className="mt-4 text-gray-700 p-2">
                            Dr. Raji-Mustapha&apos;s academic background includes a Doctor of Veterinary Medicine (DVM) from Ahmadu Bello University, 
                            a Master of Science (M.Sc.) in Applied Entomology and Parasitology from the University of Jos, and a Master of Business Administration (MBA) 
                            from Nasarawa State University. 
                        </p>
                        <p className='mt-2 text-gray-700 p-2'>
                            Professionally, he joined the NPC in 1994 as a Senior Productivity Research Officer. Prior to this, he served 
                            as a Research Fellow with the European Economic Commission from 1991 to 1993. He also lectured at Haramaya University 
                            in Ethiopia between 2002 and 2004 under the Nigeria Technical Aid Corps program. 
                        </p>
                        <p className='mt-2 text-gray-700 p-2'>
                            Throughout his career, Dr. Raji-Mustapha has been recognized for his contributions, receiving awards such as the National 
                            Productivity Merit Award from the NPC, Best M.Sc. Student in Applied Entomology and Parasitology at the University of Jos in 1995, 
                            and Best MBA Student at Nasarawa State University in 2019.
                        </p>
                        <p className='mt-2 text-gray-700 p-2'>
                            In addition to his role at the NPC, he has been actively involved in community and religious organizations. Notably, he was inaugurated as the 
                            Chairman of the Federal Capital Territory (FCT) Zone of the Nasrul-lahi-l-Fatih Society (NASFAT), an Islamic organization, in 2020. 
                            He is an astute community builder, a consummate public affairs analyst, an experienced business person and a leader of all and sundry.
                        </p>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default FounderPage