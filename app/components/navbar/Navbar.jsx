"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import "./navbar.css";

const Navbar = () => {
  const [flag, setFlag] = useState("/images/icons/BG-bg.png");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle language flag
  const toggleFlag = () => {
    setFlag((prevFlag) =>
      prevFlag === "/images/icons/BG-bg.png"
        ? "/images/icons/UK-en.png"
        : "/images/icons/BG-bg.png"
    );
  };

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Close the menu if a menu link is clicked
  const closeMenuOnLinkClick = () => {
    if (window.innerWidth < 1159) {
      setIsMenuOpen(false); // Close hamburger menu on small screens
    }
  };

  // Function to check and update the menu state based on window width
  const updateMenuState = () => {
    if (window.innerWidth > 1159 && isMenuOpen) {
      setIsMenuOpen(false); // Close the menu if the width is > 1159px
    }
  };

  // Update menu state on resize
  useEffect(() => {
    updateMenuState(); // Check initially when the component mounts

    // Add event listener for window resize
    window.addEventListener("resize", updateMenuState);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateMenuState);
    };
  }, [isMenuOpen]);

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
      <a href="/">
        <img src="/images/logo-tus-blue-true.png" alt="Logo" className="logo" />
      </a>
      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="/" onClick={closeMenuOnLinkClick}>
            Home
          </a>
        </li>
        <li>
          <a href="/about-us" onClick={closeMenuOnLinkClick}>
            About
          </a>
        </li>
        <li>
          <a href="/formula-student" onClick={closeMenuOnLinkClick}>
            Formula Student
          </a>
        </li>
        <li>
          <a href="/gallery" onClick={closeMenuOnLinkClick}>
            Gallery
          </a>
        </li>
        <li>
          <a href="/contact-us" onClick={closeMenuOnLinkClick}>
            Contacts
          </a>
        </li>
        <li>
          <a href="/sponsors" onClick={closeMenuOnLinkClick}>
            Sponsors
          </a>
        </li>
        {isMenuOpen && (
          <>
            <a
              className="apply"
              href="/application"
              onClick={closeMenuOnLinkClick}
            >
              Apply Now
            </a>
            <li>
              <Image
                src={flag}
                alt="Flag"
                width={30}
                height={30}
                onClick={() => {
                  toggleFlag();
                  if (window.innerWidth < 1159) setIsMenuOpen(false);
                }}
              />
            </li>
          </>
        )}
      </ul>

      {/* Always show Apply Now button and flag */}
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

      {/* Hamburger menu button */}
      <a
        className="hamburger-menu"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        style={{backgroundColor: "transparent",}}
      >
        {isMenuOpen ? (
          <FiX size={30} color="#fff" />
        ) : (
          <FiMenu size={30} color="#fff" />
        )}
      </a>
    </div>
  );
};

export default Navbar;
