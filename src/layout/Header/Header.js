import React, { useState } from "react";
import Logo from "../../assets/img/logo.png";
import Search from "../../assets/img/search.png";
import Cart from "../../assets/img/cart.png";
import "./Header.css";
const Header = () => {
  const [navToggle, setnavToggle] = useState(false);
  window.addEventListener("scroll", function () {
    let header = this.document.querySelector(".main-header");

    header.classList.toggle("sticky-header", window.scrollY > 150);
  });
  let toggleMobile = () => {
    if (navToggle === true) {
      setnavToggle(false);
    } else {
      setnavToggle(true);
    }
  };
  return (
    <nav className="main-header">
      <div className="flex-header container-width">
        <div className="left-content">
          <a href="https://blue.social/">
            <img src={Logo} alt="" />
          </a>
          <div className={navToggle ? "links active-nav" : "links "}>
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
        <div className="mobile-only mbl-bar" onClick={toggleMobile}>
          {navToggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              role="presentation"
              className="icon icon-close"
              fill="none"
              viewBox="0 0 18 17"
            >
              <path
                d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z"
                fill="currentColor"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              role="presentation"
              className="icon icon-hamburger"
              fill="none"
              viewBox="0 0 18 16"
            >
              <path
                d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z"
                fill="currentColor"
              ></path>
            </svg>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
