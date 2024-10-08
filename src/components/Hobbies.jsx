import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Cube from "./Cube";
import AnimatedLetters from "./AnimatedLetters";
import "../beac-button.css";
import Accordion from "./Accordion";
import useFadeInOnScroll from "./fadehook"; // Import the custom hook

const Hobbies = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  // Use the custom hook for fade-in effect
  const hobbiesTextRef = useFadeInOnScroll();
  const accordionRef = useFadeInOnScroll();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
  }, []);

  const handleToggle = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  return (
    <>
      <motion.div
        initial={{ translateY: "20vh" }}
        animate={{ translateY: "30vh" }}
        transition={{ duration: 1 }}
      >
        <div id="hobbies" className="top-hobbies"></div>
        {/* Apply fade-in effect to the hobbies text */}
        <div className="hobbies-page-text" ref={hobbiesTextRef}>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["A", "c", "t", "i", "v", "i", "t", "i", "e", "s"]}
            idx={15}
          />
        </div>
        <Cube />
      </motion.div>

      {/* Apply fade-in effect to the accordion container */}
      <div className="accordion" ref={accordionRef}>
        <Accordion
          title="School Clubs"
          answer={[
            "I am the Co-President of Martingrove Collegiate Institute's newspaper club, The Beacon. We release issues monthly and print 500 copies of each issue to distribute to our school.",
            "I am the student-elected Vice-President of Martingrove Collegiate Institute's Student Administrative Council. I help organize and run assemblies, clubs, spirit days, events, and more at my school.",
            "I am the head of programming for Martingrove Collegiate Institute's First Robotics Team, Team 854, Iron Bears. I code our robot in Java using the WPILIB framework and teach younger students how to do the same."
          ]}
          isOpen={openAccordionIndex === 0}
          onToggle={() => handleToggle(0)}
        />
        <Accordion
          title="Programming and Robotics"
          answer={[
            "I have attended UofT's CREATE camp for two summers. This summer, my team and I built a React JS website to display the 2022 Soccer World Cup team stats from a database, which we turned into graphs using pandas and matplotlib.",
            "I have participated in 5 hackathons over the past two years, and recently won UofT Seek Jr 2024, in which my team and I created a rover controlled by Arduino that autonomously navigated a maze, which then was controlled by a phone via Bluetooth connection to locate and scan three barcodes.",
            "I have completed many coding and math competitions, such as the University of Waterloo's CCC, Fermat, and Hypatia contests."
          ]}
          isOpen={openAccordionIndex === 1}
          onToggle={() => handleToggle(1)}
        />
        <Accordion
          title="Sports"
          answer={[
            "I currently play ball hockey for the Toronto Pilots, for whom I have gone to the U18 Ontario Ball Hockey Provincial Tournament twice, winning bronze once. I have played for the Etobicoke Hurricanes, for whom I went to the U16 Ontario Ball Hockey Provincial Tournament once.",
            "I have played on Martingrove Collegiate Institute's Varsity Ice Hockey and Varsity Frisbee teams for two years each, and Track and Field and Volleyball teams for one year each."
          ]}
          isOpen={openAccordionIndex === 2}
          onToggle={() => handleToggle(2)}
        />
        <Accordion
          title="Volunteering"
          answer={[
            "I have volunteered at Seva Food Bank Malton for three summers, where I organize shipments, stock shelves, and give food to those in need."
          ]}
          isOpen={openAccordionIndex === 3}
          onToggle={() => handleToggle(3)}
        />
      </div>
    </>
  );
};

export default Hobbies;
