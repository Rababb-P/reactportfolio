import React from 'react'
import { motion } from 'framer-motion';

const Hobbies = () => {
  return (
    <motion.div
      className="about-page-text"
      initial={{ height: "20%" }}
      animate={{ height: 0 }}
      transition={{ duration: 1 }}
    >
      <p>Hobbies</p>
    </motion.div>
  )
}

export default Hobbies