import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const About = () => {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial="hidden"
            animate={controls}
            variants={variants}
            className="text-4xl font-bold text-neutral-900 mb-4 font-['Playfair_Display']"
          >
            About MyLawFirm
          </motion.h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={leftVariants}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-neutral-800 font-['Playfair_Display']">
              A Legacy of Legal Excellence
            </h3>
            <p className="text-neutral-600 leading-relaxed font-['Open_Sans']">
              Founded with a vision to provide exceptional legal services, MyLawFirm has established itself as a leading law firm committed to delivering justice and protecting our clients' interests. With decades of combined experience, our team of dedicated attorneys brings deep expertise and unwavering dedication to every case.
            </p>
            
            <div className="space-y-4">
              <motion.div
                initial="hidden"
                animate={controls}
                variants={itemVariants}
                transition={{ delay: 0.2 }}
                className="flex items-start"
              >
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <p className="ml-3 text-neutral-600 font-['Open_Sans']">Comprehensive legal solutions tailored to your needs</p>
              </motion.div>
              <motion.div
                initial="hidden"
                animate={controls}
                variants={itemVariants}
                transition={{ delay: 0.4 }}
                className="flex items-start"
              >
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <p className="ml-3 text-neutral-600 font-['Open_Sans']">Dedicated team of experienced attorneys</p>
              </motion.div>
              <motion.div
                initial="hidden"
                animate={controls}
                variants={itemVariants}
                transition={{ delay: 0.6 }}
                className="flex items-start"
              >
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <p className="ml-3 text-neutral-600 font-['Open_Sans']">Proven track record of successful cases</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={rightVariants}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-neutral-100 p-6 rounded-lg">
              <h4 className="text-4xl font-bold text-red-600 mb-2">25+</h4>
              <p className="text-neutral-700 font-['Open_Sans']">Years of Experience</p>
            </div>
            <div className="bg-neutral-100 p-6 rounded-lg">
              <h4 className="text-4xl font-bold text-red-600 mb-2">1000+</h4>
              <p className="text-neutral-700 font-['Open_Sans']">Cases Won</p>
            </div>
            <div className="bg-neutral-100 p-6 rounded-lg">
              <h4 className="text-4xl font-bold text-red-600 mb-2">50+</h4>
              <p className="text-neutral-700 font-['Open_Sans']">Expert Attorneys</p>
            </div>
            <div className="bg-neutral-100 p-6 rounded-lg">
              <h4 className="text-4xl font-bold text-red-600 mb-2">98%</h4>
              <p className="text-neutral-700 font-['Open_Sans']">Success Rate</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 