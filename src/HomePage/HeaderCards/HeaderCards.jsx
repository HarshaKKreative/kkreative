import React from "react";
import BRAIN from "../../assets/images/brain.png";
import Card from "../Card/Card";
import "./HeaderCard.css"
import IDEAS from "../../assets/images/ideas.png";
import BULB from "../../assets/images/bulb.png";

function HeaderCards() {
  return (
    <section className="header-cards">
      <Card
        title={"Creative Design"}
        imgSrc={BULB}
        description={
          "we specialize in creating visually stunning designs that not only capture the attention of your customers, but also convey your brand message effectively."
        }
        delay={0}
      />
      <Card
        title={"Super Ideas"}
        imgSrc={IDEAS}
        description={
          "Whether you need a new marketing strategy, a unique website feature, or any other out-of-the-box solution, we're here to help."
        }
        delay={500}
      />
      <Card
        title={"Smart Planning"}
        imgSrc={BRAIN}
        description={
          "Whether you're looking to launch a new product, revamp your website, or create a marketing campaign, we're here to help."
        }
        delay={1000}
      />
    </section>
  );
}

export default HeaderCards;
