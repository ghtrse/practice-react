import React, { useState, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => setClick(false);
  return (
    <Fragment>
      <nav className="navbar">
        <div className="container flex_space">
          <div className="menu-icon" onClick={clickHandler}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className={click ? "active" : " "}>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/" onClick={closeMobileMenu}>Home</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/about" onClick={closeMobileMenu}>About</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/gallery" onClick={closeMobileMenu}>Gallery</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/destination" onClick={closeMobileMenu}>Destination</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/blog" onClick={closeMobileMenu}>Blog</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/testimonials" onClick={closeMobileMenu}>Testimonials</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/contact" onClick={closeMobileMenu}>Contact us</NavLink>
            </li>
          </ul>

          <div className="login-area flex">
            <li>
              <Link to="/sign-in">
                <i className="fas fa-chevron-right"></i>Sign in
              </Link>
            </li>
            <li>
              <Link to="/register">
                <i className="fas fa-chevron-right"></i>Register
              </Link>
            </li>
            <li>
              <Link to="/sign-in">
                <button className="primary-btn">Request a quote</button>
              </Link>
            </li>
          </div>
        </div>
      </nav>


      <header>
          <div className="container flex_space">
              <div className="logo">
                  <img src="images/logo.png" alt="" />
              </div>
              <div className="contact flex_space">
                  <div className="box flex_space">
                      <div className="icons">
                          <i className="fas fa-clock"></i>
                      </div>
                      <div className="text">
                          <h4>
                              Working hours
                          </h4>
                          <Link to="/contact"> Monday - Sunday: 9.00am to 6.00pm</Link>
                      </div>
                  </div>
                  <div className="box flex_space">
                      <div className="icons">
                          <i className="fas fa-phone-volume"></i>
                      </div>
                      <div className="text">
                          <h4>
                              Call us
                          </h4>
                          <Link to="/contact">+123 456 789</Link>
                      </div>
                  </div>
                  <div className="box flex_space">
                      <div className="icons">
                          <i className="fas fa-envelope"></i>
                      </div>
                      <div className="text">
                          <h4>
                              Mail us
                          </h4>
                          <Link to="/contact">info@gmail.com</Link>
                      </div>
                  </div>
              </div>
          </div>
      </header>
    </Fragment>
  );
};
export default Navbar;
