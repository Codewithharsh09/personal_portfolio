import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiFlask,
  SiGit,
  SiGithub,
  SiJson,
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
}

const skills: Skill[] = [
  { name: 'HTML', icon: SiHtml5, category: 'Languages' },
  { name: 'CSS', icon: SiCss3, category: 'Languages' },
  { name: 'JavaScript', icon: SiJavascript, category: 'Languages' },
  { name: 'TypeScript', icon: SiTypescript, category: 'Languages' },
  { name: 'Python', icon: SiPython, category: 'Languages' },
  { name: 'Node.js', icon: SiNodedotjs, category: 'Frameworks' },
  { name: 'Express', icon: SiExpress, category: 'Frameworks' },
  { name: 'Flask', icon: SiFlask, category: 'Frameworks' },
  { name: 'MongoDB', icon: SiMongodb, category: 'Databases' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'Databases' },
  { name: 'Git', icon: SiGit, category: 'Tools' },
  { name: 'GitHub', icon: SiGithub, category: 'Tools' },
  { name: 'REST APIs', icon: SiJson, category: 'Tools' },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg dark:bg-light-bg"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-dark-surface dark:bg-light-surface p-6 rounded-lg card-hover flex flex-col items-center justify-center space-y-3 group"
              >
                <Icon className="text-5xl md:text-6xl text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                <h3 className="text-white dark:text-gray-900 font-semibold text-sm md:text-base">
                  {skill.name}
                </h3>
                <span className="text-xs text-gray-400 dark:text-gray-600">{skill.category}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

