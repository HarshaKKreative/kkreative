import React from 'react'
import AVATAR from "../../assets/images/avatar.png";

function TestimonialCard({description,imgSrc,name,position}) {
  return (
    <article>
      <div className="review">
        <p>{description}</p>
      </div>
      <div className="profile">
        <img src={ imgSrc || AVATAR } alt="avatar" />
        <div>
          <h5>{name}</h5>
          <small>{position}</small>
        </div>
      </div>
    </article>
  );
}

export default TestimonialCard

