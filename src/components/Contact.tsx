import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-green text-lg mb-4">04. What's Next?</h2>
        <h3 className="text-lightestSlate text-5xl font-bold mb-6">Get In Touch</h3>
        <p className="text-slate text-lg max-w-lg mx-auto mb-12">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <motion.a
          href="mailto:your.email@example.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 border-2 border-green text-green rounded hover:bg-green hover:text-navy transition-all duration-300"
        >
          Say Hello
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contact;