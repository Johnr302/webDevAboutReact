import React from "react";

const Github = () => {
  return (
    <section className="card">
      <picture>
        <source
          srcset="images/Github-Thumbnail-300px.png"
          media="(pointer: coarse)"
        />
        <source srcset="images/Github-Thumbnail.png" />
        <img src="http://via.placeholder.com/300" alt="Github screenshot" />
      </picture>
      <h2>Github</h2>
      <p>
        Github has repositories of various projects that I am currently working
        on and have completed.
      </p>
      <a target="_blank" href="https://github.com/Johnr302">
        View Project
      </a>
    </section>
  );
};

export default Github;
