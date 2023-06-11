import React from "react";
import "./Privatesale.css";
const Privatesale = () => {
  return (
    <div className="container-width section-space ">
      <h1 className="platfrom-heading ">
        JOIN THE BLUE SOCIAL TOKEN PRIVATE PRESALE!
      </h1>
      <div className="num-main">
        <div className="number-flex">
          {" "}
          <div className="num-sec">
            <p className="single-number">0</p>
            <p className="single-number">1</p>
            <p className="single-number">2</p>
          </div>
          <span className="coma">,</span>
          <div className="num-sec">
            <p className="single-number">3</p>
            <p className="single-number">4</p>
            <p className="single-number">5</p>
          </div>
          <span className="coma">,</span>
          <div className="num-sec">
            <p className="single-number">6</p>
            <p className="single-number">7</p>
            <p className="single-number">8</p>
          </div>
          <span className="coma">,</span>
          <div className="num-sec">
            <p className="single-number">9</p>
            <p className="single-number">0</p>
            <p className="single-number">0</p>
          </div>
        </div>
        <span className="border-line"></span>
        <p className="sale-remaining">
          <span className="theme-color">100%</span> of PreSale Blue Social
          Tokens remaining
        </p>
      </div>
    </div>
  );
};

export default Privatesale;
