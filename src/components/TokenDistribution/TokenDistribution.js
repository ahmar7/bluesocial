import React from "react";
import "./TokenDistribution.css";
import Coin3d from "../../assets/img/3dCoin.svg";
import Graph1 from "../../assets/img/graph1.png";
import Graph2 from "../../assets/img/graph2.webp";
const TokenDistribution = () => {
  return (
    <div className="section-space container-width">
      <h1 className="play-heading alter">Token Distribution</h1>
      <p className="buy-desc">
        The BST token is a utility currency stored in the Blue Wallet on the
        Ethereum blockchain. It is the unit of value that The Blue Network
        creates to “self-govern its business model and empower its users to
        interact with its products, and transact among network participants,
        while facilitating the distribution and sharing of rewards and benefits
        to all its stakeholders. Join our token presale today!
      </p>
      <div className="graph-section">
        <div className="circulation">
          <div className="coin-name">
            <img src={Coin3d} alt="" />
            <p>Name: Blue Social Token</p>
            <p>Symbol: BST</p>
            <p>Total Supply: 2,500,000,000 BST</p>
          </div>
          <div
            className="circulation-graph"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <img src={Graph1} alt="" />
          </div>
        </div>
        <div
          className="circle-graph"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1500"
        >
          <img src={Graph2} alt="" />
        </div>
      </div>
      <div className="buy-btn altwr">
        <a href="https://blue.social/" className="blue-btn  ">
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default TokenDistribution;
