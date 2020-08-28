import React from "react";
import logo from "./logo.svg";
import "./CSS/App.css";
import Header from "./components/Header.js";
import SocialLinks from "./components/SocialLinks.js";
import Projects from "./components/Projects/Projects.js";

function App() {
  return (
    <div>
      <Header />
      <SocialLinks />
      <Projects />
    </div>
  );
}

export default App;
