import React, { useState } from "react";
import Landing from "./Landing";
import Projects from "./Projects";
import Technologies from "./Technologies";
import About from "./About";
import Contact from "./Contact";
import "./Style.scss";

export default function Screens(): JSX.Element {
  const [screen, setScreen] = useState<JSX.Element>(<Landing />);

  const [homeItemClass, setHomeItemClass] = useState<string>("navbar-item");
  const [projectsItemClass, setProjectsItemClass] = useState<string>(
    "navbar-item"
  );
  const [technologiesItemClass, setTechnologiesItemClass] = useState<string>(
    "navbar-item"
  );
  const [aboutItemClass, setAboutItemClass] = useState<string>("navbar-item");
  const [contactItemClass, setContactItemClass] = useState<string>(
    "navbar-item"
  );

  const [isBurgerActive, setIsBurgerActive] = useState<boolean>(false);

  // const resetItemsClass = (activeItem: string): void => {
  //   const array = ["Home", "Projects", "Technologies", "About", "Contact"]
  //   setHomeItemClass("navbar-item-active");
  //   setProjectsItemClass("navbar-item");
  //   setTechnologiesItemClass("navbar-item");
  //   setAboutItemClass("navbar-item");
  //   setContactItemClass("navbar-item");
  // };

  const onClickHandler = (tab: string) => {
    switch (tab) {
      case "Home":
        setScreen(<Landing />);
        setHomeItemClass("navbar-item-active");
        setProjectsItemClass("navbar-item");
        setTechnologiesItemClass("navbar-item");
        setAboutItemClass("navbar-item");
        setContactItemClass("navbar-item");
        break;
      case "Projects":
        setScreen(<Projects />);
        setProjectsItemClass("navbar-item-active");
        setHomeItemClass("navbar-item");
        setTechnologiesItemClass("navbar-item");
        setAboutItemClass("navbar-item");
        setContactItemClass("navbar-item");
        break;
      case "Technologies":
        setScreen(<Technologies />);
        setTechnologiesItemClass("navbar-item-active");
        setProjectsItemClass("navbar-item");
        setHomeItemClass("navbar-item");
        setAboutItemClass("navbar-item");
        setContactItemClass("navbar-item");
        break;
      case "About":
        setScreen(<About />);
        setAboutItemClass("navbar-item-active");
        setProjectsItemClass("navbar-item");
        setTechnologiesItemClass("navbar-item");
        setHomeItemClass("navbar-item");
        setContactItemClass("navbar-item");
        break;
      case "Contact":
        setScreen(<Contact />);
        setContactItemClass("navbar-item-active");
        setProjectsItemClass("navbar-item");
        setTechnologiesItemClass("navbar-item");
        setAboutItemClass("navbar-item");
        setHomeItemClass("navbar-item");
        break;
    }
  };

  return (
    <div className="Screens">
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation">
        <div className="navbar-brand">
          <a href="/" className="brand-logo left">
            Michał Wojcieszak
          </a>
          <button
            className="navbar-burger"
            onClick={() => setIsBurgerActive(!isBurgerActive)}
            aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <p
              className={homeItemClass}
              onClick={(): void => setScreen(<Landing />)}>
              Home
            </p>
          </button>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start"></div>
          <div className="navbar-end">
            <button
              className={homeItemClass}
              onClick={(): void => onClickHandler("Home")}>
              Home
            </button>
            <button
              className={projectsItemClass}
              onClick={(): void => onClickHandler("Projects")}>
              Projects
            </button>
            <button
              className={technologiesItemClass}
              onClick={(): void => onClickHandler("Technologies")}>
              Technologies
            </button>
            <button
              className={aboutItemClass}
              onClick={(): void => onClickHandler("About")}>
              About
            </button>
            <button
              className={contactItemClass}
              onClick={(): void => onClickHandler("Contact")}>
              Contact
            </button>
          </div>
        </div>
      </nav>
      {screen}
    </div>
  );
}
