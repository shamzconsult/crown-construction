import React from 'react';

function FaqPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-teal-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="bg-gradient-to-r from-white via-blue-500 to-yellow-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              Frequently Asked Questions.

              <span className="sm:block"> Find Answers Here. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Explore our FAQ section to find answers to common questions about our services, processes, and more. If you can not find what you are looking for, feel free to reach out!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded-sm border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:ring-3 focus:outline-hidden sm:w-auto"
                href="/contacts"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="space-y-4 max-w-screen-lg mx-auto p-10">
        {/* FAQ 1 */}
        <details
          className="group border-s-4 border-teal-500 bg-gray-100 p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              What types of construction projects do you handle?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            We specialize in a wide range of construction projects, including residential, commercial, industrial, and infrastructure development. Whether it is building homes, offices, or roads, we have the expertise to deliver high-quality results.
          </p>
        </details>

        {/* FAQ 2 */}
        <details
          className="group border-s-4 border-teal-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              How do you ensure the quality of your construction projects?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            We follow strict quality control processes, use high-quality materials, and work with experienced professionals. Our team conducts regular inspections and adheres to industry standards to ensure every project meets our clients' expectations.
          </p>
        </details>

        {/* FAQ 3 */}
        <details
          className="group border-s-4 border-teal-500 bg-gray-100 p-6 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              What is your approach to project timelines and deadlines?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            We prioritize timely delivery by creating detailed project schedules, using efficient construction methods, and maintaining clear communication with clients. Our goal is to complete projects on time without compromising quality.
          </p>
        </details>

        {/* FAQ 4 */}
        <details
          className="group border-s-4 border-teal-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              Do you offer eco-friendly construction solutions?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            Yes, we are committed to sustainability. We use eco-friendly materials, energy-efficient designs, and green construction practices to minimize environmental impact and create sustainable buildings.
          </p>
        </details>

        {/* FAQ 5 */}
        <details
          className="group border-s-4 border-teal-500 bg-gray-100 p-6 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              How can I get a quote for my construction project?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            You can request a quote by contacting us through our website or calling our office. Provide details about your project, and we will prepare a customized estimate based on your requirements.
          </p>
        </details>
      </div>
    </div>
  );
}

export default FaqPage;