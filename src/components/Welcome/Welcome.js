import React, { useState } from "react";
import "./Welcome.css";
import WelcomeBg from "../../assets/img/bg-welcome.png";
const Welcome = () => {
  const [toggleVideo, settoggleVideo] = useState(false);
  return (
    <div className="section-space container-width">
      <h1 className="platfrom-heading ">Welcome to Blue</h1>
      <p className="theme-color welcome">The New Way to Network® is here!</p>
      <div className="video">
        {toggleVideo ? (
          <iframe
            className="welcome-bg video iframe"
            src="https://www.youtube.com/embed/7zQHIPmTD50"
            title="Blue Social - Launch Video 2022"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        ) : (
          <img
            className="welcome-bg"
            onClick={() => settoggleVideo(true)}
            src={WelcomeBg}
            alt=""
          />
        )}
      </div>
      <div className="last-inst">
        <p className="instructions">
          Blue Social is a Web3 lifestyle app that rewards users for being
          social
        </p>
        <p className="instructions">
          in-person. Users equipped with Blue NFT Identities can earn rewards
        </p>
        <p className="instructions">
          through Blue’s Proof-of-Interaction™ Bluetooth Protocol
        </p>
      </div>
    </div>
  );
};

export default Welcome;
