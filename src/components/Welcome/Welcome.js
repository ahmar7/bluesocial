import React from "react";
import "./Welcome.css";
import WelcomeBg from "../../assets/img/bg-welcome.png";
const Welcome = () => {
  return (
    <div className="section-space container-width">
      <h1 className="platfrom-heading ">Welcome to Blue</h1>
      <p className="theme-color welcome">The New Way to Network® is here!</p>
      <img className="welcome-bg" src={WelcomeBg} alt="" />
      <p className="instructions">
        Blue Social is a Web3 lifestyle app that rewards users for being social
      </p>
      <p className="instructions">
        in-person. Users equipped with Blue NFT Identities can earn rewards
      </p>
      <p className="instructions">
        through Blue’s Proof-of-Interaction™ Bluetooth Protocol
      </p>
    </div>
  );
};

export default Welcome;
