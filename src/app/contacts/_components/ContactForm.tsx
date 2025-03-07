import React from 'react'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { CiGlobe } from "react-icons/ci";


function ContactForm() {
  return (
    <div>
        <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div className="lg:col-span-2 lg:py-12">
                    <h2 className="text-4xl md:text-5xl text-teal-900 mb-6 font-bold">Get in Touch</h2>
                    <p className="max-w-xl text-lg mt-2">
                        Have any questions or need support? Feel free to reach out to us!
                    </p>

                    <div className="mt-6 space-y-4">
                        <div className="flex items-center space-x-3 mb-6">
                            <FaPhoneAlt className="text-teal-900 text-xl" />
                            <span className="text-lg">+2348033112824</span>
                        </div>

                        <div className="flex items-center space-x-3 mb-6">
                            <FaEnvelope className="text-teal-900 text-xl" />
                            <span className="text-lg">crownconstructionsltd@gmail.com</span>
                        </div>

                        <div className="flex items-center space-x-3 mb-6">
                            <CiGlobe className="text-teal-900 text-xl" />
                            <span className="text-lg">www.crownpropertiesltd.com</span>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <form action="#" className="space-y-4">
                        <div className='border rounded-lg'>
                            <label className="sr-only" htmlFor="name">Name</label>
                            <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Name"
                            type="text"
                            id="name"
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className='border rounded-lg'>
                                <label className="sr-only" htmlFor="email">Email</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Email address"
                                    type="email"
                                    id="email"
                                />
                            </div>

                            <div className='border rounded-lg'>
                                <label className="sr-only" htmlFor="phone">Phone</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Phone Number"
                                    type="tel"
                                    id="phone"
                                />
                            </div>
                        </div>

                   

                        <div className='border rounded-lg'>
                            <label className="sr-only" htmlFor="message">Message</label>

                            <textarea
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Message"
                            rows="8"
                            id="message"
                            ></textarea>
                        </div>

                        <div className="mt-4">
                            <button
                            type="submit"
                            className="inline-block w-full rounded-lg bg-teal-900 px-5 py-3 font-medium text-white sm:w-auto"
                            >
                            Send Enquiry
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default ContactForm