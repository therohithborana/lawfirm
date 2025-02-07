import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 font-['Playfair_Display']">Vikas Law Firm</h3>
            <p className="text-gray-300 font-['Open_Sans']">
              Providing exceptional legal services with integrity and professionalism.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 font-['Playfair_Display']">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-red-600 transition duration-200 font-['Open_Sans']">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray极300 hover:text-red-600 transition duration-200 font-['Open_Sans']">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-red-600 transition duration-200 font-['Open_Sans']">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-red-600 transition duration-200 font-['Open_Sans']">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 font-['Playfair_Display']">Contact Info</h4>
            <ul className="space-y-2 text-gray-300 font-['Open_Sans']">
              <li>123 Legal Street, Suite 100</li>
              <li>New York, NY 10001</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: contact@vikaslawfirm.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 font-['Open_Sans']">
            &copy; {new Date().getFullYear()} Vikas Law Firm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 