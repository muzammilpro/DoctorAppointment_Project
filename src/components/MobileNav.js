'use client';

import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden px-4 pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-2xl text-gray-700 focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? '✕' : '≡'}
      </button>

      {isOpen && (
        <div className="mt-4 bg-white shadow-md flex flex-col gap-4 p-4 text-gray-700 font-medium z-50">
          <Link href="/doctors" className="hover:text-indigo-600 transition" onClick={() => setIsOpen(false)}>
            Doctors
          </Link>
          <Link href="/aboutus" className="hover:text-indigo-600 transition" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link href="/contactus" className="hover:text-indigo-600 transition" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
          <Link href="/service" className="hover:text-indigo-600 transition" onClick={() => setIsOpen(false)}>
            Services
          </Link>
        </div>
      )}
    </div>
  );
}
