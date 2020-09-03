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
              src="https://image.flaticon.com/icons/svg/145/145807.svg"
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
