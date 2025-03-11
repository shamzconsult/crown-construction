'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

function Footer() {
    const pathname = usePathname();
    const isOnServicesPage = pathname === "/services";
    const isOnAboutPage = pathname === "/about"
  return (
    <footer className="bg-teal-900">
        <div className="mx-auto max-w-screen-2xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
                <div className="text-teal-600">
                <div className="h-[100px] w-[100px] rounded-full p-1 ">
                    <Link href="/">
                    <img
                        src="/image/logo2.png"
                        alt="logo"
                        className="h-full w-full object-contain bg-white rounded-full"
                    />
                    </Link>
                </div>
                </div>

                <p className="mt-4 max-w-xs text-sm text-gray-400">
                    Building a legacy of excellence, one project at a time. Quality, innovation, and reliability in every structure we create.
                </p>


                <ul className="mt-8 flex gap-6">
                    <li>
                        <a
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        className="text-gray-400 transition hover:opacity-75"
                        >
                        <span className="sr-only">Facebook</span>

                        <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                            />
                        </svg>
                        </a>
                    </li>

                    <li>
                        <a
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        className="text-gray-400 transition hover:opacity-75"
                        >
                        <span className="sr-only">Instagram</span>

                        <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        className="text-gray-400 transition hover:opacity-75"
                        >
                        <span className="sr-only">Twitter</span>

                        <svg
                          className="size-5"
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
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        className="text-gray-400 transition hover:opacity-75"
                        >
                        <span className="sr-only">Dribbble</span>

                        <svg
                          className="size-5.5"
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

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2 lg:grid-cols-4">
                <div>
                    <p className="font-medium text-yellow-400">Services</p>

                    <ul className="mt-6 space-y-4 text-sm">
                        <li>
                        <Link
                            href={isOnServicesPage ? "#contracting" : "/services#contracting"}
                            className="text-gray-400 transition hover:opacity-75"
                        >
                            Building Contracting
                        </Link>
                        </li>

                        <li>
                        <Link
                            href={isOnServicesPage ? "#smart-homes" : "/services#smart-homes"}
                            className="text-gray-400 transition hover:opacity-75"
                        >
                            Smart Homes
                        </Link>
                        </li>

                        <li>
                        <Link
                            href={isOnServicesPage ? "#construction" : "/services#construction"}
                            className="text-gray-400 transition hover:opacity-75"
                        >
                            Construction Services
                        </Link>
                        </li>

                        <li>
                        <Link
                            href={isOnServicesPage ? "#materials" : "/services#materials"}
                            className="text-gray-400 transition hover:opacity-75"
                        >
                            Supply of Materials
                        </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <p className="font-medium text-yellow-400">Company</p>

                    <ul className="mt-6 space-y-4 text-sm">
                        <li >
                            <a href="/about" className="text-gray-400 transition hover:opacity-75"> About </a>
                        </li>

                        <li >
                            <Link href={isOnAboutPage ? "#team" : "/about#team"} className="text-gray-400 transition hover:opacity-75"> Meet the Team </Link>
                        </li >

                        <li >
                            <Link href={isOnAboutPage ? "#vision" : "/about#vision"} className="text-gray-400 transition hover:opacity-75"> Vision & Mission </Link>
                        </li >
                    </ul>
                </div>

                <div>
                    <p className="font-medium text-yellow-400">Helpful Links</p>

                    <ul className="mt-6 space-y-4 text-sm">
                        <li>
                        <a href="/contacts" className="text-gray-400 transition hover:opacity-75"> Contact </a>
                        </li>

                        <li>
                        <a href="/faq" className="text-gray-400 transition hover:opacity-75"> FAQs </a>
                        </li>

                        
                        <li >
                            <Link href={isOnAboutPage ? "#location" : "/about#location"} className="text-gray-400 transition hover:opacity-75"> Location </Link>
                        </li >

                    </ul>
                </div>

                <div>
                    <p className="font-medium text-yellow-400">General</p>

                    <ul className="mt-6 space-y-4 text-sm">
                        <li>
                        <a href="/about" className="text-gray-400 transition hover:opacity-75"> About Us </a>
                        </li>

                        <li>
                        <a href="/services" className="text-gray-400 transition hover:opacity-75"> Services </a>
                        </li>

                        <li>
                        <a href="contact" className="text-gray-400 transition hover:opacity-75"> Contact Us</a>
                        </li>

                        <li>
                        <a href="/faq" className="text-gray-400 transition hover:opacity-75">
                            FAQ
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>

            {/* <p className="text-xs text-gray-500">&copy; 2022. Company Name. All rights reserved.</p> */}
        </div>
    </footer>
  )
}

export default Footer