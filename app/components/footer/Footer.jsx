import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <div className="footer-logo"></div>
        <div className="contact"></div>
        <div className="links">
          <a href="/">Home</a>
          <a href="/about-us">About us</a>
          <a href="/formula-student">Formula student</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact-us">Contact us</a>
          <a href="/sponsors">Sponsors</a>
          <a href="/application" id="application">
            Apply now
          </a>
        </div>
      </div>
      <div className="privacy-policy"></div>
    </footer>
  );
};

export default Footer;
