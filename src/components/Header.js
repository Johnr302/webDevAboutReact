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
          href="mailto:johnathon.regalado@gmail.com"
        >
          Johnathon Regalado
        </a>
      </section>
      <img
        class="profile-pic"
        src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/61138979_3143531755660610_8766663429554438144_n.jpg?_nc_cat=104&_nc_sid=8bfeb9&_nc_ohc=VzACoraPfwsAX_fQ2st&_nc_ht=scontent-ort2-2.xx&oh=7bd2b2decbeb5b18d3b7da4b3a43317e&oe=5F01E3D5"
        alt="Johnathon"
        width="200"
      />
    </header>
  );
};

export default Header;
