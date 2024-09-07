import React from 'react'
import { motion } from 'framer-motion';
import { SwipeCarousel } from './SwipeCarousel';
import AnimatedLetters from './AnimatedLetters';
import useFadeInOnScroll from './fadehook';

const About = () => {
  const textRef = useFadeInOnScroll();

  return (
    <motion.div
      initial={{ translateY: "20vh" }} 
      animate={{ translateY: "35vh" }} 
      transition={{ duration: 1 }}
    >
      <div id="about" className="top-about"></div>
      <div ref={textRef} className="about-page-text">
        <p >
          My Projects and Experiences in Tech
        </p>
      </div>
      <div><SwipeCarousel /></div>
      
      

    </motion.div>
  )
}

export default About