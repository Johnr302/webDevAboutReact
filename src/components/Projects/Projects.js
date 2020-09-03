import React from "react";
import makeCard from "./Cards/Card";

const Projects = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <section className="auto-fit">{makeCard()}</section>
    </section>
  );
};

export default Projects;
