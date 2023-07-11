import React from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      {/* <section className="footer__logo">
        {/* <h2>KKreative Concepts PVT LTD</h2>
        <p>IT Consulting Services and Solutions.</p>
        <p>
          kkreative is a new generation global software company that understands
          business and its software requirements. We provide quality IT services
          and integrated solutions to the Industry.
        </p>
      </section> */}

      <section className="footer__links">
        <h3>Get a quick solution to all your queries.</h3>
        <div className="footer__links-emails">
          <div>
            <h4>Customer Service No.</h4>
            <a href="tel:+91 9000500600">+91 9000500600</a>
          </div>
          <div>
            <h4>Help</h4>
            <a href="mailto:info@kkreative.in">info@kkreative.in</a>
          </div>
          <div>
            <h4>Write to us</h4>
            <a href="mailto:support@kkreative.in">support@kkreative.in</a>
          </div>
        </div>
        <div className="footer__links-terms">
          <p>Term and Conditions</p>
          <p>Privacy Policy</p>
          <p>FAQ</p>
        </div>
      </section>

      <section className="footer__addresses">
        <div className="address">
          <h4>KKREATIVE CONCEPTS PRIVATE LIMITED</h4>
          <p>
            #402, Block B, MVV Aurum <br /> HI-Tech City <br /> Kondapur,
            Hyderabad <br />
          </p>
        </div>
        <div className="address">
          <h4>KKREATIVE CONCEPTS PRIVATE LIMITED</h4>
          <p>
            #6-2-659/3/2/1 <br /> White house, 1 & 2<sup>nd</sup> floors <br />{" "}
            Khairatabad, Hyderabad
          </p>
        </div>
        <section className="footer__icons">
          <BsTwitter size={"1.4rem"} />
          <ImLinkedin size={"1.4rem"} />
          <BsFacebook size={"1.4rem"} />
        </section>
      </section>
    </footer>
  );
}

export default Footer;
