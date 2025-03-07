// import Image from 'next/image'
// import React from 'react'

// function ServiceHero() {
//   return (
//     <div>
//         <section className="bg-gray-50">
//             <div className="mx-auto max-w-screen-xl px-4 py-32  lg:items-center">
//                 <div className="mx-auto max-w-xl text-center">
//                 <h1 className="text-3xl font-extrabold sm:text-5xl">
//                     Understand User Flow.
//                     <strong className="font-extrabold text-red-700 sm:block"> Increase Conversion. </strong>
//                 </h1>

//                 <p className="mt-4 sm:text-xl/relaxed">
//                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
//                     numquam ea!
//                 </p>

                
//                 </div>
//             </div>
//         </section>

//         <div className='mx-auto w-full'>
//         <Image
//             src="/image/Construction-engineer.webp" 
//             alt="FAQ Illustration"
//             width={900}
//             height={900}
//             className="rounded-md shadow-lg"
//           />
//         </div>
//     </div>
//   )
// }

// export default ServiceHero




































'use client'

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; 

function ServiceHero() {
  return (
    <section className="bg-teal-900 text-white py-32 ">
      <div className="mx-auto max-w-screen-xl px-4 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Content */}
        <motion.div
          className="lg:w-1/3 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-yellow-400 bg-clip-text text-3xl font-extrabold  sm:text-5xl">
            Check out 
            <span className="sm:block"> What we DO </span>
          </h1>
          <p className="mt-4 max-w-xl sm:text-xl">
            We offer top-notch services tailored to meet your needs, ensuring quality, efficiency, and customer satisfaction.
          </p>
          
        </motion.div>

        {/* Animated Image */}
        <motion.div
          className="lg:w-2/3 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <Image
            src="/image/Construction-engineer.webp" 
            alt="FAQ Illustration"
            width={900}
            height={900}
            className="rounded-md shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceHero;
