import React, { useEffect, useState } from "react";

export default function Landing() {

  const [start, finish] = useState<any>('')
  useEffect((): any => fetch('https://api.github.com/events').then(response => finish(response)), [])
  return (
    <div className="Landing" id="Landing">
      <p>Hello, my name is Michał</p>
      <p className="SecondaryText">I create webpages</p>
      <img src={require("../images/face.jpg")} alt="img" className="Face" />
    </div>
  );
}
