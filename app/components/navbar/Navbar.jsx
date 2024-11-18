"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import "./navbar.css";

const Navbar = () => {
  const [flag, setFlag] = useState("/images/BG-bg.png");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Function to check and update the menu state based on window width
  const updateMenuState = () => {
    if (window.innerWidth > 1135 && isMenuOpen) {
      setIsMenuOpen(false); // Close the menu if the width is > 1135px
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
  }, [isMenuOpen]); // Only update state if isMenuOpen changes

  // Persist the menu state using localStorage
  useEffect(() => {
    const storedMenuState = localStorage.getItem("isMenuOpen");
    if (storedMenuState !== null) {
      setIsMenuOpen(JSON.parse(storedMenuState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isMenuOpen", JSON.stringify(isMenuOpen));
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
