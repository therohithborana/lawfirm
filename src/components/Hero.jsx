import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="bg-neutral-900 flex items-center relative overflow-hidden pt-20 pb-32 md:min-h-[70vh]">
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 to-neutral-900/70"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <div className="text-center lg:text-left lg:w-2/3">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-['Playfair_Display']"
          >
            Vikas Law<br className="hidden md:block"/>
            <span className="text-red-600 text-3xl md:text-4xl lg:text-5xl">Excellence in Legal Representation</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-8 font-['Open_Sans']"
          >
            Dedicated to providing exceptional legal services with integrity, 
            professionalism, and a commitment to achieving the best possible outcomes for our clients.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a href="#contact" className="bg-red-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-md font-semibold hover:bg-red-700 transition duration-300 text-base md:text-lg">
              Schedule a Consultation
            </a>
            <a href="#about" className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-md font-semibold hover:bg-white hover:text-neutral-900 transition duration-300 text-base md:text-lg">
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 