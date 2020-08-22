import React from "react";
import "./Style.scss";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="index.html" className="brand-logo left">
            Michał Wojcieszak
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="index.html">Projects</a>
            </li>
            <li>
              <a href="index.html">Technologies</a>
            </li>
            <li>
              <a href="index.html">About</a>
            </li>
            <li>
              <a href="index.html">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
