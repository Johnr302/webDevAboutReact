import React from "react";
import Lucent from "./Cards/Lucent.js";
import WhackAMole from "./Cards/WhackAMole.js";
import MemoryGame from "./Cards/MemoryGame.js";
import Github from "./Cards/Github.js";

const Projects = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <Lucent />
      <WhackAMole />
      <MemoryGame />
      <Github />
    </section>
  );
};

export default Projects;
