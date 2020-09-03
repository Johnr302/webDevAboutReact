import React from "react";

const Header = () => {
  return (
    <header>
      <h1>Johnathon Regalado</h1>
      <section class="contact-info">
        <a class="phone-link" href="tel:916-317-4459">
          (916)-317-4459
        </a>
        <a
          class="email-link"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:johnathon.regalado@gmail.com"
        >
          Johnathon Regalado
        </a>
      </section>
      <img class="profile-pic" src="" alt="Johnathon" width="200" />
    </header>
  );
};

export default Header;
