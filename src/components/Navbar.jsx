import { Link, useMatch } from "react-router-dom";
import instagram from '../assets/instagram.svg'
import githubicon from '../assets/githubicon.svg'
import linkedinicon from '../assets/linkedinicon.svg'


export default function Navbar() {
  const homeMatch = useMatch({ path: "/", exact: true });
  const hobbiesMatch = useMatch("/hobbies");
  const aboutMatch = useMatch("/about");
  const contactMatch = useMatch("/content")

  const addActiveClass = (isMatched) => (isMatched ? "active" : "");

  return (
    <nav className="nav">
      <a href="#landing" className={`site-title ${addActiveClass(homeMatch)}`}>
        Rababb Pannu
      </a>
      <ul>
        <li className={addActiveClass(homeMatch)}>
          <a href="#landing" className="page-link">
            Home
          </a>
        </li>
        <li className={addActiveClass(hobbiesMatch)}>
          <a href="#hobbies" className="page-link">
            Activities
          </a>
        </li>
        <li className={addActiveClass(aboutMatch)}>
          <a href="#about" className="page-link">
            About
          </a>
        </li>
        <li className={addActiveClass(contactMatch)}>
          <a href="#contact" className="page-link">
            Contact
          </a>
        </li>
        <li >
          <a href="https://www.instagram.com/rababb_p" target="_blank" rel="noopener noreferrer">
        <img src={instagram} className="social-icon w-6 h-6 mr-2" />
        </a>
        </li>
        <li>
          <a href="https://github.com/Rababb-P" target="_blank" rel="noopener noreferrer">
        <img src={githubicon} className="social-icon w-6 h-6 mr-2" />
        </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/rababb-pannu" target="_blank" rel="noopener noreferrer">
        <img src={linkedinicon} className="social-icon w-6 h-6 mr-2" />
        </a>
        </li>
      </ul>
    </nav>
  );
}
