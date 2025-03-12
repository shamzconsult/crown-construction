import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

function FaqPage() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/image/service-eng2.webp')" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/50 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-white via-blue-500 to-yellow-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Frequently Asked Questions.
              <span className="sm:block "> Find Answers Here. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Explore our FAQ section to find answers to common questions about our services, processes, and more. If you can not find what you are looking for, feel free to reach out!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div>
                <h2 className='font-bold'>Do you want a direct Contact with Us?</h2>
                <div className="flex items-center space-x-3 mt-4 mb-6">
                  <FaPhoneAlt className="text-yellow-400 outline p-2 rounded-full text-4xl" />
                  <span className="text-lg text-yellow-400">+2348033112824</span>
                </div>

                <div>
                  <ul className="mt-8 flex gap-6">
                    <li>
                        <a
                        href="https://www.linkedin.com/company/106672800/admin/dashboard/"
                        rel="noreferrer"
                        target="_blank"
                        className="text-gray-400 transition  hover:opacity-75"
                        >
                        <span className="sr-only">LinkedIn</span>

                        <svg className="size-10 text-blue-400 outline p-1 rounded-full" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path 
                            fillRule="evenodd" 
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.8 20h-2.4v-10h2.4v10zm-1.2-11.418c-.837 0-1.2-.558-1.2-1.236 0-.701.389-1.236 1.237-1.236.848 0 1.2.535 1.2 1.236 0 .678-.363 1.236-1.237 1.236zm12 11.418h-2.4v-5.326c0-1.274-.024-2.913-1.777-2.913-1.78 0-2.053 1.387-2.053 2.821v5.418h-2.4v-10h2.4v1.364h.034c.335-.635 1.155-1.364 2.376-1.364 2.541 0 3.42 1.673 3.42 4.008v5.992z"
                            clipRule="evenodd"
                          />
                        </svg>

                        </a>
                    </li>

                    <li>
                        <a
                        href="https://www.instagram.com/crown_constructionsltd/"
                        rel="noreferrer"
                        target="_blank"
                        className="text-gray-400 transition hover:opacity-75"
                        >
                        <span className="sr-only">Instagram</span>

                        <svg className="size-10 text-pink-400 outline p-1 rounded-full" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                            />
                        </svg>
                        </a>
                    </li>

                    <li>
                        <a
                        href="https://x.com/crownsltd"
                        rel="noreferrer"
                        target="_blank"
                        className="text-gray-400 transition hover:opacity-75"
                        >
                        <span className="sr-only">Twitter</span>

                        <svg
                          className="size-10 text-gray-400 outline p-1 rounded-full"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M2 2h7l4 8 4-8h7l-9 12 9 12h-7l-4-8-4 8H2l9-12L2 2z" />
                        </svg>

                        </a>
                    </li>

                    <li>
                        <a
                        href="https://wa.me/2348033112824"
                        rel="noreferrer"
                        target="_blank"
                        className="text-gray-400 transition hover:opacity-75"
                        >
                        <span className="sr-only">WhatsApp</span>

                        <svg
                          className="size-10 text-green-400 outline p-1 rounded-full"
                          viewBox="0 0 32 32"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.936.815 5.689 2.223 8.049L2 30l6.279-2.165C10.262 29.054 13.043 30 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5c-2.755 0-5.323-.844-7.476-2.285l-.533-.365-3.73 1.287 1.254-3.645-.402-.623A11.885 11.885 0 014.5 16C4.5 9.663 9.663 4.5 16 4.5S27.5 9.663 27.5 16 22.337 27.5 16 27.5zm6.222-8.398c-.31-.158-1.841-.907-2.127-1.01-.286-.105-.493-.158-.7.157-.208.316-.802 1.01-.984 1.218-.182.208-.364.236-.674.079-.31-.158-1.31-.48-2.493-1.53-.92-.806-1.54-1.805-1.718-2.116-.182-.31-.02-.477.137-.635.142-.142.31-.364.462-.548a2.151 2.151 0 00.316-.52c.052-.105.026-.197-.026-.275-.053-.079-.7-1.716-.961-2.353-.253-.607-.507-.523-.7-.532-.182-.007-.389-.01-.595-.01a1.152 1.152 0 00-.834.389c-.286.316-1.098 1.073-1.098 2.618s1.125 3.036 1.282 3.253c.157.217 2.22 3.39 5.364 4.757 2.654 1.095 3.19 1.172 3.866 1.172h.024c1.184 0 2.058-.85 2.336-1.589.285-.74.285-1.373.197-1.589-.079-.21-.29-.316-.6-.474z" />
                        </svg>

                        </a>
                    </li>
                </ul>
                </div>
              </div>
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
            We follow strict quality control processes, use high-quality materials, and work with experienced professionals. Our team conducts regular inspections and adheres to industry standards to ensure every project meets our clients expectations.
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