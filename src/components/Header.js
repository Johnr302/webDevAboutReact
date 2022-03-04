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
        <a class="resume" href="images/Johnathon_Regalado_Resume.pdf" download>
          Resume
        </a>
      </section>
      <img class="profile-pic" src="images/profile-pic2.jpeg" alt="Johnathon" />
    </header>
  );
};

export default Header;
