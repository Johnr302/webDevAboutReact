import React from "react";

const SocialLinks = () => {
  return (
    <section>
      <ul class="social-links">
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/johnathon-regalado-a4b00b1a5/"
            rel="noopener noreferrer"
          >
            <img
              class="social-link-item social-link-item-linkedin"
              src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
              alt="linked in"
            />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://github.com/johnr302"
            rel="noopener noreferrer"
          >
            <img
              class="social-link-item social-link-item-github"
              src="https://cdn3.iconfinder.com/data/icons/sociocons/256/github-sociocon.png"
              alt="github"
            />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SocialLinks;
