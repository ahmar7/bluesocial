import React, { useEffect, useState } from "react";
import "./Roadmap.css";
import Roadmapimg from "../../assets/img/roadmap.svg";
const Roadmap = () => {
  const [toggleCard, settoggleCard] = useState(false);
  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 600px)");
    if (mediaQuery.matches === true) {
      settoggleCard(true);
    } else {
      settoggleCard(false);
    }
  }, []);
  return (
    <div className="container-width section-space">
      <h1 className="platfrom-heading">Blue’s Development Roadmap</h1>
      <div className="main-roadmap">
        <div className="col1">
          <div className="roadmap-card">
            <h3>Phase 1: 2019-2020</h3>
            <div className="roadmap-list">
              <ul>
                <li>Developed Bluetooth Social Network</li>
                <li>First movers to integrate NFC Technology </li>
                <li>Raised $1M from Draper Associates</li>
                <li>Successful crowdfund from 4,000 investors</li>
              </ul>
            </div>
          </div>
          {toggleCard ? (
            <div className="roadmap-card card3 ">
              <h3>Phase 3: 2021-2022</h3>
              <div className="roadmap-list">
                <ul>
                  <li>Bluetooth Proof of Interaction™ Prrotocol</li>
                  <li>Reached 2,000,000 Social Interactions</li>
                  <li>Smart Contract development</li>
                  <li>Integrate ERC-721 (NFT ID) & ERC-20 (BST)</li>
                  <li>Social Gamification & MarketPlace</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="roadmap-card card2">
              <h3>Phase 2: 2020-2021</h3>
              <div className="roadmap-list">
                <ul>
                  <li>Generated $1,000,000+ in revenue</li>
                  <li>Network of 75,000 users worldwide </li>
                  <li>Reached 50M people digital marketing</li>
                  <li>Survived the Global Pandemic (Covid-19)</li>
                  <li>
                    Developed Bluetooth decentralized contact tracing technology
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="col2">
          <img src={Roadmapimg} alt="" />
        </div>
        <div className="col3">
          {toggleCard ? (
            <div className="roadmap-card card2">
              <h3>Phase 2: 2020-2021</h3>
              <div className="roadmap-list">
                <ul>
                  <li>Generated $1,000,000+ in revenue</li>
                  <li>Network of 75,000 users worldwide </li>
                  <li>Reached 50M people digital marketing</li>
                  <li>Survived the Global Pandemic (Covid-19)</li>
                  <li>
                    Developed Bluetooth decentralized contact tracing technology
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="roadmap-card  card3">
              <h3>Phase 3: 2021-2022</h3>
              <div className="roadmap-list">
                <ul>
                  <li>Bluetooth Proof of Interaction™ Prrotocol</li>
                  <li>Reached 2,000,000 Social Interactions</li>
                  <li>Smart Contract development</li>
                  <li>Integrate ERC-721 (NFT ID) & ERC-20 (BST)</li>
                  <li>Social Gamification & MarketPlace</li>
                </ul>
              </div>
            </div>
          )}
          <div className="roadmap-card card4">
            <h3>Phase 4: 2023-2024</h3>
            <div className="roadmap-list">
              <ul>
                <li>Launch Blue Social Token sale</li>
                <li>Grow the network 10x with 10,000 DAU</li>
                <li>Proximity Marketing SaaS Advertising Platform</li>
                <li>
                  Partner with festivals, events, conferences schools, cities
                  and other social activations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
