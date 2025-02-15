"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import GoUpButton from "../components/go-up/goUp";
import AOS from "aos";
import "./about-us.css";
import "aos/dist/aos.css"; // Import AOS styles

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Duration of animation in ms
      easing: "ease-out", // Animation easing
      once: false, // Run animation once
    });
  }, []);

  return (
    <div id="about-us">
      <div className="main-about">
        <Image
          src="/images/logo-tus-blue-true.png"
          alt="Description"
          width={320}
          height={50}
          className="img-logo"
          data-aos="fade-down" // Animation when the element enters the viewport
        />
        <p data-aos="fade-up" data-aos-delay="200">
          Here you can find out everything about us: our cars, our sub-teams and
          our milestones. Just click through!
        </p>
        <div className="options">
          {/* Option 1 */}
          <a href="/about-us/our-race-cars" data-aos="fade-up-right" data-aos-delay="300">
            <div className="option">
              <div className="option-info">
                <div className="option-title">
                  <img
                    src="/images/icons/racing-car.png"
                    alt="racing-car"
                    loading="lazy"
                  />
                </div>
                <h2>Our Race Cars</h2>
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

          {/* Option 2 */}
          <a href="/about-us/our-team" data-aos="fade-up" data-aos-delay="500">
            <div className="option">
              <div className="option-info">
                <div className="option-title">
                  <img src="/images/icons/team.png" alt="team" loading="lazy" />
                </div>
                <h2>Our Team</h2>
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

          {/* Option 3 */}
          <a href="/about-us/our-history" data-aos="fade-down" data-aos-delay="700">
            <div className="option">
              <div className="option-info">
                <div className="option-title">
                  <img
                    src="/images/icons/history.png"
                    alt="history"
                    loading="lazy"
                  />
                </div>
                <h2>Our History</h2>
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

          {/* Option 4 */}
          <a href="/application" data-aos="fade-up-left" data-aos-delay="800">
            <div className="option">
              <div className="option-info">
                <div className="option-title">
                  <img
                    src="/images/icons/application.png"
                    alt="application"
                    loading="lazy"
                  />
                </div>
                <h2>Your Application</h2>
              
              </div>
            </div>
          </a>
        </div>
      </div>
      <GoUpButton />
    </div>
  );
};

export default AboutUs;
