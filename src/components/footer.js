// 'use client';

// import {
//     FaFacebook,
//     FaTwitter,
//     FaInstagram,
//     FaPhoneAlt,
//     FaEnvelope,
// } from 'react-icons/fa';

// import Image from 'next/image';
// import Link from 'next/link';

// export default function Footer() {
//     const currentYear = new Date().getFullYear();
//     const logo = '/logo.png'; // Ã¢Å“â€¦ Replace with your logo path or dynamic source

//     return (
//         <footer className="relative px-6 md:px-10 mt-40 bg-transparent text-gray-300">
//             {/* Animated Background Glow */}
//             <div className="absolute inset-0 blur-3xl opacity-20"></div>

//             {/* Main Footer Content */}
//             <div className="relative flex flex-col md:flex-row justify-between gap-10 my-10">
//                 {/* Left Section */}
//                 <div className="flex-1">
//                     <Link href="/" className="text-2xl font-bold tracking-wide font-mono">
//                         <span className="text-indigo-600">Doc</span>
//                         <span className="text-gray-800">Appoint</span>
//                     </Link>
//                     <p className="w-full md:w-2/3 text-gray-500 leading-6">
//                         DocAppoint is a registered startup empaneled with 10,000+ Doctors,
//                         500+ Hospitals, and has impacted over 2 million patients.
//                     </p>

//                     {/* Social Media Links */}
//                     <div className="flex gap-4 mt-4">
//                         <FaFacebook className="text-pink-500 text-2xl hover:scale-110 transition-all cursor-pointer" />
//                         <FaTwitter className="text-pink-500 text-2xl hover:scale-110 transition-all cursor-pointer" />
//                         <FaInstagram className="text-pink-500 text-2xl hover:scale-110 transition-all cursor-pointer" />
//                     </div>
//                 </div>

//                 {/* Center Section */}
//                 <nav>
//                     <p className="text-lg font-medium mb-5 text-black">Company</p>
//                     <ul className="flex flex-col gap-2">
//                         {[
//                             { name: "Home", href: "/" },
//                             { name: "About Us", href: "/aboutus" },
//                             { name: "Contact Us", href: "/contactus" },
//                             { name: "Services", href: "/service" },
//                         ].map((item) => (
//                             <li key={item.name} className="hover:text-black hover:translate-x-2 transition-all duration-300 cursor-pointer">
//                                 <Link href={item.href}>
//                                     {item.name}
//                                 </Link>
//                             </li>
//                         ))}
//                     </ul>
//                 </nav>

//                 {/* Right Section */}
//                 <nav>
//                     <p className="text-lg font-medium mb-5 text-black">Get in Touch</p>
//                     <ul className="flex flex-col gap-2">
//                         <li className="flex items-center gap-2 hover:text-black transition-all hover:scale-105 cursor-pointer">
//                             <FaPhoneAlt className="text-pink-500" />
//                             +92 123 4567890
//                         </li>
//                         <li className="flex items-center gap-2 hover:text-black transition-all hover:scale-105 cursor-pointer">
//                             <FaEnvelope className="text-pink-500" />
//                             support@docappoint.com
//                         </li>
//                     </ul>
//                 </nav>
//             </div>

//             {/* Bottom Section */}
//             <hr className="border-gray-600" />
//             <p className="py-5 text-sm text-center text-gray-400">
//                 Ã‚Â© {currentYear} Muzammil Husnain. All rights reserved.
//             </p>
//         </footer>
//     );
// }


'use client';

import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPhoneAlt,
    FaEnvelope,
} from 'react-icons/fa';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function useReveal() {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return [ref, inView];
}

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const logo = '/logo.png';
    const [footerRef, footerIn] = useReveal();

    const companyLinks = [
        { name: "Home", href: "/" },
        { name: "About us", href: "/aboutus" },
        { name: "Contact us", href: "/contactus" },
        { name: "Services", href: "/service" },
    ];

    const socialLinks = [
        { Icon: FaFacebook, label: "Facebook", href: "#" },
        { Icon: FaTwitter, label: "Twitter", href: "#" },
        { Icon: FaInstagram, label: "Instagram", href: "#" },
    ];

    return (
        <footer
            ref={footerRef}
            className="relative px-6 md:px-10 mt-40 bg-gradient-to-b from-transparent to-[#FDF6F5] text-gray-500 overflow-hidden"
        >
            <style>{`
                @keyframes footerFadeUp {
                    from { opacity: 0; transform: translateY(24px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .footer-fade { opacity: 0; }
                .footer-fade.in { animation: footerFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards; }
                .footer-fade.d1.in { animation-delay: 0.05s; }
                .footer-fade.d2.in { animation-delay: 0.15s; }
                .footer-fade.d3.in { animation-delay: 0.25s; }

                .footer-glow {
                    position: absolute;
                    width: 480px;
                    height: 480px;
                    border-radius: 9999px;
                    background: radial-gradient(circle, rgba(190,30,60,0.08) 0%, rgba(190,30,60,0) 70%);
                    pointer-events: none;
                }

                .social-badge {
                    transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), background 0.3s ease, color 0.3s ease;
                }
                .social-badge:hover {
                    transform: translateY(-3px);
                    background: #BE1E3C;
                    color: #FFFFFF;
                }

                .footer-link {
                    position: relative;
                    display: inline-block;
                    transition: color 0.25s ease, transform 0.25s ease;
                }
                .footer-link:hover {
                    color: #BE1E3C;
                    transform: translateX(6px);
                }

                .contact-row {
                    transition: color 0.25s ease, transform 0.25s ease;
                }
                .contact-row:hover {
                    color: #BE1E3C;
                    transform: translateX(4px);
                }
            `}</style>

            {/* Decorative glow */}
            <div className="footer-glow -top-32 left-1/3" />

            {/* Main Footer Content */}
            <div className="relative flex flex-col md:flex-row justify-between gap-12 pt-16 pb-10">

                {/* Left Section */}
                <div className={`footer-fade d1 ${footerIn ? 'in' : ''} flex-1`}>
                    <Link href="/" className="flex items-center gap-2 mb-4">
                   
                        <span className="text-2xl font-bold tracking-wide font-mono">
                            <span className="text-[#BE1E3C]">Doc</span>
                            <span className="text-[#1B1230]">Appoint</span>
                        </span>
                    </Link>
                    <p className="w-full md:w-4/5 leading-relaxed text-sm">
                        DocAppoint is a registered startup empaneled with 10,000+ doctors,
                        500+ hospitals, and has impacted over 2 million patients.
                    </p>

                    {/* Social Media Links */}
                    <div className="flex gap-3 mt-6">
                        {socialLinks.map(({ Icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                className="social-badge w-10 h-10 rounded-full bg-[#FBEAEC] text-[#BE1E3C] flex items-center justify-center"
                            >
                                <Icon className="text-base" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Center Section */}
                <nav className={`footer-fade d2 ${footerIn ? 'in' : ''}`}>
                    <p className="text-base font-semibold mb-5 text-[#1B1230]">Company</p>
                    <ul className="flex flex-col gap-3 text-sm">
                        {companyLinks.map((item) => (
                            <li key={item.name}>
                                <Link href={item.href} className="footer-link">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Right Section */}
                <nav className={`footer-fade d3 ${footerIn ? 'in' : ''}`}>
                    <p className="text-base font-semibold mb-5 text-[#1B1230]">Get in touch</p>
                    <ul className="flex flex-col gap-3 text-sm">
                        <li className="contact-row flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-[#FBEAEC] text-[#BE1E3C] flex items-center justify-center shrink-0">
                                <FaPhoneAlt className="text-xs" />
                            </span>
                            <a href="tel:+921234567890">+92 123 4567890</a>
                        </li>
                        <li className="contact-row flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-[#FBEAEC] text-[#BE1E3C] flex items-center justify-center shrink-0">
                                <FaEnvelope className="text-xs" />
                            </span>
                            <a href="mailto:support@docappoint.com">support@docappoint.com</a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Bottom Section */}
            <hr className="border-[#ECE2E1]" />
            <p className="py-6 text-sm text-center text-gray-400">
                © {currentYear} Muzammil Husnain. All rights reserved.
            </p>
        </footer>
    );
}