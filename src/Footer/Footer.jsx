import React from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <section className="footer__links">
        <h3>Get a quick solution to all your queries.</h3>
        <div className="footer__links-emails">
          <div>
            <h4>Customer Service No.</h4>
            <a href="tel:+91 9000500600">+91 9000500600</a>

            <h4 style={{ marginTop: "1rem" }}>Write to us</h4>
            <a href="mailto:info@kkreative.in">info@kkreative.in</a>
          </div>

          <div className="address">
            <h4>KKREATIVE CONCEPTS PRIVATE LIMITED</h4>
            <p>
              White house, 1 & 2<sup>nd</sup> floors <br /> Khairatabad,
              Hyderabad
            </p>
          </div>
          <section className="footer__icons">
            <BsTwitter size={"1.4rem"} />
            <ImLinkedin size={"1.4rem"} />
            <BsFacebook size={"1.4rem"} />
          </section>
        </div>
        <div className="footer__links-terms">
          <p>Term and Conditions</p>
          <p>Privacy Policy</p>
    
        </div>
      </section>
    </footer>
  );
}
export default Footer;
