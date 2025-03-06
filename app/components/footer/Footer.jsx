"use client";

import React from "react";
import { FaFacebook, FaInstagram, FaDiscord, FaEnvelope } from "react-icons/fa";
import "./footer.css";
import SponsorCarousel from "./SponsorCarousel";
import { useLanguage } from "../../context/LanguageContext";


const Footer = () => {
  const { t } = useLanguage();
  
  return (
    // Footer container
    <>
    <SponsorCarousel/>
    <footer className="footer">
      <div className="content">
        {/* Footer Logo Section */}
        <div className="footer-logo">
          <img
            src="/images/logo-tus-white.png"
            alt="TU-Soafia Racing Team Logo"
          />
          <img src="/images/logo-tu-sofia.png" alt="TU-Sofia University" />
        </div>

        {/* Quick Links Section */}
        <div className="links">
          <h2>{t.footer.quick_links.title}</h2>
          <div>
            {/* Navigation links */}
            <a href="/">{t.footer.quick_links.link1}</a>
            <a href="/about-us">{t.footer.quick_links.link2}</a>
            <a href="/formula-student">{t.footer.quick_links.link3}</a>
            <a href="/gallery">{t.footer.quick_links.link4}</a>
            <a href="/contact-us">{t.footer.quick_links.link5}</a>
            <a href="/sponsors">{t.footer.quick_links.link6}</a>
            <a href="/application" id="application">
            {t.footer.quick_links.link7}
            </a>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="social-media">
          <h2>{t.footer.social_media.title}</h2>
          <div className="social-media-links">
            {/* Email Link with Tooltip */}
            <div className="email-tooltip-container">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=formulastudentbg@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="gmail" />
              </a>
              <span
                className="email-tooltip"
                onClick={() =>
                  navigator.clipboard
                    .writeText("formulastudentbg@gmail.com")
                    .then(() => {
                      alert("Email copied to clipboard!");
                    })
                    .catch((err) => {
                      alert("Failed to copy text: " + err);
                    })
                }
              >
                formulastudentbg@gmail.com
              </span>
            </div>

            {/* Social Media Icons */}
            <a href="" title="Discord">
              <FaDiscord className="discord" />
            </a>
            <a href="" title="Facebook">
              <FaFacebook className="facebook" />
            </a>
            <a href="" title="Instagram">
              <FaInstagram className="instagram" />
            </a>
          </div>
        </div>
      </div>

      {/* Contact Section with Google Map */}
      <div className="contact">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11574.844856976933!2d23.344489764056558!3d42.65905770510949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8426c28853ef%3A0x507b5ee6b85ffd1e!2sBlock%209%20of%20the%20Technical%20University!5e0!3m2!1sen!2sbg!4v1731674014136!5m2!1sen!2sbg"
          height="300"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Privacy Policy Section */}
      <div className="privacy-policy">
        <p>
          © {new Date().getFullYear()} TU Sofia Racing Team. All rights
          reserved.
        </p>
        <p></p>
      </div>
    </footer>
    </>
  );
};

export default Footer;
