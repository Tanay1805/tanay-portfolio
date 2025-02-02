import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Index;