import React from 'react';
import { motion } from 'framer-motion';
import instagram from '../assets/instagram.svg'
import TiltCard from './tiltcards';
import tiltcards from '../constants'
import Cube from './Cube';

const Landing = () => {
  return (
    <motion.div 
      className="about-page-text "
      initial={{ height: "20%" }}
      animate={{ height: 0 }}
      transition={{ duration: 1 }}
    >
      <p>Hey! I'm Rababb,<br/> an AP high school student at <br/>Martingrove Collegiate Institute.</p>

    </motion.div>
  )
}

export default Landing;

// <motion.div 
// className="about-page-text "
// initial={{ height: "20%" }}
// animate={{ height: 0 }}
// transition={{ duration: 1 }}
// >
// <p>Hey! I'm Rababb, an AP high school student at Martingrove Collegiate Institute in Etobicoke, Ontario. 
// </p>
// <p>
//   You can contact me at rababb.s.pannu@gmail.com
// </p>
// <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}>
//   <div style={{ marginRight: "20px" }}>
//   <TiltCard/>
//   </div>
// </div>
// </motion.div>