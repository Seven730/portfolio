import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Icons from "./components/Icons";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Icons />
      {/* <Projects /> */}
      <Footer />
    </div>
  );
}

export default App;
