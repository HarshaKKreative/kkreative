import React from "react";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoMdArrowDroprightCircle
        style={{ ...style, color: "lightblue", fontSize: "20px" }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoMdArrowDropleftCircle
        style={{ ...style, color: "lightblue", fontSize: "20px" }}
      />
    </div>
  );
}

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 4,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function TestimonialSlider() {
  return (
    <div className="testimonial-slider">
      <Slider {...settings}>
        <div className="slider-item">
          <TestimonialCard
            description="Impressed with the results. The team was extremely professional and responsive throughout the entire process, taking the time to understand my brand and vision for the website. I've received numerous compliments from both customers and colleagues on the new site."
            name="Navin"
            position="CEO"
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
            name="Naveen Kumar"
            position="CO-FOUNDER"
            imgSrc={""}
          />
        </div>
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
      </Slider>
    </div>
  );
}

export default TestimonialSlider;
