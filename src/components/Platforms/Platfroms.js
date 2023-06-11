import React from "react";
import "./Platfroms.css";
import Draper from "../../assets/img/image 8.png";
import NewYork from "../../assets/img/image 48.png";
import Forbes from "../../assets/img/image 44.png";
import Yahoo from "../../assets/img/image 45.png";
import Uni from "../../assets/img/image 49.png";
import Abc from "../../assets/img/image 47.png";
const Platfroms = () => {
  return (
    <div className="section-space text-center container-width">
      <h1 className="platfrom-heading ">As seen on</h1>
      <div className="social-flex">
        <a href="https://blue.social" className="single-social">
          <img src={Draper} alt="" />
        </a>
        <a href="https://blue.social" className="single-social">
          <img src={NewYork} alt="" />
        </a>
        <a href="https://blue.social" className="single-social">
          <img src={Forbes} alt="" />
        </a>
        <a href="https://blue.social" className="single-social">
          <img src={Yahoo} alt="" />
        </a>
        <a href="https://blue.social" className="single-social">
          <img src={Uni} alt="" />
        </a>
        <a href="https://blue.social" className="single-social">
          <img src={Abc} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Platfroms;
