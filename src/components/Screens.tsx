import React, { useState } from 'react'
import Landing from './Landing'
import Projects from './Projects'
import Technologies from './Technologies'
import About from './About'
import Contact from './Contact'
import "./Style.scss";

export default function Screens(): JSX.Element {
    const [screen, setScreen] = useState<JSX.Element>(<Landing />)

    return (
    <div className="Screens">
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a href='/' className="brand-logo left">Michał Wojcieszak</a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
          </div>
          <div className="navbar-end">
            <button className="navbar-item" onClick={() => setScreen(<Landing />)}>Home</button>
            <button className="navbar-item" onClick={() => setScreen(<Projects />)}>Projects</button>
            <button className="navbar-item" onClick={() => setScreen(<Technologies />)}>Technologies</button>
            <button className="navbar-item" onClick={() => setScreen(<About />)}>About</button>
            <button className="navbar-item" onClick={() => setScreen(<Contact />)}>Contact</button>
            <div className="navbar-item"></div>
          </div>
        </div>
      </nav>
        {screen}
    </div>
    )
  }
