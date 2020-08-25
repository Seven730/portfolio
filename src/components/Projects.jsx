import React from "react";

export default function Projects() {
  return (
    <div className="Projects" id="Projects">
      <div className="row">
        <div className="col s5">
          <div className="card" id="leftCard">
            <div className="card-image">
              <img src={require("../images/LifeShare.png")} alt="img" />
              <span className="card-title">LifeShare</span>
            </div>
            <div className="card-content">
              <p>
                LifeShare is an app that was created for classes. It uses React
                and Google Firebase to store its data.
              </p>
            </div>
            <div className="card-action">
              <a href="index.html">Go to project</a>
            </div>
          </div>
        </div>
        <div className="col s5 pull-s1">
          <div className="card" id="rightCard">
            <div className="card-image">
              <img src={require("../images/LifeShare.png")} alt="img" />
              <span className="card-title">LifeShare</span>
            </div>
            <div className="card-content">
              <p>
                LifeShare is an app that was created for classes. It uses React
                and Google Firebase to store its data.
              </p>
            </div>
            <div className="card-action">
              <a href="index.html">Go to project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
