import React from "react";
import Logo from "../../assets/img/LOGO1.png";
const Footer = () => {
  return (
    <div className="footer-content">
      <img src={Logo} alt="logo"></img>
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
