import React from "react";

export default function Technologies() {
  return (
    <div className="Technologies">
      <div className="technologies-container">
        <div className="site-technologies-container">
          <header>This site uses:</header>
          <ul>
            <li>React</li>
            <li>Bulma</li>
            <li>SCSS</li>
          </ul>
        </div>
        <div className="used-technologies-container">
          <header>Other technologies I use:</header>
          <ul>
            <li>Angular</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
