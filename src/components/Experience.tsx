import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: '8Bits',
    position: 'Full Stack Developer',
    period: '2022 - Present',
    description: [
      'Developed and maintained web applications using React and Node.js',
      'Implemented automated testing solutions',
      'Collaborated with cross-functional teams to deliver high-quality software',
    ],
  },
  {
    company: 'LetsUpgrade',
    position: 'Developer',
    period: '2021 - 2022',
    description: [
      'Built responsive web interfaces',
      'Worked on automation projects',
      'Mentored junior developers',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-8 bg-lightNavy/30">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-lightestSlate text-3xl font-bold mb-16 flex items-center">
          <span className="text-green mr-2">03.</span> Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-green"
            >
              <div className="absolute w-4 h-4 bg-navy border-2 border-green rounded-full -left-[9px] top-0" />
              <h3 className="text-lightestSlate text-xl font-semibold mb-1">{exp.position}</h3>
              <h4 className="text-green mb-2">{exp.company}</h4>
              <p className="text-slate mb-4">{exp.period}</p>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-slate flex items-start">
                    <span className="text-green mr-2">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;