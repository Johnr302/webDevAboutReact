import React from "react";

const MemoryGame = () => {
  return (
    <section className="card">
      <picture>
        <source
          srcset="images/Memory-Game-Thumbnail.png"
          media="(pointer: coarse)"
        />
        <source srcset="images/Memory-Game-Thumbnail.png" />
        <img
          src="http://via.placeholder.com/300"
          alt="Memory Game screenshot"
        />
      </picture>
      <h2>Memory Game</h2>
      <p>
        Built in React this is a card based memory game where the object is to
        match a pair of cards.
      </p>
      <a target="_blank" href="fixLinkHere">
        View Project
      </a>
    </section>
  );
};

export default MemoryGame;
