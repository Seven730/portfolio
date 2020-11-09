import React from "react";

export default function Technologies() {
  return (
    <div className="Technologies">
      <div className="technologies-container">
        <header>This site uses:</header>

        <div className="site-technologies-container">
          <div className="box box-1">
            <article className="media">
              <div className="media-left">
                <figure className="logo-container">
                  <img
                    className="logo"
                    src={require("../images/React-Logo.png")}
                    alt="img"></img>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>React</strong>
                    <br />
                    My favourite framework, which I started learning in January
                    2020. Here again I use it, because of creativity it
                    indulges, because of the stability it guarantees and the
                    sheer fact that it's the best. Everyday I learn how to code
                    with it better.
                  </p>
                </div>
                <nav className="level is-mobile">
                  <div className="level-left"></div>
                </nav>
              </div>
            </article>
          </div>

          <div className="box box-2">
            <article className="media">
              <div className="media-left">
                <figure className="logo-container">
                  <img
                    className="logo"
                    src={require("../images/Bulma-Logo.png")}
                    alt="img"></img>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Bulma</strong>
                    <br />
                    The CSS framework that I wanted to test out for a long time
                    featuring great customization and styles.
                  </p>
                </div>
                <nav className="level is-mobile">
                  <div className="level-left"></div>
                </nav>
              </div>
            </article>
          </div>

          <div className="box box-3">
            <article className="media">
              <div className="media-left">
                <figure className="logo-container">
                  <img
                    className="logo"
                    src={require("../images/SASS-Logo.png")}
                    alt="img"></img>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>SASS</strong>
                    <br />
                    An amazing CSS preprocessor that I now use almost always to
                    simplify my styling process and keep my code clear. This
                    time I decided to use the SCSS syntax, as I think that
                    writing indents have positive impact on the code
                    readability.
                  </p>
                </div>
                <nav className="level is-mobile">
                  <div className="level-left"></div>
                </nav>
              </div>
            </article>
          </div>

          <div className="box box-4">
            <article className="media">
              <div className="media-left">
                <figure className="logo-container">
                  <img
                    className="logo"
                    src={require("../images/MDI-Logo.png")}
                    alt="img"></img>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Material Design Icons</strong>
                    <br />
                    Font Icons
                  </p>
                </div>
                <nav className="level is-mobile">
                  <div className="level-left"></div>
                </nav>
              </div>
            </article>
          </div>
        </div>
        {/* <div className="used-technologies-container">
          <header>Other technologies I use:</header>

          <ul>
            <li>Angular</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
