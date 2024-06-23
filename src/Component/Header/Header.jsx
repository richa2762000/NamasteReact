import React from "react";
import './Header.css';
const Header = () => {
  return (
    <>
      <div className="container">
        <div className="header-img">
          <img
            src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png"
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
