// import React from 'react'
// import { FaCheckCircle, FaCalendarCheck, FaHeart, FaUserMd, FaStethoscope, FaClipboardList, FaMobileAlt, FaShieldAlt, FaHandsHelping } from 'react-icons/fa';


// export default function page() {
//     return (
//         <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">

//             {/* Heading */}
//             <div className="text-center text-4xl font-bold text-gray-800 mb-12">
//                 ABOUT <span className="text-rose-600">US</span>
//             </div>

//             {/* About Us Section */}
//             <section className="my-10 flex flex-col md:flex-row-reverse gap-12 items-center">
//                 <div className="w-full md:w-1/2 transform transition duration-500 hover:scale-105">
//                     <img className="w-full rounded-lg shadow-lg" src="https://media.licdn.com/dms/image/v2/D4D12AQEPA_WCQE4H2Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1666106738283?e=2147483647&v=beta&t=wxDKWBeHCX0ioyET0nEEHS7oyxGFlIE4OlyLBe1FjLA" alt="DocAppoint healthcare" />
//                 </div>

//                 <div className="w-full md:w-1/2 text-sm text-gray-600 flex flex-col gap-6">
//                     <p>
//                         Welcome to DocAppoint, your trusted partner in managing your healthcare needs conveniently and efficiently. We understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
//                     </p>
//                     <p>
//                         DocAppoint is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, DocAppoint is here to support you every step of the way.
//                     </p>
//                     <b className="text-gray-800 text-lg">Our Vision</b>
//                     <p>
//                         Our vision at DocAppoint is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
//                     </p>
//                     <b className="text-gray-800 text-lg">Our Mission</b>
//                     <p>
//                         Our mission is to empower individuals by providing them with the tools and resources they need to take control of their health. We believe that everyone deserves access to quality healthcare, and we are dedicated to making that a reality.
//                     </p>
//                 </div>
//             </section>

//             {/* Why Choose Us Section */}
//             <section className="text-xl my-6 text-center">
//                 <p>Why <span className="text-rose-600 font-semibold">Choose Us</span></p>
//             </section>

//             {/* Why Choose Us Options */}
//             <section className="flex flex-col md:flex-row gap-6 justify-center mb-20">
//                 <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
//                     <FaCheckCircle className="text-rose-600 text-3xl mb-4" />
//                     <b>Efficiency:</b>
//                     <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
//                 </div>
//                 <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
//                     <FaCalendarCheck className="text-rose-600 text-3xl mb-4" />
//                     <b>Convenience:</b>
//                     <p>Access to a network of trusted healthcare professionals in your area.</p>
//                 </div>
//                 <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
//                     <FaHeart className="text-rose-600 text-3xl mb-4" />
//                     <b>Personalization:</b>
//                     <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
//                 </div>
//             </section>

//             {/* Additional Features Section */}
//             <section className="text-xl my-6 text-center">
//                 <p>Our <span className="text-rose-600 font-semibold">Features</span></p>
//             </section>

//             {/* Additional Features Options */}
//             <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
//                 <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
//                     <FaUserMd className="text-rose-600 text-3xl mb-4" />
//                     <b>Expert Doctors:</b>
//                     <p>Connect with highly qualified and experienced healthcare professionals.</p>
//                 </div>
//                 <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
//                     <FaStethoscope className="text-rose-600 text-3xl mb-4" />
//                     <b>Comprehensive Care:</b>
//                     <p>Access a wide range of medical services tailored to your needs.</p>
//                 </div>
//                 <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
//                     <FaClipboardList className="text-rose-600 text-3xl mb-4" />
//                     <b>Health Records:</b>
//                     <p>Securely store and manage your health records in one place.</p>
//                 </div>
//                 <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
//                     <FaMobileAlt className="text-rose-600 text-3xl mb-4" />
//                     <b>Mobile Access:</b>
//                     <p>Manage your healthcare on the go with our mobile-friendly platform.</p>
//                 </div>
//                 <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
//                     <FaShieldAlt className="text-rose-600 text-3xl mb-4" />
//                     <b>Data Security:</b>
//                     <p>Your data is safe with our state-of-the-art security measures.</p>
//                 </div>
//                 <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
//                     <FaHandsHelping className="text-rose-600 text-3xl mb-4" />
//                     <b>Support:</b>
//                     <p>Our dedicated support team is here to assist you 24/7.</p>
//                 </div>
//             </section>

//             {/* Testimonials Section */}
//             <section className="text-xl my-6 text-center">
//                 <p>What Our <span className="text-rose-600 font-semibold">Users Say</span></p>
//             </section>

//             {/* Testimonials */}
//             <section className="flex flex-col md:flex-row gap-6 justify-center mb-20">
//                 <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
//                     <p>"DocAppoint has made managing my health so much easier. I can book appointments and access my records anytime, anywhere!"</p>
//                     <b>- Sarah L.</b>
//                 </div>
//                 <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
//                     <p>"The personalized reminders have been a game-changer for me. I never miss an appointment anymore!"</p>
//                     <b>- John D.</b>
//                 </div>
//                 <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
//                     <p>"I love how easy it is to find and connect with top doctors in my area. Highly recommend DocAppoint!"</p>
//                     <b>- Emily R.</b>
//                 </div>
//             </section>
//         </div>
//     )
// }


'use client'

import React, { useEffect, useRef, useState } from 'react'
import {
  FaCheckCircle, FaCalendarCheck, FaHeart, FaUserMd, FaStethoscope,
  FaClipboardList, FaMobileAlt, FaShieldAlt, FaHandsHelping, FaQuoteLeft, FaStar
} from 'react-icons/fa'

// Triggers a one-time reveal when the section scrolls into view
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

export default function Page() {
  const [aboutRef, aboutIn] = useReveal()
  const [whyRef, whyIn] = useReveal()
  const [featuresRef, featuresIn] = useReveal()
  const [testimonialsRef, testimonialsIn] = useReveal()

  return (
    <div className="bg-gradient-to-b from-[#FFFCFB] to-[#FDF6F5] px-6 md:px-12 lg:px-24 py-20">

      <style>{`
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .reveal {
          opacity: 0;
        }
        .reveal.in {
          animation: revealUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        .reveal.delay-1.in { animation-delay: 0.1s; }
        .reveal.delay-2.in { animation-delay: 0.2s; }
        .reveal.delay-3.in { animation-delay: 0.3s; }
        .reveal.delay-4.in { animation-delay: 0.4s; }
        .reveal.delay-5.in { animation-delay: 0.5s; }
        .reveal.delay-6.in { animation-delay: 0.6s; }

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
        .premium-card:hover .icon-badge {
          transform: scale(1.08) rotate(-4deg);
          background: #BE1E3C;
        }
        .premium-card:hover .icon-badge svg {
          color: #FFFFFF;
        }
        .about-image-frame {
          transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
        }
        .about-image-frame:hover {
          transform: scale(1.02);
        }
      `}</style>

      {/* Page Heading */}
      <div className="text-center mb-20">
        <p className="text-sm font-semibold text-[#BE1E3C] mb-3">Who we are</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1B1230] leading-tight">
          About <span className="text-[#BE1E3C]">us</span>
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto mt-4 text-base">
          A healthcare platform built to make finding and booking care feel simple again.
        </p>
      </div>

      {/* About Us Section */}
      <section
        ref={aboutRef}
        className="my-10 flex flex-col md:flex-row-reverse gap-14 items-center mb-24"
      >
        <div className={`reveal delay-1 ${aboutIn ? 'in' : ''} w-full md:w-1/2 relative`}>
          <div className="about-image-frame">
            <img
              className="w-full rounded-3xl shadow-2xl"
              src="https://media.licdn.com/dms/image/v2/D4D12AQEPA_WCQE4H2Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1666106738283?e=2147483647&v=beta&t=wxDKWBeHCX0ioyET0nEEHS7oyxGFlIE4OlyLBe1FjLA"
              alt="DocAppoint healthcare"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-5 py-4 hidden sm:flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FBEAEC] flex items-center justify-center text-[#BE1E3C] font-semibold text-sm">5+</div>
            <div>
              <p className="text-sm font-semibold text-[#1B1230] leading-none">Years of trust</p>
              <p className="text-xs text-gray-500 mt-1">Serving patients since 2020</p>
            </div>
          </div>
        </div>

        <div className={`reveal delay-2 ${aboutIn ? 'in' : ''} w-full md:w-1/2 text-sm text-gray-600 flex flex-col gap-6`}>
          <p className="leading-relaxed">
            Welcome to DocAppoint, your trusted partner in managing your healthcare needs conveniently and efficiently. We understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p className="leading-relaxed">
            DocAppoint is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service.
          </p>

          <div className="flex gap-4 items-start pt-2">
            <div className="w-11 h-11 shrink-0 rounded-xl bg-[#FBEAEC] flex items-center justify-center">
              <FaHeart className="text-[#BE1E3C] text-lg" />
            </div>
            <div>
              <b className="text-[#1B1230] text-base block mb-1">Our vision</b>
              <p className="leading-relaxed">
                To create a seamless healthcare experience for every user, bridging the gap between patients and providers.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-11 h-11 shrink-0 rounded-xl bg-[#FBEAEC] flex items-center justify-center">
              <FaCheckCircle className="text-[#BE1E3C] text-lg" />
            </div>
            <div>
              <b className="text-[#1B1230] text-base block mb-1">Our mission</b>
              <p className="leading-relaxed">
                To empower individuals with the tools they need to take control of their health, because everyone deserves access to quality care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyRef} className="mb-24">
        <div className={`reveal ${whyIn ? 'in' : ''} text-center mb-12`}>
          <h2 className="font-serif text-3xl font-bold text-[#1B1230]">
            Why <span className="text-[#BE1E3C]">choose us</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {[
            { icon: FaCheckCircle, title: 'Efficiency', desc: 'Streamlined appointment scheduling that fits into your busy lifestyle.' },
            { icon: FaCalendarCheck, title: 'Convenience', desc: 'Access to a network of trusted healthcare professionals in your area.' },
            { icon: FaHeart, title: 'Personalization', desc: 'Tailored recommendations and reminders to help you stay on top of your health.' },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`reveal delay-${i + 1} ${whyIn ? 'in' : ''} premium-card px-10 py-14 flex flex-col gap-5 text-sm cursor-pointer rounded-2xl w-full md:w-1/3`}
            >
              <div className="icon-badge w-14 h-14 rounded-xl bg-[#FBEAEC] flex items-center justify-center">
                <item.icon className="text-[#BE1E3C] text-2xl transition-colors duration-300" />
              </div>
              <b className="text-[#1B1230] text-base">{item.title}</b>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className="mb-24">
        <div className={`reveal ${featuresIn ? 'in' : ''} text-center mb-12`}>
          <h2 className="font-serif text-3xl font-bold text-[#1B1230]">
            Our <span className="text-[#BE1E3C]">features</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: FaUserMd, title: 'Expert doctors', desc: 'Connect with highly qualified and experienced healthcare professionals.' },
            { icon: FaStethoscope, title: 'Comprehensive care', desc: 'Access a wide range of medical services tailored to your needs.' },
            { icon: FaClipboardList, title: 'Health records', desc: 'Securely store and manage your health records in one place.' },
            { icon: FaMobileAlt, title: 'Mobile access', desc: 'Manage your healthcare on the go with our mobile-friendly platform.' },
            { icon: FaShieldAlt, title: 'Data security', desc: 'Your data is safe with our state-of-the-art security measures.' },
            { icon: FaHandsHelping, title: 'Support', desc: 'Our dedicated support team is here to assist you 24/7.' },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`reveal delay-${(i % 6) + 1} ${featuresIn ? 'in' : ''} premium-card px-10 py-14 flex flex-col gap-5 text-sm cursor-pointer rounded-2xl`}
            >
              <div className="icon-badge w-14 h-14 rounded-xl bg-[#FBEAEC] flex items-center justify-center">
                <item.icon className="text-[#BE1E3C] text-2xl transition-colors duration-300" />
              </div>
              <b className="text-[#1B1230] text-base">{item.title}</b>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="mb-10">
        <div className={`reveal ${testimonialsIn ? 'in' : ''} text-center mb-12`}>
          <h2 className="font-serif text-3xl font-bold text-[#1B1230]">
            What our <span className="text-[#BE1E3C]">users say</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {[
            { quote: 'DocAppoint has made managing my health so much easier. I can book appointments and access my records anytime, anywhere!', name: 'Sarah L.' },
            { quote: 'The personalized reminders have been a game-changer for me. I never miss an appointment anymore!', name: 'John D.' },
            { quote: 'I love how easy it is to find and connect with top doctors in my area. Highly recommend DocAppoint!', name: 'Emily R.' },
          ].map((item, i) => (
            <div
              key={item.name}
              className={`reveal delay-${i + 1} ${testimonialsIn ? 'in' : ''} premium-card px-10 py-12 flex flex-col gap-5 text-sm cursor-pointer rounded-2xl w-full md:w-1/3`}
            >
              <FaQuoteLeft className="text-[#BE1E3C] text-xl opacity-70" />
              <p className="text-gray-600 leading-relaxed">{item.quote}</p>
              <div className="flex items-center justify-between mt-2 pt-4 border-t border-[#ECE2E1]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#FBEAEC] flex items-center justify-center text-[#BE1E3C] text-xs font-semibold">
                    {item.name.charAt(0)}
                  </div>
                  <b className="text-[#1B1230]">{item.name}</b>
                </div>
                <div className="flex gap-0.5 text-[#BE1E3C] text-xs">
                  {Array.from({ length: 5 }).map((_, s) => <FaStar key={s} />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}