import React from "react";
// ADD BEAUTIFUL TILES
export default function Projects() {
  return (
    <div className="Projects" id="Projects">

      <div className="card">
        <div className="card-image">
          <img src={require("../images/LifeShare.png")} alt="img" />
            <span className="card-title">LifeShare</span>
        </div>
        <div className="card-content">
          <p>
          LifeShare is an app that was created for classes. It uses React and Google Firebase to store its data. The idea behind it was to create something that is simillar to Instagram, but targeted at families and closed communities who appreciate privacy.
          </p>
        </div>
        <div className="card-action">
          <a href="https://seven730.github.io/LifeShare/#/">
            Go to project
          </a>
        </div>
      </div>

    </div>
  );
}
