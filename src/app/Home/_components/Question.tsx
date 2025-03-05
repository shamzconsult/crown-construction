import Link from 'next/link';
import React from 'react';

function Question() {
  return (
    <div className='py-2'>
      <div className='bg-white mx-auto max-w-screen-2xl bg-opacity-70 h-[220px] flex flex-col justify-center items-center'>
        <h2 className='md:text-6xl lg:text-7xl text-3xl font-sans font-bold text-teal-900 text-center'>
          Have any questions?
        </h2>
        <Link href='/contact' className='text-sm  text-center mt-6 bg-teal-900 p-4 text-white rounded-full'>
          Send us a message
        </Link>
      </div>
    </div>
  );
}

export default Question;