import React from "react";
import "./Style.scss";
import { Link, animateScroll } from "react-scroll";

export default function Navbar() {
  return (
    <div className="navbar-fixed">
      <nav>
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
    </div>
  );
}
