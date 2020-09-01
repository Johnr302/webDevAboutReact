import React from "react";

const Card = (props) => {
const {srcsetMobile, srcsetDesktop, image, alt, title, description, viewProjectLink} ={...props};

return (
    <section className="card">
      <picture>
        <source
          srcset={srcsetMobile}
          media="(pointer: coarse)"
        />
        <source srcset={srcsetDesktop} />
        <img
        src={image}
          alt={alt}
        />
      </picture>
      <h2>{title}</h2>
      <p>
        {description}
      </p>
      <a target="_blank" href={viewProjectLink}>
        View Project
      </a>
    </section>
  );
};

export default Card;

}