import React from "react";
import "./Countdown.css";
import Coin1 from "../../assets/img/coin1.svg";
import Coin2 from "../../assets/img/coin2.svg";
import Coin3 from "../../assets/img/coin3.svg";
const Countdown = () => {
  return (
    <div className="container-width section-space ">
      <div className="countdown">
        <img className="coin1" src={Coin1} alt="" />
        <img className="coin2" src={Coin2} alt="" />
        <img className="coin3" src={Coin3} alt="" />
        <div className="abs-countdown">
          <div className="countdown-container">
            <div className="top-strip">
              <h2>Private presale ends in</h2>
            </div>
            <div className="countdown-time">
              <div className="time-flex">
                <h3>23</h3>
                <p>days</p>
              </div>
              <div className="time-flex">
                <h3>20</h3>
                <p>hours</p>
              </div>
              <div className="time-flex">
                <h3>1</h3>
                <p>min</p>
              </div>
              <div className="time-flex">
                <h3>13</h3>
                <p>sec</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
