import React from "react";
import cardArray from "../constants";

function makeCard() {
  return cardArray.map((card) => {
    return (
      <Card
        srcsetMobile={card.srcsetMobile}
        srcsetDesktop={card.srcsetDesktop}
        image={card.image}
        alt={card.alt}
        title={card.title}
        description={card.description}
        viewProjectLink={card.viewProjectLink}
        viewCode={card.viewCode}
      />
    );
  });
}

const Card = (props) => {
  const {
    srcsetMobile,
    srcsetDesktop,
    image,
    alt,
    title,
    description,
    viewProjectLink,
    viewCode,
  } = { ...props };

  return (
    <section className="card">
      <picture>
        <source srcSet={srcsetMobile} media="(pointer: coarse)" />
        <source srcSet={srcsetDesktop} />
        <img src={image} alt={alt} />
      </picture>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={viewProjectLink} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
      {viewCode !== "" ? (
        <a href={viewCode} target="_blank" rel="noopener noreferrer">
          View Code
        </a>
      ) : null}
    </section>
  );
};
console.log(cardArray + "in cards JS");

export default makeCard;
