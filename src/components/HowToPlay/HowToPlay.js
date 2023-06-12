import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";

import "./HowToPlay.css";
import Step1 from "../../assets/img/play.svg";
import Side1 from "../../assets/img/side1.png";
import Step2 from "../../assets/img/play2.svg";
import Side2 from "../../assets/img/side2.png";
import Step3 from "../../assets/img/step3.svg";
import Side3 from "../../assets/img//Side3.png";
AOS.init();
const HowToPlay = () => {
  return (
    <div className="section-space howPlay container-width">
      <h1 className="play-heading">How to play</h1>
      <p className="instructions">
        Blue Social creates an experience for you at any
      </p>
      <p className="instructions"> public social event or gathering</p>
      <div
        className="flex-play"
        data-aos-delay="100"
        data-aos-offset="150"
        data-aos-duration="1500"
        data-aos="fade-left"
      >
        <img draggable="false" src={Step1} alt="" />
        <img draggable="false" src={Side1} className="side-img" alt="" />
      </div>
      <div
        className="flex-play extra-gap"
        data-aos-offset="200"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <img draggable="false" src={Side2} className="side-img" alt="" />
        <img draggable="false" src={Step2} alt="" />
      </div>
      <div
        className="flex-play"
        data-aos="fade-left"
        data-aos-delay="300"
        data-aos-offset="200"
        data-aos-duration="1500"
      >
        <img draggable="false" src={Step3} alt="" />
        <img draggable="false" src={Side3} className="side-img" alt="" />
      </div>
    </div>
  );
};

export default HowToPlay;
