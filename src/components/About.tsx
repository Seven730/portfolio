import React from "react";

export default function About() {
  return (
    <div className="About">
      <div className="card-container">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">About</p>
          </header>
          <div className="card-content">
            <div className="block">
              <p>
                I am 24 yo developer based near Cracow, who is currently
                unemployed and studying Applied Informatics (Master's Degree) at
                Cracow University of Economics.
              </p>
            </div>
            <div className="block">
              <p>
                Making this beautiful page was possible thanks to{" "}
                <span className="bold-word">React</span> and{" "}
                <span className="bold-word">Bulma</span>. I enjoyed woking on
                this very much and I hope - whoever reads it - you like the
                effect too!
              </p>
            </div>
            <span>
              Photo by{" "}
              <a href="https://unsplash.com/@mvds?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Mads Schmidt Rasmussen
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/s/photos/white-background?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Unsplash
              </a>
            </span>
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
    </div>
  );
}
