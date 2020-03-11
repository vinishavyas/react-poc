import React from 'react';
import '../Header/Header.css';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <React.Fragment>
      <header>
        <div className="container">
          <div className="logo"> <Link to={`/index`}><img src={logo} alt="logo" /></Link> </div>
          <div className="navbar-menu">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active"> <Link to={`/index`} className="nav-link">Home</Link> </li>
                  <li className="nav-item"> <Link to={`/index`} className="nav-link">Jobs</Link></li>
                  <li className="nav-item"><Link to={`/HowItWorks`} className="nav-link">How It Works</Link> </li>
                  <li className="nav-item"><Link to={`/index`} className="nav-link">Contact Us</Link></li>

                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <div className="clearfix"></div>
    </React.Fragment>
  );
}

export default Header;
