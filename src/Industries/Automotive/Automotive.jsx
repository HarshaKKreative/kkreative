import React from 'react'
import "./Automotive.css"
import AUTOMOTIVE from "../../assets/images/automotive.jpg";
import Footer from "../../Footer/Footer";

function Automotive() {
  return (
    <>
      <section className="automotive">
        <div className="automotive-content">
          <img src={AUTOMOTIVE} alt="automotive" />
          <div>
            <h1>Overview</h1>
            <p>
              We offer innovative technology solutions that drive efficiency,
              while significantly reducing production costs by utilizing Oracle
              Application & Big data Analytics. The wide range of software
              solutions offered by us allows automotive dealers to focus on
              their core offerings and leave their IT enhancements to the
              experts at Kkreative. We understand that well-designed software
              architecture is the key to building a great software tool. We help
              automotive dealers by designing a software strategy that focuses
              on maximizing productivity using.
            </p>
            <p>
              Automotive Sales hadn't soared so high since 2007, a year before
              the economic downturn that threatened to nearly completely upend
              the market for good. Yet having learned sage lessons from the
              recent recession.
            </p>
            <ul>
              <li>
                Kkreative with its unique solutions and services is geared up to
                enable the automotive industry leverage technology for
                competitive edge.
              </li>
              <li>
                Kkreative Oracle Application management service ensures
                automotive players get the best of their ERP systems & Bigdata
                Analytics.
              </li>
              <li>
                Kkreative solution enables pluggable service-oriented
                architecture to integrate solutions into the enterprise IT
                landscape.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Automotive






