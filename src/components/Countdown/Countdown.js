import React from "react";
import "./Countdown.css";
import Coin1 from "../../assets/img/coin1.svg";
import Coin2 from "../../assets/img/coin2.svg";
import Coin3 from "../../assets/img/coin3.svg";
import CountdownTimer from "./down";
const Countdown = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
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
              <CountdownTimer targetDate={dateTimeAfterThreeDays} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
