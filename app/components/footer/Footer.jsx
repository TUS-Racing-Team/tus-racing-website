import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <div className="footer-logo">
          <img
            src="/images/logo-tus-white.png"
            alt="TU-Soafia Racing Team Logo"
          />
          <img src="/images/logo-tu-sofia.png" alt="TU-Sofia University" />
        </div>
        <div className="links">
          <h2>Quick links</h2>
          <div>
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
      </div>
      <div className="contact">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.406658510638!2d23.352694675602063!3d42.652737116561525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8426c28853ef%3A0x507b5ee6b85ffd1e!2z0KTQsNC60YPQu9GC0LXRgiDQv9C-INGC0YDQsNC90YHQv9C-0YDRgtCwICjQotCjLdCh0L7RhNC40Y8p!5e0!3m2!1sbg!2sbg!4v1731671809944!5m2!1sbg!2sbg"
          height="300"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="privacy-policy">
        <p>© 2024 TU Sofia Racing Team. All rights reserved.</p>
        <p></p>
      </div>
    </footer>
  );
};

export default Footer;
