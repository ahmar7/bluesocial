import React from "react";
import QuoteUp from "../../assets/img/quoteup.png";
import QuoteDown from "../../assets/img/quotedown.png";
import AuthorImg from "../../assets/img/author-img.png";
import Map from "../../assets/img/map.svg";
import "./Quote.css";
const Quote = () => {
  return (
    <div className="section-space container-width">
      <h1 className="platfrom-heading">
        Backed By Legendary Investor Tim Draper
      </h1>
      <div className="quote-flex">
        <div className="quote-text">
          <img className="upquote" src={QuoteUp} alt="" />
          <p>
            Jose and his family are focused and driven to make Blue the success
            they know it will be. I like the opportunity and the market as well
            as the network effects in this business that is built on contact
            information. I invested and I am thrilled with their progress, even
            though a covid slump.
            <br />
            <div className="author-name theme-color">— Tim Draper</div>
          </p>
          <img className="downquote" src={QuoteDown} alt="" />
        </div>
        <div className="author-img">
          <img src={AuthorImg} alt="" />
        </div>
      </div>
      <div className="map">
        <img draggable="false" src={Map} alt="" />
      </div>
      <div className="btn-container quoute-buy">
        <a href="https://blue.social/" className="blue-btn">
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default Quote;
