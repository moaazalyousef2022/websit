import React from 'react';
import { Link as LinkTo } from 'react-scroll';
import { Link } from 'react-router-dom';

function Navbar() {
  const navigateToSkills = () => {
    window.location.href = '/#Skills';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{ zIndex: 5, opacity: 0.6 }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ fontSize: '45px', paddingLeft: '25px' }}>
          Logo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <LinkTo
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
                style={{ cursor: 'pointer' }}
                onClick={navigateToSkills}
              >
                Skills
              </LinkTo>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                My Projects
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/company/mediavine/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin Icon"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook Icon">
                  <div className="circle"></div>
                </i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram Icon"></i>
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <button type="button" className="btn btn-custom mo3az" style={{ width: '200px', height: '50px' }}>
                  Lets Connect
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
