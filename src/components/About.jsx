import React from 'react'
import { motion } from 'framer-motion';
import { SwipeCarousel } from './SwipeCarousel';

const About = () => {
  return (
    <motion.div
      initial={{ translateY: "20vh" }} 
      animate={{ translateY: "35vh" }} 
      transition={{ duration: 1 }}
    >
      <div id="about" className="top-about"></div>
      <div className="about-page-text">
        <p >
          About
        </p>
      </div>
      <SwipeCarousel />
      
      

    </motion.div>
  )
}

export default About