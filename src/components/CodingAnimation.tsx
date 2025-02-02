import React from 'react';
import { motion } from 'framer-motion';

const CodingAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="relative w-[70%] mx-auto"
    >
      <div className="relative rounded-lg overflow-hidden shadow-2xl transform scale-85">
        {/* Terminal Header */}
        <div className="bg-[#1e2433] p-1.5 flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
          </div>
          <div className="text-slate text-sm font-mono">welcome.ts</div>
        </div>
        
        {/* Terminal Content */}
        <div className="bg-[#0a192f] p-3 font-mono text-sm min-h-[300px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="text-slate"
          >
            <span className="text-purple-400">const</span>{" "}
            <span className="text-green">welcomeMessage</span>{" "}
            <span className="text-slate">=</span>{" "}
            <span className="text-yellow-300">()</span>{" "}
            <span className="text-cyan-300">{'=>'}</span>{" "}
            <span className="text-slate">{"{"}</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="ml-3"
          >
            <span className="text-purple-400">return</span>{" "}
            <span className="text-slate">{"{"}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="ml-6"
          >
            <div className="my-2">
              <span className="text-green">greeting:</span>{" "}
              <span className="text-orange-300">'Welcome to my Portfolio!'</span>,
            </div>
            <div className="my-2">
              <span className="text-green">status:</span>{" "}
              <span className="text-orange-300">'Available for opportunities'</span>,
            </div>
            <div className="my-2">
              <span className="text-green">interests:</span>{" "}
              <span className="text-slate">[</span>
              <span className="text-orange-300">'Web Development'</span>,{" "}
              <span className="text-orange-300">'UI/UX'</span>,{" "}
              <span className="text-orange-300">'Innovation'</span>
              <span className="text-slate">]</span>,
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.5 }}
            className="ml-3"
          >
            <span className="text-slate">{"}"}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.5 }}
          >
            <span className="text-slate">{"}"}</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 0.5 }}
            className="mt-4 flex items-center"
          >
            <span className="text-green mr-1.5">{'>'}</span>
            <span className="text-slate">welcomeMessage()</span>
            <div className="w-1.5 h-3.5 bg-slate ml-1 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Reflection Effect */}
      <div 
        className="absolute -bottom-5 left-0 right-0 h-5 opacity-30"
        style={{
          background: 'linear-gradient(to bottom, rgba(100, 255, 218, 0.2), transparent)',
          filter: 'blur(2.5px)',
          transform: 'scaleY(-1)'
        }}
      />
    </motion.div>
  );
};

export default CodingAnimation;
