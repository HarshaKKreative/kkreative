import { BiSolidDownArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import LOGO from "../assets/images/logo.png";
import "./Navbar.css";

function Nav_bar({ currentPage }) {

  return (
    <nav className="nav">
      <div className="nav__logo">
        {currentPage === "/" ? (
          <a href="#header">
            <img src={LOGO} alt="log" />
          </a>
        ) : (
          <Link to="/">
            <img src={LOGO} alt="log" />
          </Link>
        )}
      </div>
      <ul className="nav__items">
        <li>
          {currentPage === "/" ? (
            <a href="#header">Home</a>
          ) : (
            <Link to="/">Home</Link>
          )}
        </li>
        <li>
          <Link to={"/about-us"}> About us</Link>
        </li>
        <li className="nav__industries">
          Industries <BiSolidDownArrow size={"10px"} />
          <ul className="nav__submenu">
            <li>
              <Link to={"banking"}>Banking-Finance</Link>
            </li>
            <li>
              <Link to={"healthcare"}>Healthcare</Link>
            </li>
          </ul>
        </li>
        <li className="nav__services">
          Services <BiSolidDownArrow size={"10px"} />
          <ul className="nav__submenu">
            <li>
              <Link to={"/services-e-commerce"}>E-commerce</Link>
            </li>
            <li>
              <Link to={"/services-application-development"}>
                Application Development
              </Link>
            </li>

            <li>
              <Link to={"/services-quality-assurance"}>Quality assurance</Link>
            </li>
            <li>
              <Link to={"/services-mobile-application-development"}>
                Mobile application development
              </Link>
            </li>
          </ul>
        </li>
        <li>
          {currentPage === "/" ? (
            <a href="#portfolio">Portfolio</a>
          ) : (
            <Link to={"/"}>Portfolio</Link>
          )}
        </li>
        <li className="nav__services">
          Products <BiSolidDownArrow size={"10px"} />
          <ul className="nav__submenu">
            <li>Cyber Security</li>
          </ul>
        </li>
        <li>
          <Link to={"/careers"}> Careers</Link>
        </li>
        <li>
          <a href="#contact">Contacts Us</a>
        </li>
      </ul>
    </nav>
  );
}
export default Nav_bar;
