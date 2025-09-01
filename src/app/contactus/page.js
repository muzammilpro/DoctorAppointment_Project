import React from 'react';
import {
  FaPhoneAlt, FaEnvelope, FaBuilding, FaMapMarkerAlt,
  FaClock, FaLinkedin, FaTwitter, FaFacebook
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="text-center text-4xl font-bold text-gray-800 mb-12">
        CONTACT <span className="text-rose-600">US</span>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Contact Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-between gap-8">
          <div className="flex flex-col gap-6 bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">

            {/* Office Details */}
            <div className="flex items-start gap-4">
              <FaBuilding className="text-rose-600 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-rose-600">Our OFFICE</p>
                <p className="mt-1 text-gray-600">
                  C3CV+8V8 <br /> Mall Road, Faisalabad, Pakistan
                </p>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-rose-600 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-rose-600">Get in Touch</p>
                <p className="mt-1">
                  <a href="tel:+92348567288" className="text-blue-600 hover:underline">
                    +92348567288
                  </a>
                </p>
                <p>
                  <a href="mailto:DocAppointr@gmail.com" className="text-blue-600 hover:underline">
                    DocAppoint@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Careers */}
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-rose-600 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-rose-600">Careers at DocAppoint</p>
                <p className="mt-1 text-gray-600">Explore job openings and join our team.</p>
             
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex items-start gap-4">
              <FaClock className="text-rose-600 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-rose-600">Office Hours</p>
                <p className="mt-1 text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM <br />
                  Saturday: 10:00 AM - 4:00 PM <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

          
          </div>
        </div>

        {/* Contact Image */}
        <div className="w-full md:w-1/2 transform transition duration-500 hover:scale-105">
          <img
            className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
            src="https://img.freepik.com/premium-photo/man-lab-coat-glasses-stands-front-display-information-including-dna-molecule_874813-271.jpg"
            alt="Contact us"
          />
        </div>
      </div>

      {/* Additional Contact Details Section */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">We're Here to Help</h2>
        <p className="text-gray-600 mb-8">
          Whether you have questions about our services, need technical support, or want to provide feedback, our team is ready to assist you. Reach out to us anytime!
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
            <FaPhoneAlt className="text-rose-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-600">
              Speak directly with our support team for immediate assistance.
            </p>
            
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
            <FaEnvelope className="text-rose-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
            <p className="text-gray-600">
              Send us an email, and we'll get back to you within 24 hours.
            </p>
            
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
            <FaMapMarkerAlt className="text-rose-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Us</h3>
            <p className="text-gray-600">
              Stop by our office for a face-to-face conversation with our team.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}
