"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import GoUpButton from "../components/go-up/goUp";
import AOS from "aos";
import "./about-us.css";
import "aos/dist/aos.css"; // Import AOS styles for animations

const AboutUs = () => {
  // Initialize AOS animations when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 500, // Duration of animation in milliseconds
      easing: "ease-out", // Smooth easing for animations
      once: false, // Set to true if animations should run only once when scrolling
    });
  }, []);

  return (
    <div id="about-us">
      {/* Main Section - Contains logo and introductory text */}
      <div className="main-about">
        {/* Logo Image with fade-down animation */}
        <Image
          src="/images/logo-tus-blue-true.png"
          alt="Description"
          width={320}
          height={50}
          className="img-logo"
          data-aos="fade-down" // Animation when the element enters the viewport
        />

        {/* Introductory Text with fade-up animation */}
        <p data-aos="fade-up" data-aos-delay="200">
          Here you can find out everything about us: our cars, our sub-teams and
          our milestones. Just click through!
        </p>

        {/* Options Section - Contains clickable options for different parts of the About Us page */}
        <div className="options">
          {/* Option 1 - Our Race Cars */}
          <a
            href="/about-us/our-race-cars"
            data-aos="fade-up-right"
            data-aos-delay="300"
          >
            <div className="option">
              <div className="option-info">
                <div className="option-title">
                  {/* Icon for race cars option */}
                  <img
                    src="/images/icons/racing-car.png"
                    alt="racing-car"
                    loading="lazy"
                  />
                </div>
                <h2>Our Race Cars</h2>
                {/* Description for Our Race Cars */}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  possimus aliquid perspiciatis corrupti repellendus,
                  repudiandae quaerat temporibus velit. Atque aliquam magnam
                  cumque beatae nihil? Omnis commodi vitae quod repudiandae
                  voluptatem?
                </p>
              </div>
            </div>
          </a>

          {/* Option 2 - Our Team */}
          <a href="/about-us/our-team" data-aos="fade-up" data-aos-delay="500">
            <div className="option">
              <div className="option-info">
                <div className="option-title">
                  {/* Icon for team option */}
                  <img src="/images/icons/team.png" alt="team" loading="lazy" />
                </div>
                <h2>Our Team</h2>
                {/* Description for Our Team */}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  possimus aliquid perspiciatis corrupti repellendus,
                  repudiandae quaerat temporibus velit. Atque aliquam magnam
                  cumque beatae nihil? Omnis commodi vitae quod repudiandae
                  voluptatem?
                </p>
              </div>
            </div>
          </a>

          {/* Option 3 - Our History */}
          <a
            href="/about-us/our-history"
            data-aos="fade-down"
            data-aos-delay="700"
          >
            <div className="option">
              <div className="option-info">
                <div className="option-title">
                  {/* Icon for history option */}
                  <img
                    src="/images/icons/history.png"
                    alt="history"
                    loading="lazy"
                  />
                </div>
                <h2>Our History</h2>
                {/* Description for Our History */}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  possimus aliquid perspiciatis corrupti repellendus,
                  repudiandae quaerat temporibus velit. Atque aliquam magnam
                  cumque beatae nihil? Omnis commodi vitae quod repudiandae
                  voluptatem?
                </p>
              </div>
            </div>
          </a>

          {/* Option 4 - Your Application */}
          <a href="/application" data-aos="fade-up-left" data-aos-delay="800">
            <div className="option">
              <div className="option-info">
                <div className="option-title">
                  {/* Icon for application option */}
                  <img
                    src="/images/icons/application.png"
                    alt="application"
                    loading="lazy"
                  />
                </div>
                <h2>Your Application</h2>
                {/* No description for Your Application (this is intentionally left empty) */}
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Scroll to top button */}
      <GoUpButton />
    </div>
  );
};

export default AboutUs;
