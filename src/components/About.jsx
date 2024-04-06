import React from 'react'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ height: "20%" }}
      animate={{ height: 0 }}
      transition={{ duration: 1 }}
    >
      <p className="normal-text">About</p>

    </motion.div>
  )
}

export default About