import React, { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import seekJrWin from "../assets/seekjrwin.png";
import sandc from "../assets/sandcpic.png";
import aisort from "../assets/aisortnocam.jpg";
import frcpic from "../assets/frcpic.png";
import fifa from "../assets/fifasite.png";
import studysync from "../assets/studysyncpic.jpg";

const imgs = [
  studysync,
  aisort,  
  fifa,
  sandc,
  seekJrWin,
  frcpic,
];

const imgTexts = [
  "Hack The North 2024 Award Winner",
  "AI Garbage and Recycling Sorter",  
  "Website Displaying Fifa World Cup Stats On Graphs",
  "Job Shadowing Program at S&C Electric Canada Ltd.",  
  "Seek Jr 2024 UofT Winner",
  "Head of Programming of Iron Bears FRC Team 854",
];

const imgLinks = [
  "https://devpost.com/software/studying-with-hack-the-north?ref_content=user-portfolio&ref_feature=in_progress",
  "https://devpost.com/software/smart-bin-owq4am", 
  "https://github.com/Rababb-P/UofTCreate2024Capstone",
  "https://www.sandc.com/",  
  "https://rsxutoronto.wixsite.com/mysite/seek-jr-2024",
  "https://sites.google.com/site/ironbears854",
];

const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  const goToNextSlide = () => {
    setImgIndex((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
  };

  const goToPreviousSlide = () => {
    setImgIndex((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));
  };

  return (
    <div className="carousel-container">

      <div className="click-me-instruction">Click on the images to learn more!</div>

      <button className="arrow-left" onClick={goToPreviousSlide}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 5l-7 7 7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="carousel-inner"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <button className="arrow-right" onClick={goToNextSlide}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 19l7-7-7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
    </div>
  );
};

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => (
        <a
          href={imgLinks[idx]}
          target="_blank"
          rel="noopener noreferrer"
          key={idx}
          className="image-link"
        >
          <motion.div
            style={{
              backgroundImage: `url(${imgSrc})`,
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="image-container"
          >
            <div className="image-text">
              {imgTexts[idx]}
            </div>
          </motion.div>
        </a>
      ))}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="dots-container">
      {imgs.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setImgIndex(idx)}
          className={`dot ${idx === imgIndex ? "dot-active" : "dot-inactive"}`}
        />
      ))}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="gradient-edge gradient-edge-left" />
      <div className="gradient-edge gradient-edge-right" />
    </>
  );
};
