import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "AI Code Assistant",
    description: "A GPT-powered code assistant that helps developers write better code faster.",
    tech: ["React", "TypeScript", "OpenAI API"],
    github: "https://github.com/yourusername/ai-code-assistant",
    live: "https://ai-code-assistant.demo"
  },
  {
    title: "Automation Framework",
    description: "End-to-end testing framework for web applications using modern testing tools.",
    tech: ["Python", "Selenium", "Pytest"],
    github: "https://github.com/yourusername/automation-framework",
    live: "https://automation-framework.demo"
  },
  {
    title: "Task Management System",
    description: "Full-stack task management application with real-time updates.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/task-manager",
    live: "https://task-manager.demo"
  },
  {
    title: "E-commerce Platform",
    description: "Modern e-commerce platform with real-time inventory management.",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://ecommerce.demo"
  },
  {
    title: "Chat Application",
    description: "Real-time chat application with video calling capabilities.",
    tech: ["React", "WebRTC", "Firebase"],
    github: "https://github.com/yourusername/chat-app",
    live: "https://chat-app.demo"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website with modern design and animations.",
    tech: ["React", "Framer Motion", "Tailwind"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://portfolio.demo"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-lightestSlate text-3xl font-bold mb-16 flex items-center">
          <span className="text-green mr-2">04.</span> Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-lightNavy p-6 rounded-lg transition-all duration-300 transform hover:shadow-lg hover:shadow-green/20 border border-green/20 hover:bg-opacity-90">
                <CardHeader>
                  <CardTitle className="text-lightestSlate font-bold">{project.title}</CardTitle>
                  <CardDescription className="text-slate text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-green text-xs px-3 py-1 rounded-full border border-green/50 bg-green/5 hover:bg-green/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-green transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-green transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;