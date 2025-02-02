import React from 'react';
import { motion } from 'framer-motion';
import InteractiveBackground from './InteractiveBackground';
import CodingAnimation from './CodingAnimation';
import FloatingTechnologies from './FloatingTechnologies';

const Hero = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-auto">
      {/* Main Hero Section */}
      <section className="h-screen flex flex-col justify-center px-8 relative snap-start">
        <InteractiveBackground />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl relative mx-auto z-10"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-green text-lg mb-5 font-mono"
          >
            Hi, my name is
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lightestSlate text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
          >
            Tanay Sahajwalla.
          </motion.h2>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-slate text-5xl font-bold mb-8"
          >
            I build things for the web.
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-slate text-xl max-w-2xl mb-12 leading-relaxed"
          >
            I'm a Full Stack & Automation Developer based in Mumbai, specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex gap-5 mb-16"
          >
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-green text-green rounded hover:bg-green hover:text-navy transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Animated Down Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="cursor-pointer"
            onClick={() => {
              const nextSection = document.getElementById('code-section');
              nextSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green"
            >
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Code Animation Section */}
      <section id="code-section" className="h-screen flex items-center justify-center px-8 relative snap-start">
        <div className="relative w-full max-w-5xl">
          <div className="py-40 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <CodingAnimation />
            </motion.div>

            {/* Floating technologies in a circle around the code */}
            <FloatingTechnologies position="circle" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;