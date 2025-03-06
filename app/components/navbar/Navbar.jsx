"use client"; // Ensures the code is run client-side in Next.js

import React, { useState, useEffect } from "react"; // Importing necessary hooks from React
import Image from "next/image"; // Image component for optimized images in Next.js
import { FiMenu, FiX } from "react-icons/fi"; // Importing menu icons for the hamburger menu
import "./navbar.css"; // Importing the CSS file for styling the navbar
import { useLanguage } from "../../context/LanguageContext";

const Navbar = () => {
  const [flag, setFlag] = useState("/images/icons/BG-bg.png"); // Default flag is Bulgaria's flag
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for managing menu visibility
  const { t, changeLanguage } = useLanguage();

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang != "undefined") {
      let flag;
      if (storedLang == "bg") {
        flag = "/images/icons/UK-en.png";
      } else {
        flag = "/images/icons/BG-bg.png";
      }
      setFlag(flag);
    }
  }, []);
  // Function to toggle the language flag between Bulgaria (BG) and the UK (EN)
  const toggleFlag = () => {
    setFlag((prevFlag) =>
      prevFlag === "/images/icons/BG-bg.png"
        ? "/images/icons/UK-en.png"
        : "/images/icons/BG-bg.png"
    );
  };

  // Function to toggle the visibility of the menu (hamburger menu)
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Function to close the menu when a menu link is clicked (only on small screens)
  const closeMenuOnLinkClick = () => {
    if (window.innerWidth < 1159) {
      setIsMenuOpen(false); // Close the menu on small screens
    }
  };

  // Function to update the menu state when the window is resized
  const updateMenuState = () => {
    if (window.innerWidth > 1159 && isMenuOpen) {
      setIsMenuOpen(false); // Close menu when the window is resized to larger than 1159px
    }
  };

  // Effect hook to listen for window resize and update the menu state
  useEffect(() => {
    updateMenuState(); // Check initially when the component mounts

    // Add event listener to resize the window
    window.addEventListener("resize", updateMenuState);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", updateMenuState);
    };
  }, [isMenuOpen]);

  // Effect hook to control body overflow behavior when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling when menu is closed
    }

    // Cleanup to reset the overflow when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div className="navbar">
      {/* Logo */}
      <a href="/">
        <img src="/images/logo-tus-blue-true.png" alt="Logo" className="logo" />
      </a>

      {/* Navigation menu */}
      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="/" onClick={closeMenuOnLinkClick}>
            {t.navbar.home}
          </a>
        </li>
        <li>
          <a href="/about-us" onClick={closeMenuOnLinkClick}>
            {t.navbar.about}
          </a>
        </li>
        <li>
          <a href="/formula-student" onClick={closeMenuOnLinkClick}>
            {t.navbar.f_student}
          </a>
        </li>
        <li>
          <a href="/gallery" onClick={closeMenuOnLinkClick}>
            {t.navbar.gallery}
          </a>
        </li>
        <li>
          <a href="/contact-us" onClick={closeMenuOnLinkClick}>
            {t.navbar.contact}
          </a>
        </li>
        <li>
          <a href="/sponsors" onClick={closeMenuOnLinkClick}>
            {t.navbar.sponsors}
          </a>
        </li>

        {/* Show Apply Now and Flag only when menu is open */}
        {isMenuOpen && (
          <>
            <a
              className="apply"
              href="/application"
              onClick={closeMenuOnLinkClick}
            >
              {t.navbar.apply}
            </a>
            <li>
              <Image
                src={flag}
                alt="Flag"
                width={30}
                height={30}
                onClick={() => {
                  toggleFlag(); // Toggle flag on click
                  changeLanguage();
                  if (window.innerWidth < 1159) setIsMenuOpen(false); // Close menu on small screens
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
          onClick={() => {
            toggleFlag();
            changeLanguage();
          }} // Toggle flag on click
        />
        <a href="/application" className="apply">
          {t.navbar.apply}
        </a>
      </div>

      {/* Hamburger menu button to open/close the menu */}
      <a
        className="hamburger-menu"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"} // Accessibility label for the menu button
        style={{ backgroundColor: "transparent" }} // Ensures the button has no background
      >
        {isMenuOpen ? (
          <FiX size={30} color="#fff" /> // Show X icon when the menu is open
        ) : (
          <FiMenu size={30} color="#fff" /> // Show hamburger icon when the menu is closed
        )}
      </a>
    </div>
  );
};

export default Navbar;
