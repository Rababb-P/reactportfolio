import { Link, useMatch, useResolvedPath } from "react-router-dom";

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
      </ul>
    </nav>
  );
}
