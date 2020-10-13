import React from 'react'

interface IProjectCard {
    imgSrc: string,
    title: string,
    content: string
    projectLink: string
}

export default function ProjectCard({imgSrc, title, content, projectLink}: IProjectCard): JSX.Element {
    return (
    <div className="Projects" id="Projects">
      <div className="card">
        <div className="card-image">
          <img src={require("../../images/LifeShare.png")} alt="img" />
            <span className="card-title">{title}</span>
        </div>
        <div className="card-content">
          <p>
            {content}
          </p>
        </div>
        <div className="card-action">
          <a href={projectLink}>
            Go to project
          </a>
        </div>
      </div>
    </div>
    )
}
