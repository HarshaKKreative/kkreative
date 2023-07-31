import React from "react";
import TestimonialCard from "./TestimonialCard";

function TestimonialSlider() {
  return (
    <div className="testimonial-slider">
      <div className="slider-item">
        <TestimonialCard
          description="The team at kkreative was extremely knowledgeable and helpful in
                guiding me through the entire process. I am very pleased with
                the end result and have received many compliments on my new
                website. I highly recommend kkreative for their excellent web
                design services."
          name="Govardhan Reddy"
          position="CEO MDMANAGE"
          imgSrc={""}
        />
      </div>
      <div className="slider-item">
        <TestimonialCard
          description="I had a fantastic experience working with kkreative on a website
              redesign project. As someone who has limited technical knowledge,
              I appreciated how the team explained every step of the process in
              simple terms and made sure I was comfortable with each decision
              before moving forward."
          name="Shakti mohan"
          position="MANAGER"
          imgSrc={""}
        />
      </div>
    </div>
  );
}

export default TestimonialSlider;
