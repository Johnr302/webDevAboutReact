import React from "react";

const Lucent = () => {
  return (
    <section className="card">
      <picture>
        <source
          srcset="images/Lucent1-thumbnail.png"
          media="(pointer: coarse)"
        />
        <source srcset="images/Lucent1.png" />
        <img src="http://via.placeholder.com/300" alt="Lucent screenshot" />
      </picture>
      <h2>Lucent</h2>
      <p>
        Lucent is an application to make EMDR therapy more accessible through
        technology. EMDR (Eye Movement Desensitization and Reprocessing) therapy
        is an interactive psychotherapy technique used to relieve psychological
        stress. The Lucent application provides a light tool for therapists to
        use with their clients remotely.
      </p>
      <a
        target="_blank"
        href="https://projects.invisionapp.com/d/main?origin=v7#/projects/prototypes/19690062"
      >
        View Project
      </a>
    </section>
  );
};

export default Lucent;
