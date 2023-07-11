import React from "react";
import TestimonialSlider from "./TestimonialSlider";
import "./Testimonials.css";
function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <h5>TESTIMONIALS</h5>
        <p>We're Trusted by Clients</p>
      </div>
      <TestimonialSlider />
    </section>
  );
}

export default Testimonials;
