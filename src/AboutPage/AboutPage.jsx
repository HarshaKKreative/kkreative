import React from "react";
import { BsFillBookFill } from "react-icons/bs";
import Footer from "../Footer/Footer";
import "./AboutPage.css";
import Card from "./card";

function AboutPage() {
  return (
    <section className="about">
      <div className="about__title">
        <h1>
          We Do Things <br /> That Matters
        </h1>
      </div>

      <div className="about__cards-container">
        <Card
          icon={<BsFillBookFill size={"2rem"} />}
          title="LEARN"
          subtitle="We Ask the Right Questions About Your Business"
          description="Before we start any project, we take the time to get to know your
        business. We ask the right questions to gain a deep understanding of
        your business, target audience, and competition."
        />
        <Card
          icon={<BsFillBookFill size={"2rem"} />}
          title="PLAN"
          subtitle="Developing Customized Solutions"
          description="Once we have a clear understanding of your business, we work alongside you to develop customized solutions that meet your specific needs. We deliver a solution that meets your expectations."
        />
        <Card
          icon={<BsFillBookFill size={"2rem"} />}
          title="EXECUTE"
          subtitle="Launching Your Solutions"
          description="We don't just develop your solutions and leave you to it. We work alongside you to launch your solutions and provide ongoing support and maintenance to ensure that they continue to meet your needs over time."
        />
      </div>

      <div className="about__kkreative">
        <h2>What We Are</h2>
        <p>
          Kkreative is the strategic business-consulting firm. Our client base
          spans a wide range of industries including—Communication, Consumer
          &amp; Retail, Energy &amp; Utilities, Financial Services, Government
          &amp; Security, Health Care and Industrials.
        </p>
        <p>
          Kkreative has proven experience developing and deploying application
          systems for many countries including United States America, South
          Africa, Singapore and India.
        </p>
        <p>
          We provides the highest quality, most cost effective client solutions
          in a timely and cost-effective manner.
        </p>
        <p>
          Kkreative has the integrity, commitment and dedication to get the job
          done quickly and effectively to our client's satisfaction.
        </p>
        <p>Kkreative has proven experience developing application system for many countries including USA, South Africa, Singapore and India.</p>
      </div>
      <Footer />
    </section>
  );
}

export default AboutPage;
