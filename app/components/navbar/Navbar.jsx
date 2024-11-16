"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import "./navbar.css";

const Navbar = () => {
  const [flag, setFlag] = useState("/images/BG-bg.png");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);

  // Toggle language flag
  const toggleFlag = () => {
    setFlag((prevFlag) =>
      prevFlag === "/images/BG-bg.png" ? "/images/UK-en.png" : "/images/BG-bg.png"
    );
  };

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Update window width on resize (client-side only)
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Defer window width calculation to after component mount to avoid SSR issues
  useEffect(() => {
    // Only run this code on the client-side
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this runs only once after mount

  // Effect to close the menu if windowWidth > 1135
  useEffect(() => {
    if (windowWidth && windowWidth > 1135) {
      setIsMenuOpen(false);
    }
  }, [windowWidth]);

  // Prevent body overflow when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div className="navbar">
      <img src="/images/logo-tus-blue-true.png" alt="Logo" className="logo" />
      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about-us">About</a>
        </li>
        <li>
          <a href="/formula-student">Formula Student</a>
        </li>
        <li>
          <a href="/gallery">Gallery</a>
        </li>
        <li>
          <a href="/contact-us">Contacts</a>
        </li>
        <li>
          <a href="/sponsors">Sponsors</a>
        </li>
        {isMenuOpen && (
          <>
            <a href="/application" className="apply">
              Apply Now
            </a>
            <li>
              <Image
                src={flag}
                alt="Flag"
                width={30}
                height={30}
                onClick={toggleFlag}
              />
            </li>
          </>
        )}
      </ul>

      {/* Show Apply Now button and flag for larger screens */}
      {windowWidth > 1135 && !isMenuOpen && (
        <div className="nav-buttons">
          <Image
            src={flag}
            alt="Flag"
            width={30}
            height={30}
            onClick={toggleFlag}
          />
          <a href="/application" className="apply">
            Apply Now
          </a>
        </div>
      )}

      {/* Hamburger menu button */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FiX size={30} color="#fff" />
        ) : (
          <FiMenu size={30} color="#fff" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
