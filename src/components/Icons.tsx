import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Icons() {
  return (
    <div className="Icons">
      <a href="https://github.com/Seven730">
        <FontAwesomeIcon icon={faGithub} className="GithubIcon" />
      </a>
      <a href="https://github.com/Seven730">
        <FontAwesomeIcon icon={faLinkedin} className="LinkedInIcon" />
      </a>
      <a href="https://www.codewars.com/users/Seven73">
        <img
          src={require("../images/CodewarsIcon.png")}
          alt="img"
          className="CodewarsIcon"
        />
      </a>
    </div>
  );
}
