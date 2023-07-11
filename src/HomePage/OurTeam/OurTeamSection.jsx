import React from 'react'
import "./OurTeamSection.css"
import TEAM from "../../assets/images/team.jpg"


function OurTeamSection() {
  return (
    <section className="team">
      <div className="team__content">
        <h2>We Design, Build Brands & Digital Projects</h2>
        <p>
          kkreative is a leading web design and development company, dedicated to
          providing businesses of all sizes with high-quality, custom-built
          websites that help them succeed online.
        </p>
        <p>Our team of experienced designers, developers, and…</p>
        <button className='button'>Read More</button>
      </div>
      <div className='team__image'>
        <img src={TEAM} alt="team" />
      </div>
    </section>
  );
}

export default OurTeamSection