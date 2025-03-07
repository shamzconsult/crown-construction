"use client";

import { useState, useEffect } from 'react';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Crown Properties transformed our construction project from start to finish. Their team demonstrated exceptional professionalism, attention to detail, and delivered beyond our expectations.",
      name: "Ademakinwa Julius",
      stars: 5,
      image: "./image/avatar1.webp"
    },
    {
      quote: "Working with Crown Properties was a game-changer for our construction needs. Their innovative approach and meticulous execution helped us complete our project on time and within budget.",
      name: "Becky Daniels",
      stars: 4,
      image: "./image/avatar2.webp"
    },
    {
      quote: "I was thoroughly impressed by Crown Properties' expertise and dedication. They understood our unique requirements and delivered a final product that exceeded all expectations.",
      name: "Aromoke Williams",
      stars: 3,
      image: "./image/avatar1.webp"
    },
    {
      quote: "Crown Properties provided excellent service throughout our construction project. Their attention to detail and commitment to quality ensured a smooth and successful build.",
      name: "Helen Martins",
      stars: 5,
      image: "./image/avatar2.webp"
    },
    {
      quote: "We are absolutely delighted with the outcome of our project. Crown Properties combined innovative ideas with a strong commitment to deadlines, keeping us informed at every stage.",
      name: "Mustapha Olaoye",
      stars: 4,
      image: "./image/avatar1.webp"
    },
    {
      quote: "Crown Properties is professional, reliable, and incredibly talented. Their unique approach to construction has taken our project to the next level. I would not hesitate to recommend them to anyone!",
      name: "Sophia Olawale",
      stars: 5,
      image: "./image/avatar2.webp"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index: number): void => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full flex flex-col items-center p-10">
      <div className="absolute inset-0 z-0">
        <img
          src="/image/hero-image.webp" 
          alt="Background"
          className="w-full h-full object-cover"
        />
      <div className="absolute inset-0 bg-gray-900/80 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/50 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <h3 className="text-white text-3xl font-medium max-md:text-2xl text-center">
          Happy Customers, <br /> Happy World
        </h3>

        <div className="mt-10 flex w-full  justify-center gap-[5%]">
          <div className="review-container  flex flex-col items-center">
            <div className="flex !h-[350px] max-w-[550px] text-yellow-400  mb-6 relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`slides fade text-justify text-lg max-md:text-base bg-teal-900 shadow-md ${
                    index === currentIndex ? "block" : "hidden"
                  } px-6 py-4 rounded-lg relative`}
                >
                  {/* <span className="absolute top-0 left-0 h-6 w-6 border-t-4 border-l-4 text-yellow-400 rounded-tl-lg"></span> */}
                  {/* <span className="absolute bottom-0 right-0 h-6 w-6 border-b-4 border-r-4 text-yellow-400 rounded-br-lg"></span> */}
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s Testimonial`}
                    className="w-24 h-24 rounded-full object-cover mb-4 shadow-lg border border-gray-200 mx-auto"
                  />
                  <q className="italic text-white block text-center">
                    {testimonial.quote}
                  </q>
                  <div className="mt-2 text-yellow-400 text-center">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill"></i>
                    ))}
                  </div>
                  <p className="mt-3 text-center text-white font-medium">
                    - {testimonial.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation dots */}
            <div className="dots-container flex justify-center space-x-2 mt-4">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`cursor-pointer dot ${
                    index === currentIndex
                      ? "bg-teal-900"
                      : "bg-gray-300"
                  } inline-block h-3 w-3 rounded-full`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;