import React from "react";
import Icons from "./Icons";
import Footer from "./Footer";

export default function Landing(): JSX.Element {
  return (
    <div className="Landing" id="Landing">
      <p>Hello, my name is Michał</p>
      <p className="SecondaryText">I create webpages</p>
      <img src={require("../images/face.jpg")} alt="img" className="Face" />
      <Icons />
      <Footer />
    </div>
  );
}
