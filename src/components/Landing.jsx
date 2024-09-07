import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedLetters from './AnimatedLetters';
import useFadeInOnScroll from './fadehook';

const Landing = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const textRef = useFadeInOnScroll(); // Using the fade-in hook for the text

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2000);
  }, []);

  return (
    <motion.div
      initial={{ translateY: '20vh' }}
      animate={{ translateY: '35vh' }}
      transition={{ duration: 1 }}
    >
      <div id="landing" className="top-landing"></div>

      {/* Apply the fade-in effect to the text container */}
      <div className="landing-page-text" ref={textRef}>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['H', 'e', 'y', '!']}
          idx={15}
        />
        <p>
          I'm Rababb,<br /> a grade 12 AP high school student <br /> at
          Martingrove Collegiate Institute.
        </p>
      </div>
    </motion.div>
  );
};

export default Landing;
