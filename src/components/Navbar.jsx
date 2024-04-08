import { Link, useMatch } from "react-router-dom";
import instagram from '../assets/instagram.svg'
import githubicon from '../assets/githubicon.svg'
import linkedinicon from '../assets/linkedinicon.svg'


export default function Navbar() {
  const homeMatch = useMatch({ path: "/", exact: true });
  const hobbiesMatch = useMatch("/hobbies");
  const aboutMatch = useMatch("/about");

  const addActiveClass = (isMatched) => (isMatched ? "active" : "");

  return (
    <nav className="nav">
      <Link to="/" className={`site-title ${addActiveClass(homeMatch)}`}>
        Rababb Pannu
      </Link>
      <ul>
        <li className={addActiveClass(homeMatch)}>
          <Link to="/" className="page-link">
            Home
          </Link>
        </li>
        <li className={addActiveClass(hobbiesMatch)}>
          <Link to="/hobbies" className="page-link">
            Hobbies
          </Link>
        </li>
        <li className={addActiveClass(aboutMatch)}>
          <Link to="/about" className="page-link">
            About
          </Link>
        </li>
        <li>
          <a href="https://www.instagram.com/rababb_p" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt='ig' className="w-6 h-6 mr-2" />
        </a>
        </li>
        <li>
          <a href="https://github.com/Rababb-P" target="_blank" rel="noopener noreferrer">
        <img src={githubicon} className="w-6 h-6 mr-2" />
        </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/rababb-pannu" target="_blank" rel="noopener noreferrer">
        <img src={linkedinicon} className="w-6 h-6 mr-2" />
        </a>
        </li>
      </ul>

    </nav>
  );
}
