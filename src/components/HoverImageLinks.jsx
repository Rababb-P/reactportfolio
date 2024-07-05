import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import gmailIcon from "../assets/gmail-svgrepo-com.svg";
import githubIcon from "../assets/githubicon.svg";
import linkedinicon from "../assets/linkedinicon.svg";
import instagramIcon from "../assets/instagram.svg";
import BeaconIcon from "../assets/apple-touch-icon.png";

const imgs = [
  gmailIcon,
  githubIcon,
  linkedinicon,
  instagramIcon,
  BeaconIcon,
];

const imgTexts = [
  "Gmail",
  "GitHub",
  "LinkedIn",
  "Instagram",
  "Beacon",
];

const imgLinks = [
  "https://mail.google.com/mail/?view=cm&fs=1&to=rababb.s.pannu@gmail.com",
  "https://github.com/Rababb-P",
  "https://www.linkedin.com/",
  "https://www.instagram.com/rababb_p",
  "https://thebeacon.vercel.app/",
];

const imgSubHeadings = [
  "Check",
  "This",
  "Out",
  "Now",
  "Fr",
]

export const HoverImageLinks = () => {
  return (
    <section className="p-2 md:p-5">
      <div className="mx-auto max-w-2xl">
        {imgs.map((imgSrc, idx) => (
          <Link
            key={idx}
            heading={imgTexts[idx]}
            /*subheading={imgSubHeadings[idx]}*/
            imgSrc={imgSrc}
            href={imgLinks[idx]}
          />
        ))}
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between py-2 transition-colors duration-500 md:py-6"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -8 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-2xl font-bold text-white transition-colors duration-500 group-hover:text-[#3a61c6] md:text-3xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 8 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-1 block text-sm text-white transition-colors duration-500 group-hover:text-[#3a61c6]">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-12 w-16 rounded-lg object-cover md:h-20 md:w-28"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-2"
      >
      </motion.div>
    </motion.a>
  );
};
