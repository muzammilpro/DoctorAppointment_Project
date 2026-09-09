import DoctorsSection from "@/components/DoctorsSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { FaCheckCircle, FaCalendarCheck, FaHeart, FaUserMd, FaStethoscope, FaClipboardList, FaMobileAlt, FaShieldAlt, FaHandsHelping } from 'react-icons/fa';


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DoctorsSection isHome={true} />


      {/* CTA Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-4 md:px-16 py-14 rounded-xl mt-10 overflow-hidden w-full">
        {/* Left Content */}
        <div className="flex-1 w-full text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-pink-600 mb-4 leading-tight">
            Book an <br className="hidden md:block" /> Appointment
          </h2>

          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <span className="text-pink-600 text-xl">👨‍⚕️</span>
            <p className="text-lg font-medium text-gray-900 whitespace-nowrap">
              Consult with 100+ Trusted Doctors
            </p>
          </div>

          <p className="text-gray-600 mb-6 max-w-xl mx-auto md:mx-0">
            Schedule an appointment in just a few clicks and consult with doctors from various specialties.
          </p>


        </div>

        {/* Right Image */}
        <div className="flex-1 w-full max-w-md md:max-w-full">
          <Image
            src="/doctorholding.jpg"
            alt="Doctor holding icons"
            width={600}
            height={400}
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="text-xl my-6 text-center">
        <p>Our <span className="text-rose-600 font-semibold">Features</span></p>
      </section>

      {/* Additional Features Options */}
      {/* <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
          <FaUserMd className="text-rose-600 text-3xl mb-4" />
          <b>Expert Doctors:</b>
          <p>Connect with highly qualified and experienced healthcare professionals.</p>
        </div>
        <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
          <FaStethoscope className="text-rose-600 text-3xl mb-4" />
          <b>Comprehensive Care:</b>
          <p>Access a wide range of medical services tailored to your needs.</p>
        </div>
        <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
          <FaClipboardList className="text-rose-600 text-3xl mb-4" />
          <b>Health Records:</b>
          <p>Securely store and manage your health records in one place.</p>
        </div>
        <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
          <FaMobileAlt className="text-rose-600 text-3xl mb-4" />
          <b>Mobile Access:</b>
          <p>Manage your healthcare on the go with our mobile-friendly platform.</p>
        </div>
        <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
          <FaShieldAlt className="text-rose-600 text-3xl mb-4" />
          <b>Data Security:</b>
          <p>Your data is safe with our state-of-the-art security measures.</p>
        </div>
        <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
          <FaHandsHelping className="text-rose-600 text-3xl mb-4" />
          <b>Support:</b>
          <p>Our dedicated support team is here to assist you 24/7.</p>
        </div>
      </section> */}
      <section className="relative mb-20 py-4">
        <style>{`
    @keyframes cardReveal {
      from { opacity: 0; transform: translateY(18px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .feature-card {
      opacity: 0;
      animation: cardReveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .feature-card:nth-child(1) { animation-delay: 0.05s; }
    .feature-card:nth-child(2) { animation-delay: 0.15s; }
    .feature-card:nth-child(3) { animation-delay: 0.25s; }
    .feature-card:nth-child(4) { animation-delay: 0.35s; }
    .feature-card:nth-child(5) { animation-delay: 0.45s; }
    .feature-card:nth-child(6) { animation-delay: 0.55s; }

    .feature-card {
      background: linear-gradient(180deg, #FFFFFF 0%, #FCF9F8 100%);
      border: 1px solid #ECE2E1;
      transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                  box-shadow 0.35s ease,
                  border-color 0.35s ease;
    }
    .feature-card:hover {
      transform: translateY(-6px);
      border-color: #E4A6AC;
      box-shadow: 0 20px 40px -12px rgba(190, 30, 60, 0.18);
    }
    .feature-icon-badge {
      transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                  background 0.35s ease;
    }
    .feature-card:hover .feature-icon-badge {
      transform: scale(1.08) rotate(-4deg);
      background: #BE1E3C;
    }
    .feature-card:hover .feature-icon-badge svg {
      color: #FFFFFF;
    }
  `}</style>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="feature-card px-10 py-14 flex flex-col gap-5 rounded-2xl">
            <div className="feature-icon-badge w-14 h-14 rounded-xl bg-[#FBEAEC] flex items-center justify-center">
              <FaUserMd className="text-[#BE1E3C] text-2xl transition-colors duration-300" />
            </div>
            <b className="text-[#1B1230] text-base">Expert doctors</b>
            <p className="text-sm text-gray-500 leading-relaxed">Connect with highly qualified and experienced healthcare professionals.</p>
          </div>

          <div className="feature-card px-10 py-14 flex flex-col gap-5 rounded-2xl">
            <div className="feature-icon-badge w-14 h-14 rounded-xl bg-[#FBEAEC] flex items-center justify-center">
              <FaStethoscope className="text-[#BE1E3C] text-2xl transition-colors duration-300" />
            </div>
            <b className="text-[#1B1230] text-base">Comprehensive care</b>
            <p className="text-sm text-gray-500 leading-relaxed">Access a wide range of medical services tailored to your needs.</p>
          </div>

          <div className="feature-card px-10 py-14 flex flex-col gap-5 rounded-2xl">
            <div className="feature-icon-badge w-14 h-14 rounded-xl bg-[#FBEAEC] flex items-center justify-center">
              <FaClipboardList className="text-[#BE1E3C] text-2xl transition-colors duration-300" />
            </div>
            <b className="text-[#1B1230] text-base">Health records</b>
            <p className="text-sm text-gray-500 leading-relaxed">Securely store and manage your health records in one place.</p>
          </div>

          <div className="feature-card px-10 py-14 flex flex-col gap-5 rounded-2xl">
            <div className="feature-icon-badge w-14 h-14 rounded-xl bg-[#FBEAEC] flex items-center justify-center">
              <FaMobileAlt className="text-[#BE1E3C] text-2xl transition-colors duration-300" />
            </div>
            <b className="text-[#1B1230] text-base">Mobile access</b>
            <p className="text-sm text-gray-500 leading-relaxed">Manage your healthcare on the go with our mobile-friendly platform.</p>
          </div>

          <div className="feature-card px-10 py-14 flex flex-col gap-5 rounded-2xl">
            <div className="feature-icon-badge w-14 h-14 rounded-xl bg-[#FBEAEC] flex items-center justify-center">
              <FaShieldAlt className="text-[#BE1E3C] text-2xl transition-colors duration-300" />
            </div>
            <b className="text-[#1B1230] text-base">Data security</b>
            <p className="text-sm text-gray-500 leading-relaxed">Your data is safe with our state-of-the-art security measures.</p>
          </div>

          <div className="feature-card px-10 py-14 flex flex-col gap-5 rounded-2xl">
            <div className="feature-icon-badge w-14 h-14 rounded-xl bg-[#FBEAEC] flex items-center justify-center">
              <FaHandsHelping className="text-[#BE1E3C] text-2xl transition-colors duration-300" />
            </div>
            <b className="text-[#1B1230] text-base">Support</b>
            <p className="text-sm text-gray-500 leading-relaxed">Our dedicated support team is here to assist you 24/7.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
