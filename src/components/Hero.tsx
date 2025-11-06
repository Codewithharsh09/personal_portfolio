import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

interface Particle {
  id: number;
  initialX: number;
  initialY: number;
  targetX: number;
  targetY: number;
  duration: number;
}

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });
  const fullText = "Hi, I'm Harshwardhan 👋";
  const subtitle = "Backend Developer | Node.js | Flask | MongoDB | PostgreSQL";

  useEffect(() => {
    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Handle window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate particle positions (memoized to prevent regeneration on every render)
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 50 }, (_, i): Particle => ({
        id: i,
        initialX: Math.random() * windowSize.width,
        initialY: Math.random() * windowSize.height,
        targetX: Math.random() * windowSize.width,
        targetY: Math.random() * windowSize.height,
        duration: Math.random() * 10 + 10,
      })),
    [windowSize.width, windowSize.height]
  );

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-bg dark:bg-light-bg">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-indigo-500 rounded-full opacity-20"
            initial={{
              x: particle.initialX,
              y: particle.initialY,
            }}
            animate={{
              y: particle.targetY,
              x: particle.targetX,
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white dark:text-gray-900">{displayedText}</span>
            {displayedText.length < fullText.length && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1 h-16 md:h-20 bg-indigo-500 ml-2"
              />
            )}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-400 dark:text-gray-400 mb-8"
          >
            {subtitle}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            View My Work
            <FaArrowDown className="animate-bounce" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-indigo-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-indigo-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

