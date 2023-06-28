import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="footer-content text-center">
          <nav className="footer-links">
            <span className="logo" style={{ fontSize: '35px', color: 'white' }}>
              LOGO
            </span>
            <div className="social-icons d-flex justify-content-center">
              <i className="fab fa-linkedin Icon" style={{ fontSize: '25px', color: 'white', marginRight: '10px' }}></i>
              <i className="fab fa-facebook Icon" style={{ fontSize: '25px', color: 'white', marginRight: '10px' }}></i>
              <i
                className="fab fa-instagram Icon"
                style={{ fontSize: '25px', color: 'white', marginRight: '10px' }}
              ></i>
            </div>
            <p style={{ color: 'white' }}>© 2023 Your Website. All rights reserved.</p>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
