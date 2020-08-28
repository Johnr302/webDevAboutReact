import React from "react";

const WhackAMole = () => {
  return (
    <section className="card">
      <picture>
        <source
          srcset="images/Whack-A-Mole-Thumbnail.png"
          media="(pointer: coarse)"
        />
        <source srcset="images/HQ-Whack-A-Mole-Thumbnail.png" />
        <img src="http://via.placeholder.com/300" alt="Whack-A-Mole image" />
      </picture>
      <h2>Whack-A-Mole Game</h2>
      <p>
        The object of the game is to force the individual moles back into their
        holes by hitting them directly on the head with the mallet, thereby
        adding to the player's score. Using React I built a web version of this
        game where the object is to wack the mole and gain as many points as
        possible in the alloted time.
      </p>

      <a target="_blank" href="https://pj-whack-a-mole.netlify.app/">
        View Project
      </a>
    </section>
  );
};

export default WhackAMole;
