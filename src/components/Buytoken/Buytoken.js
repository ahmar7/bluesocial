import React, { useState } from "react";
import "./Buytoken.css";
import EthIco from "../../assets/img/eth.svg";
import DownIco from "../../assets/img/down.svg";
import BstIco from "../../assets/img/bst.svg";
import Down from "../../assets/img/down-vector.svg";
import EthCoin from "../../assets/img/eth.svg";
import BtcCoin from "../../assets/img/btc.png";
import CoinBase from "../../assets/img/coin-base.png";
import WalletConnect from "../../assets/img/walletconnect.png";
const Buytoke = () => {
  const [dropdown, setdropdown] = useState(false);
  let toggleDropdown = () => {
    if (dropdown === false) {
      setdropdown(true);
    } else {
      setdropdown(false);
    }
  };
  return (
    <div className="section-space ">
      <div className="main-social">
        <div className="container-width">
          <h2 className="buy-heading">Buy Blue Social Token</h2>
          <div className="bg-sale">
            <div className="private-sale">
              <div className="private-left">
                <p className="theme-color">Buy BST NOW During Our</p>
                <h3 className="theme-color">PRIVATE PRESALE</h3>
                <h2 className="bonus-heading">
                  112% Bonus! <br /> (53% Discount)
                </h2>
                <p className="token-price">
                  $0.085 Per Token - Private Presale Price (USD)
                </p>
                <p className="token-price">
                  $0.10 Per Token - Public Presale Price (April 2023)
                </p>
                <p className="token-price">
                  $0.18 Per Token - Public IDO Price (June 2023)
                </p>
              </div>
              <div className="private-right">
                <div className="eth-container">
                  <div className="eth">
                    <span>
                      <img src={EthIco} alt="" />
                    </span>
                    <div className="eth-names">
                      <h1>ETH</h1>
                      <p>Ethereum Token</p>
                    </div>
                  </div>
                  <div className="eth-pc">1.0394021</div>
                </div>
                <div className="eth-container">
                  <div className="eth"></div>
                  <div className="eth-down">
                    <img src={DownIco} alt="" />
                  </div>
                </div>{" "}
                <div className="eth-container">
                  <div className="eth">
                    <span>
                      <img src={BstIco} alt="" />
                    </span>
                    <div className="eth-names">
                      <h1>BST</h1>
                      <p>Blue Social Token</p>
                    </div>
                  </div>
                  <div className="eth-pc">1.0394021</div>
                </div>
                <div className="eth-container">
                  <div className="eth"></div>
                  <div className="eth-slip theme-color">
                    Slippage Tolerance{" "}
                    <span className="last-circle">15.0%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-container">
              <button
                onClick={toggleDropdown}
                className={
                  dropdown
                    ? "blue-btn connect-btn active-drop"
                    : "blue-btn connect-btn"
                }
              >
                Connect Wallet <img className="down-ico" src={Down} alt="" />
              </button>
              {dropdown && (
                <div className="drop-down">
                  <div className="single-coin">
                    <img src={BtcCoin} alt="" />
                    <p>MetaMask</p>
                  </div>
                  <div className="single-coin">
                    <img src={CoinBase} alt="" />
                    <p>Coinbase Wallet</p>
                  </div>
                  <div className="single-coin">
                    <img src={WalletConnect} alt="" />
                    <p>WalletConnect</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <p className="terms"> <input type="checkbox" name="" id="" />
            I Agree with the Terms of Token Sale in the Blue Social Utility
            Token Purchase Agreement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Buytoke;
