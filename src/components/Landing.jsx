import { useEffect, useState, React } from 'react'
import { motion } from 'framer-motion';
import AnimatedLetters from './AnimatedLetters';
import { SwipeCarousel } from './SwipeCarousel';

const Landing = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 2000);   
  },[])

  return (
      <motion.div 
      initial={{ translateY: "20vh" }} 
      animate={{ translateY: "35vh" }} 
      transition={{ duration: 1 }}
      >
      
      <div id="landing" className="top-landing"></div>
      
      <div className="landing-page-text">
        <AnimatedLetters 
          letterClass={letterClass}
          strArray={['H','e','y','!']}
          idx={15}
        />
        <p>I'm Rababb,<br/> a grade 12 AP high school student <br/> at Martingrove Collegiate Institute.</p>
      </div>
      </motion.div>
  )
}

export default Landing;