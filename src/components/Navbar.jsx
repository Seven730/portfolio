import React from "react";
import "./Style.scss";
import { Link, animateScroll } from "react-scroll";

export default function Navbar() {
  return (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
    <a href className="brand-logo left" onClick={() => animateScroll.scrollToTop()}>Michał Wojcieszak</a>
    </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <Link className="navbar-item" onClick={() => animateScroll.scrollToTop()} smooth={true} duration={600}>
        Home
      </Link>
      <Link className="navbar-item" to="Projects" smooth={true} duration={600}>
        Projects
      </Link>
      <Link className="navbar-item" to="#Technologies" smooth={true} duration={600}>
        Technologies
      </Link>
      <a className="navbar-item" href="#About">About</a>
      <a className="navbar-item" href="#Contact">Contact</a>
      <a className="navbar-item">
        Documentation
      </a>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
  )
}


{/* <div className="navbar-fixed">
      <nav class='navbar' role='navigation'>
        <div className="nav-wrapper">
          <a
            href
            className="brand-logo left"
            onClick={() => animateScroll.scrollToTop()}
          >
            Michał Wojcieszak
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
              <Link onClick={() => animateScroll.scrollToTop()} smooth={true} duration={600}>
                Home
              </Link>
            </li>
            <li>
              <Link to="Projects" smooth={true} duration={600}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="#Technologies" smooth={true} duration={600}>
                Technologies
              </Link>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div> */}