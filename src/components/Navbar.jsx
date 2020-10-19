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
      <Link onClick={() => animateScroll.scrollToTop()} smooth={true} duration={600}>
                Home
              </Link>

      <a className="navbar-item">
        Documentation
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          More
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider"></hr>
          <a className="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
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