import './index.css';
import {useState} from 'react';
import Logo from '../../Assets/logo-transparent-png.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin, 
    faGithub,
} from '@fortawesome/free-brands-svg-icons';

import {
    faHome,
    faUser,
    faSuitcase,
    faClose,
}from '@fortawesome/free-solid-svg-icons';

import {Link, NavLink} from 'react-router-dom';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
  
    return (
      <div className="nav-bar">
        <Link 
          className="logo"
          to="/"
          onClick={() => setShowNav(false)}>
          <img src={Logo} alt="Logo" />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
          <NavLink 
            exact="true"
            activeclassname="active"
            to="/"
            onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faHome} color="#FFFFFF" />
          </NavLink>
          <NavLink
            activeclassname="active"
            className="portfolio-link"
            to="/portfolio"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faSuitcase} color="#FFFFFF" />
          </NavLink>
          <NavLink
            activeclassname="active"
            className="involvement-link"
            to="/involvement"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faUser} color="#FFFFFF" />
          </NavLink>
          <FontAwesomeIcon 
            onClick={() => setShowNav(false)}
            icon={faClose}
            color="#FFFFFF"
            size="3x"
            className='close-icon' />
        </nav>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/ethan-elmer-0916b8267/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                color="#FFFFFF"
                size="2x"
                className="anchor-icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ethanelmer"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                color="#FFFFFF"
                size="2x"
                className="anchor-icon"
              />
            </a>
          </li>
      </ul>
    </div>
    )
  }
  
  export default Sidebar
  
