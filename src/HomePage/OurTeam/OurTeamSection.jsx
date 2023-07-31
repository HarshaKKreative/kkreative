import React from "react";
import TEAM from "../../assets/images/team.jpg";
import "./OurTeamSection.css";

function OurTeamSection() {
  return (
    <section className="team">
      <div className="team__content">
        <h2>We Design, Build Brands & Digital Projects</h2>
        <p>
          kkreative is a leading web design and development company, dedicated
          to providing businesses of all sizes with high-quality, custom-built
          websites that help them succeed online.
        </p>
      </div>
      <div className="team__image">
        <img src={TEAM} alt="team" />
      </div>
    </section>
  );
}

export default OurTeamSection;
