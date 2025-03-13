'use client'
import React, { useState } from 'react'

const houseData = [
    {
      id: 1,
      title: "Serenity Haven Homes",
      location: "Sleman, Yogyakarta",
      price: "$453,600.00",
      rating: "4.9",
      images: [
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
      ],
    },
    {
      id: 2,
      title: "Luxury Villa",
      location: "Bali, Indonesia",
      price: "$799,900.00",
      rating: "5.0",
      images: [
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
      ],
    },

    {
        id: 3,
        title: "Luxury Villa",
        location: "Bali, Indonesia",
        price: "$799,900.00",
        rating: "5.0",
        images: [
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        ],
      },
  ];

function Gallery() {
    const [selectedImages, setSelectedImages] = useState([]);
    const [isModalOpen, setIsMoodalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (images) => {
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
    <div className=' font-emblema'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 mx-auto max-w-screen-lg md:px-20 lg:px-0 p-4'>
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
                            <span className="px-2 py-1 bg-gray-100 rounded">4 Rooms</span>
                            <span className="text-gray-400 flex items-center">•</span>
                            <span className="px-2 py-1 bg-gray-100 rounded">Rooftop</span>
                            <span className="text-gray-400 flex items-center">•</span>
                            <span className="px-2 py-1 bg-gray-100 rounded">Playground</span>
                        </div>

                        <p className="mt-3 text-lg font-bold text-gray-900">{house.price}</p>
                    </div>
                </article>
            ))}
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