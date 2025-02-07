import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-neutral-900 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-white font-['Playfair_Display']">
              Vikas Law Firm
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium font-['Open_Sans'] transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium font-['Open_Sans'] transition-colors duration-200">
                About
              </a>
              <a href="#services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium font-['Open_Sans'] transition-colors duration-200">
                Services
              </a>
              <a href="#team" className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium font-['Open_Sans'] transition-colors duration-200">
                Our Team
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium font-['Open_Sans'] transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-neutral-700 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  className={isOpen ? 'hidden' : 'block'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={isOpen ? 'block' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-neutral-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#home" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium font-['Open_Sans'] transition-colors duration-200">
            Home
          </a>
          <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium font-['Open_Sans'] transition-colors duration-200">
            About
          </a>
          <a href="#services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium font-['Open_Sans'] transition-colors duration-200">
            Services
          </a>
          <a href="#team" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium font-['Open_Sans'] transition-colors duration-200">
            Our Team
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium font-['Open_Sans'] transition-colors duration-200">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
