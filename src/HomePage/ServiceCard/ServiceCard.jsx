import React from 'react'
import "./ServiceCard.css"


function ServicesCard({imgSrc,title}) {
  return (
    <article className="service-card">
      <div>
        <img src={imgSrc} alt="notes" />
        <h4 className='service-card__title'>{title}</h4>
      </div>
    </article>
  );
}

export default ServicesCard

