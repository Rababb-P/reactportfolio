import React from 'react'
import { motion } from 'framer-motion';

const Landing = () => {
  return (
    <motion.div 
      className="about-page-text"
      initial={{ height: "20%" }}
      animate={{ height: 0 }}
      transition={{ duration: 1 }}
    >
      <p>Hey! I'm Rababb, a Pre-AP high school student at Martingrove Collegiate Institute in Etobiocke, Ontario. 
      </p>
      <p>
        You can contact me at rababb.s.pannu@gmail.com
      </p>
    </motion.div>
  )
}

export default Landing;