import React from "react";
import "./card.css";

function Card({ imgSrc, title, description,delay }) {
 
  return (
    <article className="card slide-in-top" style={{animationDelay:`${delay}ms`}}>
      <section className="card__inner_container">
        <div className="card__image_container">
          <img src={imgSrc} alt="bulb" className="card__image" />
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
      </section>
    </article>
  );
}

export default Card;
