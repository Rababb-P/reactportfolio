import { useEffect, useState, React } from 'react'
import { motion } from 'framer-motion';
import Cube from './Cube';
import AnimatedLetters from './AnimatedLetters';

const Hobbies = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 2000);     
  },[])

  return (
    <motion.div
    initial={{ translateY: 300 }} 
    animate={{ translateY: 400 }} 
    transition={{ duration: 1 }}
    >
      <div className="about-page-text">
        <AnimatedLetters 
          letterClass={letterClass}
          strArray={['H','o','b','b','i','e','s']}
          idx={15}
        />
        {/* <p className="">I participate in many activities<br></br> both inside and outside of school,<br></br> and here are some of the main ones</p>  */}

        <p className="text-white text-sm py-10 leading-relaxed">I am the proud Co-President of my school's newspaper, The Beacon. <br></br>We release issues monthly and print 500 copies of each issue to distribute to our school.<br></br> Check out our website here: https://mcibeacon.com/ </p>

        <p className="text-white text-sm py-10 leading-relaxed">I am a programmer for my schools FIRST Robotics team, Iron Bears (Team 854), where I<br></br> code our robot in Java using the WPILIB library. I also recently won a UofT robotics competiton<br></br>with my friends, which involved building and coding an autonomous rover controlled by Arduino</p>

        <p className="text-white text-sm py-10 leading-relaxed">I play ball hockey in a league and practice often during my spare time. <br></br>I have gone to provincials for ball hockey three times, playing for the Toronto Pilots twice<br></br> and the Etobicoke Hurricanes once, and I have won bronze at provincials twice!<br></br>In school, I play for the Varsity Ice Hockey team and the Varsity Frisbee team.</p>

      </div>
      <Cube />
    </motion.div>
  )
}

export default Hobbies
