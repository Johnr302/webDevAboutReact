import React from "react";
import Header from "./components/Header.js";
import SocialLinks from "./components/SocialLinks.js";
import Projects from "./components/Projects/Projects.js";
// var express = require("express");
// var app = express();

// app.get("/whack", function (req, res) {
//   res.sendFile("https://pj-whack-a-mole.netlify.app/");
// });
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
