import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { fadeInUp, staggerContainer } from "../utils/animations";
import Card from "./common/Card";
import Section from "./common/Section";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: { icon: React.ReactNode; name: string }[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio built with React, TypeScript, and Framer Motion. Features dark mode, smooth animations, and optimized performance.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: [
        { icon: <SiReact className="w-5 h-5" />, name: "React" },
        { icon: <SiTypescript className="w-5 h-5" />, name: "TypeScript" },
        { icon: <SiTailwindcss className="w-5 h-5" />, name: "Tailwind CSS" },
      ],
      github: "https://github.com/",
      demo: "https://your-portfolio.com",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "Full-stack task management application with real-time updates, user authentication, and collaborative features.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: [
        { icon: <SiReact className="w-5 h-5" />, name: "React" },
        { icon: <SiNodedotjs className="w-5 h-5" />, name: "Node.js" },
        { icon: <SiTypescript className="w-5 h-5" />, name: "TypeScript" },
      ],
      github: "https://github.com/",
      demo: "https://your-app.com",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: [
        { icon: <SiReact className="w-5 h-5" />, name: "React" },
        { icon: <SiNodedotjs className="w-5 h-5" />, name: "Node.js" },
        { icon: <SiTailwindcss className="w-5 h-5" />, name: "Tailwind CSS" },
      ],
      github: "https://github.com/",
    },
  ];

  return (
    <Section id="projects" title="Featured Projects">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="space-y-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={fadeInUp}
            transition={{ delay: index * 0.2 }}
          >
            <Card
              className={`overflow-hidden ${
                project.featured ? "ring-2 ring-slate-600" : ""
              }`}
              delay={index * 0.1}
            >
              <div
                className={`grid gap-8 items-center ${
                  index % 2 === 0 ? "md:grid-cols-2" : "md:grid-cols-2"
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="aspect-video rounded-lg overflow-hidden bg-slate-700">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div
                  className={`space-y-4 ${index % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-slate-100">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-2 py-1 text-xs bg-slate-600 text-slate-200 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300"
                      >
                        <span className="text-slate-400">{tech.icon}</span>
                        {tech.name}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors"
                      >
                        <FaGithub className="w-5 h-5" />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
