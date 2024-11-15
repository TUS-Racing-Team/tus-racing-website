"use client";
import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
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
      <a href='/application' className="apply">Apply Now</a>
    </div>
  );
};

export default Navbar;
