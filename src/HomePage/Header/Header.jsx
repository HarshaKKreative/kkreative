import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__info">
        <div className="header__content">
          <h3>TURNING YOUR ONLINE</h3>
          <h1>VISION</h1>
          <h1>INTO REALITY</h1>
          <p>
            If You're Looking for a Web Design Company That Can Help Take Your{" "}
            <br />
            Online Presence to the Next Level, Look No Further Than Our Team of
            Experts.
          </p>
        </div>
        <div className="header__buttons">
          <button className="button">
            <a href="#portfolio">View Portfolio</a>
          </button>

          <button>
            <a href="#contact">Contact Us &#62;</a>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
