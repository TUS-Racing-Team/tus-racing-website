"use client";

import "./sponsors.css"; // Import styles
import React, { useEffect } from "react";
import SponsorForm from "./SponsorForm"; // Import Sponsor Form
import GoUpButton from "../components/go-up/goUp"; // Import GoUpButton
import AOS from "aos"; // Import AOS animations
import "aos/dist/aos.css"; // Import AOS styles

const Sponsors = () => {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-back",
      once: true,
    });
  }, []);

  return (
    <>
      <div className="sponsor-container">
        {/* Sponsor form */}
        <SponsorForm />

        {/* Sponsors Grid Wrapper */}
        <div className="sponsors-grid">
          {/* Gold Tier */}
          <div className="sponsor-tier" data-aos="fade-up" data-aos-delay="550">
            <h2 className="sponsor-tier-title gold" data-aos="fade-down" data-aos-delay="650">
              Gold Sponsors
            </h2>
            <div className="sponsor-grid">
              <h3>No sponsors</h3>
            </div>
          </div>

          {/* Silver Tier */}
          <div className="sponsor-tier" data-aos="fade-up" data-aos-delay="750">
            <h2 className="sponsor-tier-title silver" data-aos="fade-down" data-aos-delay="850">
              Silver Sponsors
            </h2>
            <div className="sponsor-grid">
              <h3>No sponsors</h3>
            </div>
          </div>

          {/* Bronze Tier */}
          <div className="sponsor-tier" data-aos="fade-up" data-aos-delay="950">
            <h2 className="sponsor-tier-title bronze" data-aos="fade-down" data-aos-delay="1050">
              Bronze Sponsors
            </h2>
            <div className="sponsor-grid">
              <h3>No sponsors</h3>
            </div>
          </div>
        </div>
      </div>

      <GoUpButton />
    </>
  );
};

export default Sponsors;
