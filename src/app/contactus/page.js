// import React from 'react';
// import {
//   FaPhoneAlt, FaEnvelope, FaBuilding, FaMapMarkerAlt,
//   FaClock, FaLinkedin, FaTwitter, FaFacebook
// } from "react-icons/fa";

// export default function Contact() {
//   return (
//     <div className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
//       <div className="text-center text-4xl font-bold text-gray-800 mb-12">
//         CONTACT <span className="text-rose-600">US</span>
//       </div>

//       <div className="flex flex-col md:flex-row items-center gap-12">
//         {/* Contact Info */}
//         <div className="w-full md:w-1/2 flex flex-col justify-between gap-8">
//           <div className="flex flex-col gap-6 bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">

//             {/* Office Details */}
//             <div className="flex items-start gap-4">
//               <FaBuilding className="text-rose-600 text-3xl" />
//               <div>
//                 <p className="text-lg font-semibold text-rose-600">Our OFFICE</p>
//                 <p className="mt-1 text-gray-600">
//                   C3CV+8V8 <br /> Mall Road, Faisalabad, Pakistan
//                 </p>
//               </div>
//             </div>

//             {/* Phone & Email */}
//             <div className="flex items-start gap-4">
//               <FaPhoneAlt className="text-rose-600 text-3xl" />
//               <div>
//                 <p className="text-lg font-semibold text-rose-600">Get in Touch</p>
//                 <p className="mt-1">
//                   <a href="tel:+92348567288" className="text-blue-600 hover:underline">
//                     +92348567288
//                   </a>
//                 </p>
//                 <p>
//                   <a href="mailto:DocAppointr@gmail.com" className="text-blue-600 hover:underline">
//                     DocAppoint@gmail.com
//                   </a>
//                 </p>
//               </div>
//             </div>

//             {/* Careers */}
//             <div className="flex items-start gap-4">
//               <FaEnvelope className="text-rose-600 text-3xl" />
//               <div>
//                 <p className="text-lg font-semibold text-rose-600">Careers at DocAppoint</p>
//                 <p className="mt-1 text-gray-600">Explore job openings and join our team.</p>
             
//               </div>
//             </div>

//             {/* Office Hours */}
//             <div className="flex items-start gap-4">
//               <FaClock className="text-rose-600 text-3xl" />
//               <div>
//                 <p className="text-lg font-semibold text-rose-600">Office Hours</p>
//                 <p className="mt-1 text-gray-600">
//                   Monday - Friday: 9:00 AM - 6:00 PM <br />
//                   Saturday: 10:00 AM - 4:00 PM <br />
//                   Sunday: Closed
//                 </p>
//               </div>
//             </div>

          
//           </div>
//         </div>

//         {/* Contact Image */}
//         <div className="w-full md:w-1/2 transform transition duration-500 hover:scale-105">
//           <img
//             className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
//             src="https://img.freepik.com/premium-photo/man-lab-coat-glasses-stands-front-display-information-including-dna-molecule_874813-271.jpg"
//             alt="Contact us"
//           />
//         </div>
//       </div>

//       {/* Additional Contact Details Section */}
//       <div className="mt-20 text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6">We're Here to Help</h2>
//         <p className="text-gray-600 mb-8">
//           Whether you have questions about our services, need technical support, or want to provide feedback, our team is ready to assist you. Reach out to us anytime!
//         </p>

//         {/* Contact Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
//             <FaPhoneAlt className="text-rose-600 text-4xl mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
//             <p className="text-gray-600">
//               Speak directly with our support team for immediate assistance.
//             </p>
            
//           </div>

//           <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
//             <FaEnvelope className="text-rose-600 text-4xl mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
//             <p className="text-gray-600">
//               Send us an email, and we'll get back to you within 24 hours.
//             </p>
            
//           </div>

//           <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
//             <FaMapMarkerAlt className="text-rose-600 text-4xl mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Us</h3>
//             <p className="text-gray-600">
//               Stop by our office for a face-to-face conversation with our team.
//             </p>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



'use client'

import React, { useEffect, useRef, useState } from 'react'
import {
  FaPhoneAlt, FaEnvelope, FaBuilding, FaMapMarkerAlt,
  FaClock, FaLinkedin, FaTwitter, FaFacebook
} from "react-icons/fa"

// Triggers a one-time reveal when a section scrolls into view
function useReveal() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}

export default function Contact() {
  const [mainRef, mainIn] = useReveal()
  const [helpRef, helpIn] = useReveal()

  return (
    <div className="bg-gradient-to-b from-[#FFFCFB] to-[#FDF6F5] py-20 px-6 md:px-12 lg:px-24">

      <style>{`
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .reveal { opacity: 0; }
        .reveal.in { animation: revealUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards; }
        .reveal.delay-1.in { animation-delay: 0.1s; }
        .reveal.delay-2.in { animation-delay: 0.2s; }
        .reveal.delay-3.in { animation-delay: 0.3s; }
        .reveal.delay-4.in { animation-delay: 0.4s; }

        .premium-card {
          background: linear-gradient(180deg, #FFFFFF 0%, #FCF9F8 100%);
          border: 1px solid #ECE2E1;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1),
                      box-shadow 0.35s ease,
                      border-color 0.35s ease;
        }
        .premium-card:hover {
          transform: translateY(-6px);
          border-color: #E4A6AC;
          box-shadow: 0 20px 40px -12px rgba(190, 30, 60, 0.18);
        }
        .icon-badge {
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), background 0.35s ease;
        }
        .icon-badge svg { transition: color 0.3s ease; }
        .premium-card:hover .icon-badge {
          transform: scale(1.08) rotate(-4deg);
          background: #BE1E3C;
        }
        .premium-card:hover .icon-badge svg {
          color: #FFFFFF;
        }
        .contact-image-frame {
          transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
        }
        .contact-image-frame:hover {
          transform: scale(1.02);
        }
        .social-link {
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), background 0.3s ease, color 0.3s ease;
        }
        .social-link:hover {
          transform: translateY(-3px);
          background: #BE1E3C;
          color: #FFFFFF;
        }
      `}</style>

      {/* Page Heading */}
      <div className="text-center mb-16">
        <p className="text-sm font-semibold text-[#BE1E3C] mb-3">Get in touch</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1B1230] leading-tight">
          Contact <span className="text-[#BE1E3C]">us</span>
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto mt-4 text-base">
          Questions, feedback, or just want to say hello — we&apos;d love to hear from you.
        </p>
      </div>

      <div ref={mainRef} className="flex flex-col md:flex-row items-center gap-14 mb-24">

        {/* Contact Info */}
        <div className={`reveal delay-1 ${mainIn ? 'in' : ''} w-full md:w-1/2 flex flex-col gap-8`}>
          <div className="premium-card flex flex-col gap-7 p-8 rounded-2xl cursor-default">

            {/* Office Details */}
            <div className="flex items-start gap-4">
              <div className="icon-badge w-12 h-12 shrink-0 rounded-xl bg-[#FBEAEC] flex items-center justify-center">
                <FaBuilding className="text-[#BE1E3C] text-xl" />
              </div>
              <div>
                <p className="text-base font-semibold text-[#1B1230]">Our office</p>
                <p className="mt-1 text-gray-500 text-sm leading-relaxed">
                  C3CV+8V8, Mall Road, Faisalabad, Pakistan
                </p>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="flex items-start gap-4">
              <div className="icon-badge w-12 h-12 shrink-0 rounded-xl bg-[#FBEAEC] flex items-center justify-center">
                <FaPhoneAlt className="text-[#BE1E3C] text-xl" />
              </div>
              <div>
                <p className="text-base font-semibold text-[#1B1230]">Get in touch</p>
                <p className="mt-1 text-sm">
                  <a href="tel:+92348567288" className="text-gray-500 hover:text-[#BE1E3C] transition-colors">
                    +92 348 567 288
                  </a>
                </p>
                <p className="text-sm">
                  <a href="mailto:DocAppoint@gmail.com" className="text-gray-500 hover:text-[#BE1E3C] transition-colors">
                    DocAppoint@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Careers */}
            <div className="flex items-start gap-4">
              <div className="icon-badge w-12 h-12 shrink-0 rounded-xl bg-[#FBEAEC] flex items-center justify-center">
                <FaEnvelope className="text-[#BE1E3C] text-xl" />
              </div>
              <div>
                <p className="text-base font-semibold text-[#1B1230]">Careers at DocAppoint</p>
                <p className="mt-1 text-gray-500 text-sm leading-relaxed">Explore job openings and join our team.</p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex items-start gap-4">
              <div className="icon-badge w-12 h-12 shrink-0 rounded-xl bg-[#FBEAEC] flex items-center justify-center">
                <FaClock className="text-[#BE1E3C] text-xl" />
              </div>
              <div>
                <p className="text-base font-semibold text-[#1B1230]">Office hours</p>
                <p className="mt-1 text-gray-500 text-sm leading-relaxed">
                  Monday – Friday: 9:00 AM – 6:00 PM <br />
                  Saturday: 10:00 AM – 4:00 PM <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2 border-t border-[#ECE2E1] mt-1">
              <a href="#" aria-label="LinkedIn" className="social-link w-10 h-10 rounded-full bg-[#FBEAEC] text-[#BE1E3C] flex items-center justify-center">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="Twitter" className="social-link w-10 h-10 rounded-full bg-[#FBEAEC] text-[#BE1E3C] flex items-center justify-center">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Facebook" className="social-link w-10 h-10 rounded-full bg-[#FBEAEC] text-[#BE1E3C] flex items-center justify-center">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Image */}
        <div className={`reveal delay-2 ${mainIn ? 'in' : ''} w-full md:w-1/2 relative`}>
          <div className="contact-image-frame">
            <img
              className="w-full rounded-3xl shadow-2xl"
              src="https://img.freepik.com/premium-photo/man-lab-coat-glasses-stands-front-display-information-including-dna-molecule_874813-271.jpg"
              alt="Contact us"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl px-5 py-4 hidden sm:flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FBEAEC] flex items-center justify-center">
              <FaClock className="text-[#BE1E3C] text-sm" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1B1230] leading-none">Avg. reply time</p>
              <p className="text-xs text-gray-500 mt-1">Under 24 hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* We're Here to Help */}
      <div ref={helpRef} className="text-center">
        <div className={`reveal ${helpIn ? 'in' : ''} mb-12`}>
          <h2 className="font-serif text-3xl font-bold text-[#1B1230] mb-4">
            We&apos;re here to <span className="text-[#BE1E3C]">help</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Whether you have questions about our services, need technical support, or want to share feedback, our team is ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: FaPhoneAlt, title: 'Call us', desc: 'Speak directly with our support team for immediate assistance.' },
            { icon: FaEnvelope, title: 'Email us', desc: "Send us an email, and we'll get back to you within 24 hours." },
            { icon: FaMapMarkerAlt, title: 'Visit us', desc: 'Stop by our office for a face-to-face conversation with our team.' },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`reveal delay-${i + 1} ${helpIn ? 'in' : ''} premium-card p-8 rounded-2xl cursor-pointer flex flex-col items-center text-center`}
            >
              <div className="icon-badge w-14 h-14 rounded-xl bg-[#FBEAEC] flex items-center justify-center mb-5">
                <item.icon className="text-[#BE1E3C] text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-[#1B1230] mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}