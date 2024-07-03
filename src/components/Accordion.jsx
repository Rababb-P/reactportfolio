import React, { useRef, useEffect, useState } from "react";

const Accordion = ({ title, answer, isOpen, onToggle }) => {
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div style={{ padding: "0vh 0", marginBottom: "2vh" }}>
      <button
        onClick={onToggle}
        className="accordion-toggle"
        style={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "2vh 0" }}
      >
        <span style={{ fontSize: "2vh" }}>{title}</span>
        <svg
          className={`accordion-icon ${isOpen ? "open" : ""}`}
          style={{ fill: "white", flexShrink: 0, marginLeft: "4vh" }}
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${isOpen ? "rotate-90" : ""}`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${isOpen ? "rotate-90" : ""}`}
          />
        </svg>
      </button>
      <div
        ref={contentRef}
        className="accordion-content"
        style={{
          fontSize: "2vh",
          maxHeight: isOpen ? height : "0px",
          overflow: "hidden",
          transition: "max-height 0.3s ease-in-out",
        }}
      >
        <ul style={{ padding: "2vh 0", listStyleType: "disc", paddingLeft: "2vh" }}>
          {answer.map((sentence, index) => (
            <li key={index} style={{ marginBottom: "1vh" }}>
              {sentence}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
