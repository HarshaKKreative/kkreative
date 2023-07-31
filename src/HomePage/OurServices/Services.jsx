import React from "react";
import MONITOR from "../../assets/images/monitor.svg";
import PHONE from "../../assets/images/phone.svg";
import ServicesCard from "../ServiceCard/ServiceCard";
import "./services.css";

function Services() {
  return (
    <section className="services">
      <div>
        <div className="services__set-1">
          <ServicesCard imgSrc={PHONE} title={"App Development"} />
          <ServicesCard imgSrc={MONITOR} title={"Web Design"} />
        </div>

        <div className="services__info">
          <h2>Empowering Your Online Presence with Expert Services</h2>
          <p>
            We're here to help you bring your business to life online with
            everything from beautiful site design and development to effective
            digital marketing solutions. Our skilled staff works arduously to
            develop specialized solutions catered to your particular
            requirements, making sure that your brand stands out and achieves
            its full potential in the digital world.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
