'use client'
import React, { useState } from 'react'



const houseData = [
    {
      id: 1,
      title: "Serenity Haven Homes",
      location: "Garki, Abuja",
      price: "$453,600.00",
      rating: "4.7",
      first_description:"4 Rooms",
      second_description: "Rooftop",
      third_description: "Playground",
      images: [
        "/image/building-after.jpg",
        "/image/building-before2.webp",
        "/image/building-before.webp",
      ],
    },
    {
      id: 2,
      title: "Luxury Villa",
      location: "Lekki, Lagos",
      price: "$79,900.00",
      rating: "5.0",
      first_description:"5G Network",
      second_description: "Smart Touch",
      third_description: "Internet",
      images: [
        "/image/smart-home.jpg",
        "/image/smart-home3.jpg",
        "/image/smart-homes2.jpg",
      ],
    },

    {
        id: 3,
        title: "Luxury Villa",
        location: "Bali, Indonesia",
        price: "$799,900.00",
        rating: "5.0",
        first_description:"Durability",
        second_description: "Longetivity",
        third_description: "Bulk Purchase",
        images: [
            "/image/building-material4.jpeg",
            "/image/building-material2.jpeg",
            "/image/building-material.jpg",
        ],
      },
  ];

function Gallery() {
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const [isModalOpen, setIsMoodalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (images: string[]) => {
        setSelectedImages(images);
        setCurrentIndex(0);
        setIsMoodalOpen(true);
    };

    const closeModal = () => {
        setIsMoodalOpen(false);
        setSelectedImages([]);
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % selectedImages.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + selectedImages.length % selectedImages.length))
    }
  return (
    <div className=' font-sans'>
        <div className='  py-10 mx-auto max-w-screen-xl md:px-20 lg:px-0 p-4'>
            <h1 className='text-3xl mb-10 text-teal-900 md:text-5xl font-bold'>Checkout our recent Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {houseData.map((house) => (
                    <article 
                    key={house.id}
                    onClick={() => openModal(house.images)}
                    className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg relative">
                        <img
                            alt={house.title}
                            src={house.images[0]}
                            className="h-56 w-full object-cover cursor-pointer"
                        />

                        <div className="absolute top-3 right-3 flex items-center bg-white text-black text-sm font-semibold px-2 py-1 rounded-full shadow-md">
                            ⭐ {house.rating}
                        </div>

                        <div className="bg-white p-4 sm:p-6">
                            <h3 className="text-lg font-semibold text-gray-900">{house.title}</h3>
                            <p className="text-sm text-gray-500">{house.location}</p>

                            <div className="mt-2 text-xs text-gray-600 flex flex-wrap gap-1">
                                <span className="px-2 py-1 bg-gray-100 rounded">{house.first_description}</span>
                                <span className="text-gray-400 flex items-center">•</span>
                                <span className="px-2 py-1 bg-gray-100 rounded">{house.second_description}</span>
                                <span className="text-gray-400 flex items-center">•</span>
                                <span className="px-2 py-1 bg-gray-100 rounded">{house.third_description}</span>
                            </div>

                            <p className="mt-3 text-lg font-bold text-gray-900">{house.price}</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>

        {isModalOpen && (
        <div className="fixed inset-0  backdrop-blur-lg bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-11/12 md:w-3/5 lg:w-2/5">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white text-xl font-bold cursor-pointer"
            >
              ✕
            </button>

            <img
              src={selectedImages[currentIndex]}
              alt="House Preview"
              className="rounded-lg w-full object-cover max-h-[70vh]"
            />

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full"
            >
              ◀
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full"
            >
              ▶
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery