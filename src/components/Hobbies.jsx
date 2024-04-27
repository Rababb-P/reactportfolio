import { useEffect, useState, React } from 'react'
import { motion } from 'framer-motion';
import Cube from './Cube';
import AnimatedLetters from './AnimatedLetters';
import '../beac-button.css';


const Hobbies = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 2000);     
  },[])

  return (
    <motion.div
    initial={{ translateY: "20vh" }} 
    animate={{ translateY: "30vh" }} 
    transition={{ duration: 1 }}
    >
      <div className="about-page-text">
        <AnimatedLetters 
          letterClass={letterClass}
          strArray={['H','o','b','b','i','e','s']}
          idx={15}
        />
        {/* <p className="">I participate in many activities<br></br> both inside and outside of school,<br></br> and here are some of the main ones</p>  */}

        <p className="text-white text-lg py-hob leading-relaxed">I am the proud Co-President of my school's newspaper, The Beacon. <br></br>We release issues monthly and print 500 copies of each issue to distribute to our school.<br></br></p>
        
        <a className="beac-button" href="https://thebeacon.vercel.app/" target="_blank" rel="noopener noreferrer"><button>Website →</button></a>

        <p className="text-white text-sm py-10 leading-relaxed">I am the head programmer for my schools FIRST Robotics team, Iron Bears (Team 854),<br></br> where I code our robot in Java using the WPILIB framework. I also recently won a UofT<br></br> Hackathon competitonwith my friends, which involved building and coding an autonomous<br></br> and remotely controllable rover controlled in Arduino.</p>

        <p className="text-white text-sm py-10 leading-relaxed">I play ball hockey in a few leagues and practice/workout often during my spare time. <br></br>I have played mainly for the Toronto Pilots and the Etobicoke Hurricanes,<br></br> and I have gone to Ontario Ball Hockey Provincials 3 times, winning bronze twice!<br></br>In school, I play for the Varsity Ice Hockey team and the Varsity Frisbee team.</p>

      </div>        
      
 

      <Cube />
    </motion.div>
  )
}

export default Hobbies
