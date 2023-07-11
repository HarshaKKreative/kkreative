import React from "react";

import "./card.css";

function card({ title, subtitle, description,icon }) {
  return (
    <article className="about__card">
      <div className="about__card-title">
        {icon}
        
        {title}
      </div>
      <h2> {subtitle}</h2>
      <p>{description}.</p>
    </article>
  );
}

export default card;
