import React, { useState } from 'react';
import { motion } from 'framer-motion';

const technologies = [
  // Top 3
  {
    name: 'React',
    logo: 'https://cdn.simpleicons.org/react/61DAFB',
    fallback: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/react.svg',
    position: { x: 50, y: 5 }
  },
  {
    name: 'TypeScript',
    logo: 'https://cdn.simpleicons.org/typescript/3178C6',
    fallback: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/typescript.svg',
    position: { x: 15, y: 5 }
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.simpleicons.org/javascript/F7DF1E',
    fallback: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/javascript.svg',
    position: { x: 85, y: 5 }
  },
  // Right 2
  {
    name: 'Node.js',
    logo: 'https://cdn.simpleicons.org/nodedotjs/339933',
    fallback: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nodedotjs.svg',
    position: { x: 95, y: 25 }
  },
  {
    name: 'MongoDB',
    logo: 'https://cdn.simpleicons.org/mongodb/47A248',
    fallback: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mongodb.svg',
    position: { x: 95, y: 75 }
  },
  // Bottom 3
  {
    name: 'Docker',
    logo: 'https://cdn.simpleicons.org/docker/2496ED',
    fallback: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/docker.svg',
    position: { x: 50, y: 95 }
  },
  {
    name: 'AWS',
    logo: 'https://cdn.simpleicons.org/amazonwebservices/FF9900',
    fallback: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/amazonwebservices.svg',
    position: { x: 15, y: 95 }
  },
  {
    name: 'Git',
    logo: 'https://cdn.simpleicons.org/git/F05032',
    fallback: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/git.svg',
    position: { x: 85, y: 95 }
  },
  // Left 2
  {
    name: 'TailwindCSS',
    logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
    fallback: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/tailwindcss.svg',
    position: { x: 5, y: 25 }
  },
  {
    name: 'Python',
    logo: 'https://cdn.simpleicons.org/python/3776AB',
    fallback: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/python.svg',
    position: { x: 5, y: 75 }
  }
];

interface FloatingTechProps {
  position: 'circle';
}

const FloatingTechnologies: React.FC<FloatingTechProps> = () => {
  const [failedLogos, setFailedLogos] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (techName: string) => {
    setFailedLogos(prev => ({ ...prev, [techName]: true }));
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="relative w-full h-full">
        {technologies.map((tech, index) => {
          const delay = index * 0.15;
          
          return (
            <motion.div
              key={tech.name}
              className="absolute"
              style={{
                left: `${tech.position.x}%`,
                top: `${tech.position.y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
              }}
              initial={{ 
                opacity: 0,
                scale: 0.5,
                y: -20
              }}
              animate={{ 
                opacity: 1,
                scale: 1,
                y: [0, -8, 0]
              }}
              transition={{
                opacity: { duration: 0.8, delay },
                scale: { duration: 0.8, delay },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: delay
                }
              }}
            >
              <div 
                className="flex items-center justify-center bg-navy/80 backdrop-blur-md p-3 rounded-2xl border-2 border-green/10 shadow-xl hover:border-green/30 transition-all duration-300 hover:scale-110 hover:shadow-green/20"
                title={tech.name}
              >
                <img 
                  src={failedLogos[tech.name] ? tech.fallback : tech.logo}
                  alt={tech.name}
                  onError={() => handleImageError(tech.name)}
                  className="w-7 h-7 object-contain filter brightness-110 hover:brightness-125 transition-all duration-300" 
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingTechnologies;
