import React from "react";
import Logo from "../../assets/img/logo.png";
import Search from "../../assets/img/search.png";
import Cart from "../../assets/img/cart.png";
import "./Header.css";
const Header = () => {
  return (
    <nav className="main-header">
      <div className="flex-header container-width">
        <div className="left-content">
          <a href="https://blue.social/">
            <img src={Logo} alt="" />
          </a>
          <div className="links">
            <ul className="nav-link">
              <li>
                <a href=" " className="active">
                  Home
                </a>
              </li>
              <li>
                <a href=" ">Blue Pro</a>
              </li>
              <li>
                <a href=" ">Shop</a>
              </li>
              <li>
                <a href=" ">Events</a>
              </li>
              <li>
                <a href=" ">About</a>
              </li>
              <li>
                <a href=" ">Affiliates</a>
              </li>
              <li>
                <a href=" ">Blog</a>
              </li>
              <li>
                <a href=" ">Support</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-content">
          <a href="https://blue.social/">
            <img src={Search} alt="" />
          </a>
          <a href="https://blue.social/">
            <img src={Cart} alt="" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
