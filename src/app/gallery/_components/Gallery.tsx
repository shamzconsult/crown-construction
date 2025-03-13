import React from 'react'

function Gallery() {
  return (
    <div className=' font-serif'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 mx-auto max-w-screen-lg p-4'>
            <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    className="h-56 w-full object-cover"
                />

                <div className="bg-white p-4 sm:p-6">
                    <time dateTime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

                    <a href="#">
                    <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                    pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                    mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                    dignissimos. Molestias explicabo corporis voluptatem?
                    </p>
                </div>
            </article>

            <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    className="h-56 w-full object-cover"
                />

                <div className="bg-white p-4 sm:p-6">
                    <time dateTime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

                    <a href="#">
                    <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                    pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                    mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                    dignissimos. Molestias explicabo corporis voluptatem?
                    </p>
                </div>
            </article>

            <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    className="h-56 w-full object-cover"
                />

                <div className="bg-white p-4 sm:p-6">
                    <time dateTime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

                    <a href="#">
                    <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                    pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                    mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                    dignissimos. Molestias explicabo corporis voluptatem?
                    </p>
                </div>
            </article>

            <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg relative">
                {/* Image */}
                <img
                    alt="Serenity Haven Homes"
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    className="h-56 w-full object-cover"
                />

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 flex items-center bg-white text-yellow-500 text-sm font-semibold px-2 py-1 rounded-full shadow-md">
                    ⭐ 4.9
                </div>

                {/* Card Content */}
                <div className="bg-white p-4 sm:p-6">
                    <h3 className="text-lg font-semibold text-gray-900">Serenity Haven Homes</h3>
                    <p className="text-sm text-gray-500">Sleman, Yogyakarta</p>

                    {/* Features */}
                    <div className="mt-2 text-xs text-gray-600 flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-gray-100 rounded">4 Rooms</span>
                        <span className="text-gray-400 flex items-center">•</span>
                        <span className="px-2 py-1 bg-gray-100 rounded">Rooftop</span>
                        <span className="text-gray-400 flex items-center">•</span>
                        <span className="px-2 py-1 bg-gray-100 rounded">Playground</span>
                    </div>

                    {/* Price */}
                    <p className="mt-3 text-lg font-bold text-gray-900">$453,600.00</p>
                </div>
            </article>

        </div>
    </div>
  )
}

export default Gallery