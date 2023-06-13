import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";

import "./HowToPlay.css";
import Step1 from "../../assets/img/play.svg";
import Mbl1 from "../../assets/img/mbl1.png";
import Mbl2 from "../../assets/img/mbl2.png";
import Mbl3 from "../../assets/img/mbl3.png";
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
        {/* <img draggable="false" src={Step1} alt="" />
         */}
        <div className="roadmap-card steps">
          <h3>Step 1</h3>
          <div className="roadmap-list">
            <p>Use Blue at ANY event and toggle Networking Mode.</p>
          </div>
          <img src={Mbl1} alt="" />
        </div>
        <img draggable="false" src={Side1} className="side-img" alt="" />
      </div>
      <div
        className="flex-play  "
        data-aos-offset="200"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <img draggable="false" src={Side2} className="side-img" alt="" />
        <div className="roadmap-card steps st2 ">
          <h3>Step 2</h3>
          <div className="roadmap-list">
            <p>
              When two users agree to be social — Blue uses Bluetooth
              directional & distance to find each other.
            </p>
            <p className="theme-color mt-2">No Internet or Wifi required.</p>
          </div>
          <img src={Mbl2} alt="" />
        </div>
      </div>
      <div
        className="flex-play"
        data-aos="fade-left"
        data-aos-delay="300"
        data-aos-offset="200"
        data-aos-duration="1500"
      >
        {/* <img draggable="false" src={Step3} alt="" /> */}
        <div className="roadmap-card steps st2 st3">
          <h3>Step 3</h3>
          <div className="roadmap-list">
            <p>
              Be social for at least 30 seconds to athenticate the Proof of
              Interaction.
            </p>
            <p className="theme-color mt-2">
              Once authenticated, both users will be rewarded.
            </p>
          </div>
          <img src={Mbl3} alt="" />
        </div>
        <img draggable="false" src={Side3} className="side-img" alt="" />
      </div>
    </div>
  );
};

export default HowToPlay;
