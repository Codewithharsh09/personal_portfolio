import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

interface ExperienceItem {
  type: 'work' | 'education';
  title: string;
  organization: string;
  duration: string;
  description?: string;
  responsibilities?: string[];
  techStack?: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const experiences: ExperienceItem[] = [
  {
    type: 'work',
    title: 'Node.js Developer',
    organization: 'BriskCovey Technologies',
    duration: '1 year',
    responsibilities: [
      'Designed and implemented scalable REST APIs for transaction management and data aggregation',
      'Integrated third-party Web APIs to fetch live crypto transaction data and token values',
      'Built secure authentication and authorization (JWT-based) for user accounts',
      'Worked with MongoDB + Mongoose for dynamic data modeling and indexing',
    ],
    techStack: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'REST APIs',
      'Web APIs',
      'JWT',
      'Postman',
      'GitHub',
    ],
    icon: FaBriefcase,
  },
  {
    type: 'education',
    title: 'Master of Computer Applications (MCA)',
    organization: 'Vivekananda Global University (VGU)',
    duration: 'Pursuing',
    description:
      'Currently pursuing Master of Computer Applications with focus on software development, database systems, and advanced programming concepts.',
    icon: FaGraduationCap,
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg dark:bg-light-bg"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-indigo-500 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={`${exp.type}-${index}`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: isEven ? -50 : 50 }
                  }
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-8 md:left-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-dark-bg dark:border-light-bg transform md:-translate-x-1/2 z-10 ${
                      exp.type === 'work' ? 'ring-2 ring-indigo-400' : ''
                    }`}
                  />

                  {/* Content Card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-5/12 ${
                      isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div className="bg-dark-surface dark:bg-light-surface p-6 rounded-lg shadow-lg hover:shadow-indigo-500/20 transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon
                          className={`text-2xl ${
                            exp.type === 'work'
                              ? 'text-indigo-400'
                              : 'text-purple-400'
                          }`}
                        />
                        <div>
                          <h3 className="text-xl font-bold text-white dark:text-gray-900">
                            {exp.title}
                          </h3>
                          <p className="text-indigo-400 font-semibold">
                            {exp.organization}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-400 dark:text-gray-600 text-sm mb-4">{exp.duration}</p>
                      {exp.description && (
                        <p className="text-gray-300 dark:text-gray-700 leading-relaxed mb-4">
                          {exp.description}
                        </p>
                      )}
                      {exp.responsibilities && exp.responsibilities.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-white dark:text-gray-900 font-semibold mb-2">
                            Key Responsibilities:
                          </h4>
                          <ul className="list-disc list-inside space-y-2 text-gray-300 dark:text-gray-700 text-sm">
                            {exp.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="leading-relaxed">
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {exp.techStack && exp.techStack.length > 0 && (
                        <div>
                          <h4 className="text-white dark:text-gray-900 font-semibold mb-2">
                            Tech Stack:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-indigo-600/20 text-indigo-400 rounded-full text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

