import React from "react";
import "./Banner.css";
import BannerImg from "../../assets/img/banner.png";
const Banner = () => {
  return (
    <div className="main-banner container-width">
      <div className="banner-text">
        <h1>
          MAKE A STAND, GET IN EARLY ON THE BLUE SOCIAL TOKEN PRIVATE PRESALE
        </h1>
        <p>
          Blue Social is the worlds first Socialize-to-Earn platform that uses
          Self-Sovereign Digital Identities and lets you earn rewards and make
          money through meeting others [and other simple social actions].
        </p>
        <h3>And it's EASY to buy the token in our PRESALE.</h3>
        <div className="btn-container">
          <a href="https://blue.social/" className="blue-btn">
            Buy Now
          </a>
          <a href="https://blue.social/" className="simple-btn">
            Whitepaper
          </a>
        </div>
      </div>
      <div className="banner-img">
        <img src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
