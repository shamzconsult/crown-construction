import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

function Project() {
  return (
    <div className='bg-teal-900'>
      <div className='max-w-screen-xl mx-auto py-10'>
        <div className='flex justify-between p-10'>
          <h2 className='text-3xl md:text-5xl text-white'>Recent Projects</h2>
          <Link 
            href="/"
            className='bg-yellow-400 p-2 md:p-4 flex items-center gap-4 rounded-4xl'>
              EXPLORE ALL
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 rtl:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
          </Link>
        </div>

        {/* Image Grid */}
        <div className=" gap-4 px-10">
          {/* First Row - Two Images */}
          <div className="flex gap-4 w-full h-96">
            <Image 
                src="/image/House3.webp" 
                alt="Project 1"
                width={600} 
                height={400} 
                className="w-1/2 object-cover " 
            />
            <Image 
                src="/image/House5.webp" 
                alt="Project 2" width={600} 
                height={400} 
                className="w-1/2 object-cover " 
            />
          </div>

          {/* Second Row - Three Images */}
          <div className="flex gap-4 w-full h-96 mt-10">
            <Image 
                src="/image/House7.webp" 
                alt="Project 3" 
                width={300} 
                height={200} 
                className="w-1/3 object-cover " 
            />
            <Image 
                src="/image/house8.webp" 
                alt="Project 4" 
                width={300} 
                height={200} 
                className="w-1/3 object-cover " 
            />
            <Image 
                src="/image/House5.webp" 
                alt="Project 5" 
                width={300} 
                height={200} 
                className="w-1/3 object-cover " 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
