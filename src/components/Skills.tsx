import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', category: 'Frontend', icon: '⚡' },
  { name: 'TypeScript', category: 'Frontend', icon: '📘' },
  { name: 'React', category: 'Frontend', icon: '⚛️' },
  { name: 'Node.js', category: 'Backend', icon: '🚀' },
  { name: 'Python', category: 'Backend', icon: '🐍' },
  { name: 'SQL', category: 'Backend', icon: '🗄️' },
  { name: 'Git', category: 'Tools', icon: '📦' },
  { name: 'Docker', category: 'Tools', icon: '🐳' },
  { name: 'AWS', category: 'Cloud', icon: '☁️' },
  { name: 'MongoDB', category: 'Database', icon: '🍃' },
  { name: 'Redis', category: 'Database', icon: '⚡' },
  { name: 'GraphQL', category: 'API', icon: '📊' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-lightestSlate text-3xl font-bold mb-16 flex items-center">
          <span className="text-green mr-2">02.</span> Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(100, 255, 218, 0.1)' }}
              className="bg-lightNavy p-6 rounded-lg transition-all duration-300 transform hover:shadow-lg hover:shadow-green/20 border border-green/20"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{skill.icon}</span>
                <div>
                  <h3 className="text-lightestSlate font-semibold mb-1">{skill.name}</h3>
                  <p className="text-slate text-sm">{skill.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;