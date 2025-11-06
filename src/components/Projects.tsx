import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: 'Dex Mining',
    description:
      'Comprehensive backend system for cryptocurrency transaction management and data aggregation. Built scalable REST APIs for handling complex transaction workflows, integrated third-party Web APIs for real-time crypto data, and implemented JWT-based authentication. Utilized MongoDB with Mongoose for efficient data modeling and optimized database queries.',
    stack: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'REST APIs'],
    github: '#',
  },
  {
    title: 'Scrappers',
    description:
      'Automated web scraping system for extracting product data from various e-commerce websites including clothing, shoes, and other categories. Utilized extensive DOM manipulation to properly extract and fix values from multiple external web pages. Implemented robust data extraction, parsing, and normalization techniques to ensure accurate product information collection.',
    stack: ['Node.js', 'Puppeteer', 'JavaScript', 'DOM Manipulation', 'Web Scraping'],
    github: '#',
  },
  {
    title: 'KBAI',
    description:
      'Flask-based AI platform for financial analysis and prediction. Implemented user management system with Auth0 and JWT authentication, including role-based permissions. Features company balance sheet upload functionality where users can upload their financial data. The platform analyzes the data and uses graph-based predictions to forecast next year\'s financial growth or decline. Additionally, companies can select and compare with competitor companies for competitive analysis.',
    stack: ['Python', 'Flask', 'PostgreSQL', 'Auth0', 'JWT', 'AI/ML', 'Graph Analysis'],
    github: '#',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-surface dark:bg-light-surface"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-dark-bg dark:bg-light-bg p-6 rounded-lg card-hover border border-gray-800 dark:border-gray-200 hover:border-indigo-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white dark:text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 dark:text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-indigo-600/20 text-indigo-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

