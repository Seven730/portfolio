import React from "react";

export default function Landing() {
  return (
    <div className="Landing" id="Landing">
      <p>Hello, my name is Michał</p>
      <p className="SecondaryText">I create webpages</p>
      <img src={require("../images/face.png")} alt="img" />
    </div>
  );
}
