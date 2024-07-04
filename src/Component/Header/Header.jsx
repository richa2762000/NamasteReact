import React, { useState } from "react";
import "./Header.css";
import { logoUrl } from "../Json/constant";
import { Link } from "react-router-dom";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const loginClickBtn = () => {
     loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
  };
  return (
    <>
      <div className="container">
        <div className="header-img">
          <img src={logoUrl} alt="loading" />
        </div>
        <div className="nav-container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>
        <div className="button-login">
          <button onClick={loginClickBtn}>{loginBtn}</button>
        </div>
      </div>
    </>
  );
};
export default Header;
