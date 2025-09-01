'use client';

import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPhoneAlt,
    FaEnvelope,
} from 'react-icons/fa';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const logo = '/logo.png'; // ✅ Replace with your logo path or dynamic source

    return (
        <footer className="relative px-6 md:px-10 mt-40 bg-transparent text-gray-300">
            {/* Animated Background Glow */}
            <div className="absolute inset-0 blur-3xl opacity-20"></div>

            {/* Main Footer Content */}
            <div className="relative flex flex-col md:flex-row justify-between gap-10 my-10">
                {/* Left Section */}
                <div className="flex-1">
                    <Link href="/" className="text-2xl font-bold tracking-wide font-mono">
                        <span className="text-indigo-600">Doc</span>
                        <span className="text-gray-800">Appoint</span>
                    </Link>
                    <p className="w-full md:w-2/3 text-gray-500 leading-6">
                        DocAppoint is a registered startup empaneled with 10,000+ Doctors,
                        500+ Hospitals, and has impacted over 2 million patients.
                    </p>

                    {/* Social Media Links */}
                    <div className="flex gap-4 mt-4">
                        <FaFacebook className="text-pink-500 text-2xl hover:scale-110 transition-all cursor-pointer" />
                        <FaTwitter className="text-pink-500 text-2xl hover:scale-110 transition-all cursor-pointer" />
                        <FaInstagram className="text-pink-500 text-2xl hover:scale-110 transition-all cursor-pointer" />
                    </div>
                </div>

                {/* Center Section */}
                <nav>
                    <p className="text-lg font-medium mb-5 text-black">Company</p>
                    <ul className="flex flex-col gap-2">
                        {[
                            { name: "Home", href: "/" },
                            { name: "About Us", href: "/aboutus" },
                            { name: "Contact Us", href: "/contactus" },
                            { name: "Services", href: "/service" },
                        ].map((item) => (
                            <li key={item.name} className="hover:text-black hover:translate-x-2 transition-all duration-300 cursor-pointer">
                                <Link href={item.href}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Right Section */}
                <nav>
                    <p className="text-lg font-medium mb-5 text-black">Get in Touch</p>
                    <ul className="flex flex-col gap-2">
                        <li className="flex items-center gap-2 hover:text-black transition-all hover:scale-105 cursor-pointer">
                            <FaPhoneAlt className="text-pink-500" />
                            +92 123 4567890
                        </li>
                        <li className="flex items-center gap-2 hover:text-black transition-all hover:scale-105 cursor-pointer">
                            <FaEnvelope className="text-pink-500" />
                            support@docappoint.com
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Bottom Section */}
            <hr className="border-gray-600" />
            <p className="py-5 text-sm text-center text-gray-400">
                © {currentYear} Muzammil Husnain. All rights reserved.
            </p>
        </footer>
    );
}
