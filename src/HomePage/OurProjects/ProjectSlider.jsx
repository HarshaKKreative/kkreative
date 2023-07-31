import React from "react";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import Slider from "react-slick";
import "./ProjectSlider.css";


import project_10 from "../../assets/images/project_10.jpg";
import project_11 from "../../assets/images/project_11.jpg";
import project_3 from "../../assets/images/project_3.png";
import project_4 from "../../assets/images/project_4.png";
import project_5 from "../../assets/images/project_5.png";
import project_6 from "../../assets/images/project_6.png";
import project_7 from "../../assets/images/project_7.png";
import project_8 from "../../assets/images/project_8.png";
import project_9 from "../../assets/images/project_9.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoMdArrowDroprightCircle
        style={{ ...style, color: "lightblue", fontSize: "30px" }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoMdArrowDropleftCircle
        style={{ ...style, color: "lightblue", fontSize: "30px" }}
      />
    </div>
  );
}

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
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

function ProjectSlider() {

  return (
    <div className="project-slider" id="portfolio">
      <h2>Some of our finest works</h2>
      <Slider {...settings}>
        <div className="slider-item">
          <img src={project_3} alt="project" />
        </div>
        <div className="slider-item">
          <img src={project_4} alt="project" />
        </div>
        <div className="slider-item">
          <img src={project_5} alt="project" />
        </div>
        <div className="slider-item">
          <img src={project_6} alt="project" />
        </div>
        <div className="slider-item">
          <img src={project_7} alt="project" />
        </div>
        <div className="slider-item">
          <img src={project_8} alt="project" />
        </div>
        <div className="slider-item">
          <img src={project_9} alt="project" width={"230"}/>
        </div>
        <div className="slider-item">
          <img src={project_10} alt="project" width={"200"}/>
        </div>
        <div className="slider-item">
          <img src={project_11} alt="project" width={"250"}/>
        </div>
      </Slider>
    </div>
  );
}

export default ProjectSlider;
