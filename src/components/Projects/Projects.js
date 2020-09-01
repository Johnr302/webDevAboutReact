import React from "react";
// import Card from "Card.js";
import WhackAMole from "./Cards/WhackAMole";
import Lucent from "./Cards/Lucent";
const Projects = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <section className="auto-fit">
        <Lucent />
        <WhackAMole />
        {/* <Card /> */}
      </section>
    </section>
  );
};

export default Projects;
