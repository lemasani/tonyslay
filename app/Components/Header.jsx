'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-green-600 text-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold">
          <Link href="/">Tony & Slay</Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#services" className="hover:text-yellow-500 transition-colors duration-200">
            Services
          </Link>
          <Link href="#fleet" className="hover:text-yellow-500 transition-colors duration-200">
            Fleet
          </Link>
          <Link href="#testimonials" className="hover:text-yellow-500 transition-colors duration-200">
            Testimonials
          </Link>
          <Link href="#contact" className="hover:text-yellow-500 transition-colors duration-200">
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-green-600 text-white shadow-md">
          <Link href="#services" className="block px-6 py-2 border-b border-green-500 hover:bg-green-700 transition-colors duration-200">
            Services
          </Link>
          <Link href="#fleet" className="block px-6 py-2 border-b border-green-500 hover:bg-green-700 transition-colors duration-200">
            Fleet
          </Link>
          <Link href="#testimonials" className="block px-6 py-2 border-b border-green-500 hover:bg-green-700 transition-colors duration-200">
            Testimonials
          </Link>
          <Link href="#contact" className="block px-6 py-2 hover:bg-green-700 transition-colors duration-200">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
