// // app/services/page.jsx
// "use client";
// import React from "react";
// import {
//   BeakerIcon,
//   HeartIcon,
//   ShieldExclamationIcon,
//   PhoneIcon,
//   VideoCameraIcon,
//   ShoppingCartIcon,
// } from "@heroicons/react/24/outline";

// // Feature Data
// const features = [
//   {
//     id: 1,
//     title: "Easy Appointment Booking",
//     description:
//       "Quickly schedule appointments with our user-friendly interface and secure slots hassle-free.",
//     image:
//       "https://img.freepik.com/free-photo/medical-banner-with-doctor-patient_23-2149611238.jpg",
//   },
//   {
//     id: 2,
//     title: "Automated Reminders",
//     description:
//       "Stay on track with automated SMS and email reminders for upcoming appointments.",
//     image: "https://img.lovepik.com/photo/50076/7983.jpg_wh860.jpg",
//   },
//   {
//     id: 3,
//     title: "Doctor Profiles",
//     description:
//       "View qualifications, specialties, and patient reviews to choose the right doctor.",
//     image:
//       "https://thumbs.dreamstime.com/b/health-care-management-business-concept-combines-expertise-doctors-medical-services-insurance-to-provide-334770296.jpg",
//   },
//   {
//     id: 4,
//     title: "Teleconsultation Services",
//     description:
//       "Connect with doctors online and receive consultations from the comfort of your home.",
//     image:
//       "https://st4.depositphotos.com/1907633/20440/i/1600/depositphotos_204407628-stock-photo-health-care-medical-services-concept.jpg",
//   },
// ];

// // Feature Card Component
// const FeatureCard = ({ feature, index }) => (
//   <div
//     className="flex items-center gap-6 bg-white shadow-lg rounded-lg p-6 transition transform hover:-translate-y-2 hover:bg-pink-100"
//     style={{ animationDelay: `${index * 0.2}s` }}
//   >
//     <img
//       src={feature.image}
//       alt={feature.title}
//       className="rounded-full w-20 h-20 object-cover"
//     />
//     <div>
//       <h2 className="text-lg font-semibold text-pink-500">
//         Feature 0{feature.id}
//       </h2>
//       <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
//       <p className="text-gray-600">{feature.description}</p>
//     </div>
//   </div>
// );

// // Features Section
// const FeaturesSection = () => (
//   <div className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
//     <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
//       Why Choose Us?
//     </h1>
//     <div className="grid gap-10 md:grid-cols-2">
//       {features.map((feature, index) => (
//         <FeatureCard key={feature.id} feature={feature} index={index} />
//       ))}
//     </div>
//   </div>
// );

// // Service Card Component
// const ServiceCard = ({ Icon, title, description }) => (
//   <div className="p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:bg-rose-100">
//     <div className="flex items-center justify-center mb-4">
//       <Icon className="w-16 h-16 text-pink-500 transition transform hover:text-pink-600" />
//     </div>
//     <h3 className="text-2xl font-semibold mb-2 text-center">{title}</h3>
//     <p className="text-gray-600 text-center">{description}</p>
//   </div>
// );

// // Services List
// const ServiceList = () => {
//   const services = [
//     {
//       Icon: BeakerIcon,
//       title: "General Check-Up",
//       description: "Regular health check-ups for monitoring your health.",
//     },
//     {
//       Icon: HeartIcon,
//       title: "Specialist Consultations",
//       description: "Access specialists across various fields.",
//     },
//     {
//       Icon: ShieldExclamationIcon,
//       title: "Diagnostics",
//       description: "Advanced diagnostic tools for accurate detection.",
//     },
//     {
//       Icon: PhoneIcon,
//       title: "Emergency Services",
//       description: "Immediate attention for critical emergencies.",
//     },
//     {
//       Icon: VideoCameraIcon,
//       title: "Telemedicine",
//       description: "Consult with doctors online from home.",
//     },
//     {
//       Icon: ShoppingCartIcon,
//       title: "Pharmacy",
//       description: "On-site and online pharmacy services.",
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-10 lg:px-20">
//       {services.map((service, index) => (
//         <ServiceCard
//           key={index}
//           Icon={service.Icon}
//           title={service.title}
//           description={service.description}
//         />
//       ))}
//     </div>
//   );
// };

// // Main Page Component
// export default function Page() {
//   return (
//     <div className="bg-white text-black">
//       {/* Header */}
//       <div className="text-center py-8">
//         <h1 className="text-4xl font-bold mb-4 text-pink-600">Our Services</h1>
//         <p className="text-lg text-gray-600">
//           We offer a range of services to ensure your health and well-being.
//         </p>
//       </div>

//       {/* Features Section */}
//       <FeaturesSection />

//       {/* Services Grid */}
//       <ServiceList />
//     </div>
//   );
// }



// app/services/page.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  BeakerIcon,
  HeartIcon,
  ShieldExclamationIcon,
  PhoneIcon,
  VideoCameraIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

// Triggers a one-time reveal when a section scrolls into view
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
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

// Feature Data
const features = [
  {
    id: 1,
    title: "Easy Appointment Booking",
    description:
      "Quickly schedule appointments with our user-friendly interface and secure slots hassle-free.",
    image:
      "https://img.freepik.com/free-photo/medical-banner-with-doctor-patient_23-2149611238.jpg",
  },
  {
    id: 2,
    title: "Automated Reminders",
    description:
      "Stay on track with automated SMS and email reminders for upcoming appointments.",
    image: "https://img.lovepik.com/photo/50076/7983.jpg_wh860.jpg",
  },
  {
    id: 3,
    title: "Doctor Profiles",
    description:
      "View qualifications, specialties, and patient reviews to choose the right doctor.",
    image:
      "https://thumbs.dreamstime.com/b/health-care-management-business-concept-combines-expertise-doctors-medical-services-insurance-to-provide-334770296.jpg",
  },
  {
    id: 4,
    title: "Teleconsultation Services",
    description:
      "Connect with doctors online and receive consultations from the comfort of your home.",
    image:
      "https://st4.depositphotos.com/1907633/20440/i/1600/depositphotos_204407628-stock-photo-health-care-medical-services-concept.jpg",
  },
];

const services = [
  { Icon: BeakerIcon, title: "General check-up", description: "Regular health check-ups for monitoring your health." },
  { Icon: HeartIcon, title: "Specialist consultations", description: "Access specialists across various fields." },
  { Icon: ShieldExclamationIcon, title: "Diagnostics", description: "Advanced diagnostic tools for accurate detection." },
  { Icon: PhoneIcon, title: "Emergency services", description: "Immediate attention for critical emergencies." },
  { Icon: VideoCameraIcon, title: "Telemedicine", description: "Consult with doctors online from home." },
  { Icon: ShoppingCartIcon, title: "Pharmacy", description: "On-site and online pharmacy services." },
];

// Feature Card
const FeatureCard = ({ feature, index, inView }) => (
  <div
    className={`reveal delay-${(index % 6) + 1} ${inView ? "in" : ""} premium-card flex items-center gap-6 rounded-2xl p-6`}
  >
    <div className="relative shrink-0">
      <img
        src={feature.image}
        alt={feature.title}
        className="rounded-full w-20 h-20 object-cover ring-4 ring-[#FBEAEC]"
      />
      <span className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#BE1E3C] text-white text-xs font-semibold flex items-center justify-center">
        {String(feature.id).padStart(2, "0")}
      </span>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-[#1B1230] mb-1">{feature.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
    </div>
  </div>
);

// Service Card
const ServiceCard = ({ Icon, title, description, index, inView }) => (
  <div className={`reveal delay-${(index % 6) + 1} ${inView ? "in" : ""} premium-card p-8 rounded-2xl flex flex-col items-center text-center cursor-pointer`}>
    <div className="icon-badge w-16 h-16 rounded-xl bg-[#FBEAEC] flex items-center justify-center mb-5">
      <Icon className="w-8 h-8 text-[#BE1E3C]" />
    </div>
    <h3 className="text-lg font-semibold text-[#1B1230] mb-2">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
  </div>
);

export default function Page() {
  const [featuresRef, featuresIn] = useReveal();
  const [servicesRef, servicesIn] = useReveal();

  return (
    <div className="bg-gradient-to-b from-[#FFFCFB] to-[#FDF6F5]">

      <style>{`
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .reveal { opacity: 0; }
        .reveal.in { animation: revealUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards; }
        .reveal.delay-1.in { animation-delay: 0.05s; }
        .reveal.delay-2.in { animation-delay: 0.15s; }
        .reveal.delay-3.in { animation-delay: 0.25s; }
        .reveal.delay-4.in { animation-delay: 0.35s; }
        .reveal.delay-5.in { animation-delay: 0.45s; }
        .reveal.delay-6.in { animation-delay: 0.55s; }

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
      `}</style>

      {/* Header */}
      <div className="text-center pt-20 pb-16 px-6">
        <p className="text-sm font-semibold text-[#BE1E3C] mb-3">What we offer</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1B1230] leading-tight mb-4">
          Our <span className="text-[#BE1E3C]">services</span>
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto text-base">
          A range of services designed around your health and well-being, all in one place.
        </p>
      </div>

      {/* Features Section */}
      <section ref={featuresRef} className="py-8 px-6 md:px-12 lg:px-24 mb-8">
        <h2 className="font-serif text-3xl font-bold text-center text-[#1B1230] mb-12">
          Why <span className="text-[#BE1E3C]">choose us</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} inView={featuresIn} />
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="px-6 sm:px-10 lg:px-24 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              Icon={service.Icon}
              title={service.title}
              description={service.description}
              index={index}
              inView={servicesIn}
            />
          ))}
        </div>
      </section>
    </div>
  );
}