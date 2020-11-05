import React, { useState } from "react";

export default function Projects() {
  const [card, setCard] = useState<number>(1);

  return (
    <div className="Projects" id="Projects">
      <div className="slider-container">
        <div className="slider">
          <div className="card-container">
            <div className="card project-card-1" id="project-card-1">
              <header className="card-header">
                <p className="card-header-title">LifeShare</p>
              </header>
              <div className="card-image">
                {/* <figure className="image is-128x128"> */}
                <img src={require("../images/LifeShare-img.png")} alt="img" />
                {/* </figure> */}
              </div>
              <div className="card-content">
                <p>
                  LifeShare is an app that was created for classes. It uses{" "}
                  <span className="bold-word">React</span> and{" "}
                  <span className="bold-word">Google Firebase</span> to store
                  its data. The idea behind it was to create something that is
                  simillar to Instagram, but targeted at families and closed
                  communities who appreciate privacy.
                </p>
              </div>
              <footer className="card-footer">
                <a
                  className="card-footer-item"
                  href="https://seven730.github.io/LifeShare/#/">
                  Project
                </a>
                <a
                  className="card-footer-item"
                  href="https://seven730.github.io/LifeShare/">
                  Project page
                </a>
                <a
                  className="card-footer-item"
                  href="https://github.com/Seven730/LifeShare">
                  GitHub repo
                </a>
              </footer>
            </div>
          </div>

          <div className="card-container">
            <div className="card project-card-2" id="project-card-2">
              <header className="card-header">
                <p className="card-header-title">Bookshop E-commerce</p>
              </header>
              <div className="card-image">
                <img src={require("../images/e-commerce-img.png")} alt="img" />
              </div>
              <div className="card-content">
                <p>
                  This is a project made using{" "}
                  <span className="bold-word">Angular</span>. I wanted to try
                  out using something different than React and was very happy
                  with the end result. The backend was provided by my friend. It
                  uses <span className="bold-word">SASS</span> &{" "}
                  <span className="bold-word">Angular Material</span> for
                  styling. It's a recent project.
                </p>
              </div>
              <footer className="card-footer">
                <a
                  className="card-footer-item"
                  href="https://github.com/Seven730/ecommerce-frontend">
                  GitHub repo
                </a>
              </footer>
            </div>
          </div>

          <div className="card-container">
            <div className="card project-card-3" id="project-card-3">
              <header className="card-header">
                <p className="card-header-title">React-Redux-TS-Demo</p>
              </header>
              <div className="card-image">
                {/* <img
                  src={require("../images/React-Redux-TS-Demo-img.png")}
                  alt="img"
                /> */}
              </div>
              <div className="card-content">
                <p>
                  It's an old project created just to understand the three
                  technologies better. Also, it was used as an example in my
                  thesis "Modern Front-End Web Development based on React, Redux
                  and TypeScript". Not flashy, but helped me understand basic
                  concepts of Redux & TS at the time.
                </p>
              </div>
              <footer className="card-footer">
                <a
                  className="card-footer-item"
                  href="https://github.com/Seven730/React-Redux-TS-demo">
                  GitHub repo
                </a>
              </footer>
            </div>
          </div>
        </div>
        <a
          href={`#project-card-${card}`}
          onClick={(): void => {
            if (card >= 1) setCard(card - 1);
          }}>
          Left
        </a>
        <a
          href={`#project-card-${card}`}
          onClick={(): void => {
            if (card <= 3) setCard(card + 1);
          }}>
          Right
        </a>
      </div>
    </div>
  );
}
