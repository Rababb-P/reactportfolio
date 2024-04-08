import React from 'react'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ translateY: "20vh" }} 
      animate={{ translateY: "35vh" }} 
      transition={{ duration: 1 }}
    >
      <p className="about-page-text">About</p>

    </motion.div>
  )
}

export default About