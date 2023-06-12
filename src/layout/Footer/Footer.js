import React from "react";
import "./Footer.css";
import SubArrow from "../../assets/img/sub-arrow.svg";
import DownPrice from "../../assets/img/down-price.svg";
import C1 from "../../assets/img/c1.svg";
import C2 from "../../assets/img/c2.svg";
import C3 from "../../assets/img/c3.svg";
import C4 from "../../assets/img/c4.svg";
import C5 from "../../assets/img/c5.svg";
import C6 from "../../assets/img/c6.svg";
import C7 from "../../assets/img/c7.svg";
import C8 from "../../assets/img/c8.svg";
import C9 from "../../assets/img/c9.svg";
const Footer = () => {
  return (
    <div className="section-space">
      <div className="sub-section">
        <div className="container-width">
          <h1 className="sub-head">
            Yes, please keep in the Loop on Blue Social
          </h1>
          <p className="sub-para">
            Connect with others in person and Earn Rewards.
          </p>
          <form className="email-container" action="">
            <input
              type="email"
              placeholder="name@email.com"
              required
              name=""
              id=""
            />
            <button className="sub-btn" type="submit">
              <img src={SubArrow} alt="" />
            </button>
          </form>
        </div>
      </div>
      <div className="footer-flex  container-width">
        <div className="footer-nav">
          <div className="left-link">
            <h1>Quick links</h1>
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Terms of Service</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Shipping & Delivery</a>
              </li>
            </ul>
          </div>
          <div className="left-link">
            <h1 className="hidden"> a</h1>
            <ul>
              <li>
                <a href="">Returns and refunds</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Reseller</a>
              </li>
              <li>
                <a href="">SEC</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-nav two">
          <div className="left-link justify-start">
            <h1 className="">A company built by people for people.</h1>
            <ul className="descs">
              <li>
                Established in 2016, Blue's mission has always been to use
                contactless technology to maximize your social opportunities at
                events, conferences, school, and more!
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="news-letter">
        <h1>Subscribe to our Newsletter</h1>
        <form className="email-container" action="">
          <input
            type="email"
            placeholder="name@email.com"
            required
            name=""
            id=""
          />
          <button className="sub-btn" type="submit">
            <img src={SubArrow} alt="" />
          </button>
        </form>
      </div>
      <hr className="footer-line" />
      <div className="container-width country-tags">
        <div className="left-tag">
          <h1>Country/region</h1>
          <div className="drop-down-price">
            <p>United States (USD $)</p>
            <img src={DownPrice} alt="" />
          </div>
        </div>
        <div className="left-tag">
          <div className="pay-opt">
            <img src={C1} alt="" />
            <img src={C2} alt="" />
            <img src={C3} alt="" />
            <img src={C4} alt="" />
            <img src={C5} alt="" />
            <img src={C6} alt="" />
            <img src={C7} alt="" />
            <img src={C8} alt="" />
            <img src={C9} alt="" />
          </div>
          <div className="about">
            <p>© 2023, Blue Social Powered by Shopify</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
