import React from 'react'
import { motion } from 'framer-motion';

const About = () => {
  return (
        <motion.div
          className="about-page-text"
          initial={{ height: "20%" }}
          animate={{ height: 0 }}
          transition={{ duration: 1 }}
        >
          About
        </motion.div>
  )
}

export default About