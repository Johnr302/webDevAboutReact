import React from "react";
import cardArray from "../../constants";

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
      <a href={viewProjectLink} target="_blank" rel="noreferrer noopener">
        View Project
      </a>
    </section>
  );
};
console.log(cardArray + "in cards JS");

export default makeCard;
