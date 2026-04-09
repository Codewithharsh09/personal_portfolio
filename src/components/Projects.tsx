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
    title: 'Razor Clinic',
    description:
      'Clinic Management System backend for a healthcare ERP. Built modules for patient records, consultations, prescriptions, pharmacy dispensing, inventory with real-time stock tracking, and lab workflows with sample tracking and automated report generation.',
    stack: ['Python', 'SQL', 'SQLAlchemy', 'Twilio', 'Cloudinary'],
    // github: '#',
  },
  {
    title: 'KBAI',
    description:
      'Financial Analysis & Business Intelligence backend for SME balance sheet processing and KPI benchmarking. Implemented XLSX/XBRL ingestion, automated financial data extraction, S3-backed storage, real-time KPI calculations (27+ metrics), and multi-year benchmark comparisons with dynamic KPI status tracking.',
    stack: ['Python', 'Flask', 'PostgreSQL', 'SQLAlchemy','Auth0'],
    // github: '#',
  },
  {
    title: 'Cablinks',
    description:
      'HR and Accounting Management System backend. Built inventory, purchases, invoicing, banking, and reporting modules with automated totals/tax/discount calculations, payment workflows, due-date validations, and audit-friendly APIs for cash flow and account statements.',
    stack: ['Node.js', 'TypeScript', 'MongoDB', 'REST APIs'],
    // github: '#',
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

