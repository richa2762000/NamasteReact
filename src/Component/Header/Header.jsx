import React from "react";
import './Header.css';
import { logoUrl } from "../Json/constant";
const Header = () => {
  return (
    <>
      <div className="container">
        <div className="header-img">
          <img
            src={logoUrl}
            alt="loading"
          />
        </div>
        <div className="nav-container">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
