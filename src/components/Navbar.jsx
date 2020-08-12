import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div class="nav-wrapper">
          <a href="index.html" class="brand-logo left">
            Logo
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="index.html">My projects</a>
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
