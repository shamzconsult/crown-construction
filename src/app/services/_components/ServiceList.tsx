import React from 'react'

function ServiceList() {
  return (
    <div className='mx-auto max-w-screen-xl p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20'>
        <article className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg ">
            <img
                alt=""
                src="/image/Construction1.jpg"
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t  from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">

                <a href="#">
                    <h3 className="mt-0.5 text-lg text-white">Building Contracting</h3>
                </a>

                <p className="mt-2 line-clamp-3  text-sm/relaxed text-white/95">
                    We specialize in developing smart and eco-friendly residential, industrial, and commercial
                    buildings, including homes, schools, and
                    estates.
                </p>
                </div>
            </div>
        </article>

        <article className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
            <img
                alt=""
                src="/image/House3.webp"
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">

                <a href="#">
                    <h3 className="mt-0.5 text-lg text-white">Real Estate Development</h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    We excel in land acquisition, planning,
                    development, allocation, and property sales.
                    Our expertise extends to managing the
                    development of residential and industrial hubs
                </p>
                </div>
            </div>
        </article>

        <article className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
            <img
                alt=""
                src="/image/Smart-Home-Technology.jpg"
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">

                <a href="#">
                    <h3 className="mt-0.5 text-lg text-white">Installation of Smart Home Infrastructure</h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    We are dedicated to providing affordable smart
                    homes. Our expertise ensures clients achieve their
                    smart home aspirations through the installation of
                    durable and cost-effective infrastructure.
                </p>
                </div>
            </div>
        </article>

        <article className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
            <img
                alt=""
                src="/image/construction4.webp"
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">

                <a href="#">
                    <h3 className="mt-0.5 text-lg text-white">Construction service</h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    We design, erect, improve, alter , and maintain
                    construction projects, including houses, roads,
                    bridges, docks, pipelines, and other public
                    utilities
                </p>
                </div>
            </div>
        </article>

        <article className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
            <img
                alt=""
                src="/image/construction-material.webp"
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">

                <a href="#">
                    <h3 className="mt-0.5 text-lg text-white">Supply of Construction Materials</h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    We engage in the importation, exportation, and
                    distribution of building materials and equipment.
                    As general merchants, we supply a wide range
                    of construction-related products
                </p>
                </div>
            </div>
        </article>

        <article className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
            <img
                alt=""
                src="/image/contracting-material.png"
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">

                <a href="#">
                    <h3 className="mt-0.5 text-lg text-white">General Contracting and Supplies</h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Our team of skilled civil engineers, realtors,
                    builders, and estate management experts bring
                    your construction dreams to life. We handle
                    contracts and supply building and construction
                    materials efficiently.
                </p>
                </div>
            </div>
        </article>
    </div>
  )
}

export default ServiceList