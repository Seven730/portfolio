import React from "react";
import ProjectCard from "./re-usable/ProjectCard"

export default function Projects() {
  const lifeShareContent = "LifeShare is an app that was created for classes. It uses React and Google Firebase to store its data. The idea behind it was to create something that is simillar to Instagram, but targeted at families and closed communities who appreciate privacy."
  
  return (
    <ProjectCard imgSrc="../../images/LifeShare.png" title="LifeShare" content={lifeShareContent} projectLink="https://seven730.github.io/LifeShare/#/" />
  );
}
