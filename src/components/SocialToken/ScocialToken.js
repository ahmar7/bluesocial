import React from "react";
import "./ScocialToken.css";
import Buy1 from "../../assets/img/buy1.svg";
import Buy2 from "../../assets/img/buy2.svg";
import Buy3 from "../../assets/img/buy3.svg";
import Buy4 from "../../assets/img/buy4.svg";
import Buy5 from "../../assets/img/buy5.svg";
import Buy6 from "../../assets/img/buy6.svg";
const ScocialToken = () => {
  return (
    <div className="section-space container-width">
      <h1 className="play-heading alter">Blue social tokens (BST)</h1>
      <p className="buy-desc">
        Introducing Blue Social Tokens - the native digital in-app currency of
        the Blue Social platform built on the Ethereum blockchain. With Blue
        Social Tokens, users can earn rewards for completing social tasks,
        challenges, and participating in special events and promotions. But
        we're taking it a step further with our new Socialize-to-Earn model,
        where users can earn tokens for in-person interactions with friends,
        family, and community members.
      </p>
      <div className="buy-btn">
        <a href="https://blue.social/" className="blue-btn  ">
          Buy Now
        </a>
      </div>
      <div className="icons-buy">
        <div className="indiv-buy">
          <img src={Buy1} alt="" />
          <p>Discover Users</p>
        </div>
        <div className="indiv-buy">
          <img src={Buy2} alt="" />
          <p>Break the Ice</p>
        </div>
        <div className="indiv-buy">
          <img src={Buy3} alt="" />
          <p>Premium Features</p>
        </div>
        <div className="indiv-buy">
          <img src={Buy4} alt="" />
          <p>Mint NFT Cards</p>
        </div>
        <div className="indiv-buy">
          <img src={Buy5} alt="" />
          <p>Marketplace</p>
        </div>
        <div className="indiv-buy">
          <img src={Buy6} alt="" />
          <p>Payments</p>
        </div>
      </div>
    </div>
  );
};

export default ScocialToken;
