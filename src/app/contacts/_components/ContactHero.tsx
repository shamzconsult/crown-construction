import React from "react";

function ContactHero() {
  return (
    <div className="relative">
      <div className="bg-teal-900 h-[500px] flex flex-col items-center justify-center text-white relative z-10">
        <div className="text-center">
        <h1 className="text-3xl md:text-5xl text-yellow-400 lg:text-7xl font-bold">Get in Touch with Us</h1>
        <p className="mt-2 text-sm max-w-md mb-32 mx-auto">
        Have questions or need assistance? Reach out to us, and we will be happy to help.
        </p>

        </div>
      </div>

      <div className="relative z-20 bg-gray-100 flex justify-center">
        <img
          src="/image/Contact-Us-Hero-Image.jpg"
          alt="Construction Engineer"
          className=" shadow-lg w-[80%] object-cover max-w-screen-2xl md:h-[300] lg:h-[500] -mt-56"
        />
      </div>

      {/* White Background Section Below */}
      <div className="h-[100px] bg-gray-100 relative z-10"></div>
    </div>
  );
}

export default ContactHero;
