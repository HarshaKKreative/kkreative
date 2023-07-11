import { BiSolidDownArrow } from "react-icons/bi";
import { ImSearch } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import LOGO from "../assets/images/logo.png";
import "./Navbar.css";

function Nav_bar({ currentPage }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    let str = e.target.children[1].value.toLowerCase();
    console.log(str);
    if (str === "home") {
      navigate("/");
    } else {
      navigate(`/${str}`);
    }
    e.preventDefault();
  };

  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src={LOGO} alt="log" />
      </div>
      <ul className="nav__items">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about-us"}> About us</Link>
        </li>
        <li className="nav__industries">
          Industries <BiSolidDownArrow size={"10px"} />
          <ul className="nav__submenu">
            <li>
              <Link to={"automotive"}>Automotive</Link>
            </li>
            <li>
              <Link to={"banking"}>Banking-Finance</Link>
            </li>
            <li>
              <Link to={"consumer-goods"}>Consumer Goods</Link>
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
              <Link to={"/services-cloud-management"}>
                Cloud Management & Monitoring
              </Link>
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
            <Link to={"/"}>Portfolio</Link>
          ) : (
            <a href="#portfolio">Portfolio</a>
          )}
        </li>
        <li className="nav__services">
          Products <BiSolidDownArrow size={"10px"} />
          <ul className="nav__submenu">
            <li>Cyber Security</li>
            <li>JavaJ2EE</li>
          </ul>
        </li>
        <li>
          <Link to={"/careers"}> Careers</Link>
        </li>
        <li>
          <a href="#contact">Contacts Us</a>
        </li>
      </ul>
      <div className="nav__search-bar">
        <form onSubmit={handleSubmit}>
          <label htmlFor="nav__search">
            <ImSearch size={"20px"} />
          </label>
          <input
            type="text"
            name="search"
            placeholder="Search.."
            id="nav__search"
            list="inputs"
            minLength={4}
            required
          />
          <datalist id="inputs">
            <option value="careers"></option>
            <option value="about-us"></option>
            <option value="home"></option>
            <option value="application-development"></option>
            <option value="home"></option>
          </datalist>
        </form>
      </div>
    </nav>
  );
}

export default Nav_bar;
