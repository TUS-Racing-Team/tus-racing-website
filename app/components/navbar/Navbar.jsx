"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./navbar.css";

const Navbar = () => {
  const [flag, setFlag] = useState("/images/BG-bg.png");
  const toggleFlag = () => {
    setFlag((prevFlag) =>
      prevFlag === "/images/BG-bg.png"
        ? "/images/UK-en.png"
        : "/images/BG-bg.png"
    );
  };

  return (
    <div className="navbar">
      <img src="/images/logo-tus-blue-true.png" alt="Logo" className="logo" />
      <ul className="menu">
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
      </ul>
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
    </div>
  );
};

export default Navbar;
