import React from "react";
import "./HowToPlay.css";
// import Step1 from "../../assets/img/play.svg";
import Step1 from "../../assets/img/play.svg";
import Side1 from "../../assets/img/side1.png";
import Step2 from "../../assets/img/play2.svg";
// import Steps2 from "../../assets/img/step2.png";
import Side2 from "../../assets/img/side2.png";
import Step3 from "../../assets/img/step3.svg";
import Side3 from "../../assets/img//Side3.png";
const HowToPlay = () => {
  return (
    <div className="section-space container-width">
      <h1 className="play-heading">How to play</h1>
      <p className="instructions">
        Blue Social creates an experience for you at any
      </p>
      <p className="instructions"> public social event or gathering</p>
      <div className="flex-play">
        <img draggable="false" src={Step1} alt="" />
        <img draggable="false" src={Side1} alt="" />
      </div>
      <div className="flex-play extra-gap">
        <img draggable="false" src={Side2} alt="" />
        <img draggable="false" src={Step2} alt="" />
      </div>
      <div className="flex-play">
        <img draggable="false" src={Step3} alt="" />
        <img draggable="false" src={Side3} alt="" />
      </div>
    </div>
  );
};

export default HowToPlay;
