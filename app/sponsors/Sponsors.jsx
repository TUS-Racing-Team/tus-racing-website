"use client";

import "./sponsors.css"; // Import the CSS for styling
import React, { useEffect } from "react";
import SponsorForm from "./SponsorForm"; // Import the SponsorForm component
import GoUpButton from "../components/go-up/goUp"; // Importing GoUpButton component to scroll up
import AOS from "aos"; // Importing AOS for animations
import "aos/dist/aos.css"; // Import AOS styles

// Arrays of sponsor images categorized by tiers
const bronzeSponsors = [
  "https://picsum.photos/400/300?random=1",
  "https://picsum.photos/400/300?random=2",
  "https://picsum.photos/400/300?random=3",
  "https://picsum.photos/400/300?random=4",
  "https://picsum.photos/400/300?random=5",
  "https://picsum.photos/400/300?random=6",
];

const goldSponsors = [
  "https://picsum.photos/400/300?random=7",
  "https://picsum.photos/400/300?random=8",
  "https://picsum.photos/400/300?random=9",
  "https://picsum.photos/400/300?random=10",
  "https://picsum.photos/400/300?random=11",
  "https://picsum.photos/400/300?random=12",
];

const silverSponsors = [
  "https://picsum.photos/400/300?random=13",
  "https://picsum.photos/400/300?random=14",
  "https://picsum.photos/400/300?random=15",
  "https://picsum.photos/400/300?random=16",
  "https://picsum.photos/400/300?random=17",
  "https://picsum.photos/400/300?random=18",
];

const Sponsors = () => {
  // Effect hook to initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 700, // Animation duration in milliseconds
      easing: "ease-out-back", // Easing function for animation
      once: true, // Make animations run only once
    });
  }, []); // Empty dependency array means it runs once when the component mounts

  return (
    <>
      <div className="sponsor-container" data-aos-delay="500">
        {/* Sponsor form for potential sponsors */}
        <SponsorForm />

        <div data-aos="fade-up" data-aos-delay="550">
          {/* Gold Tier Sponsors (Now using old Bronze AOS) */}
          <h2
            className="sponsor-tier-title gold"
            data-aos="fade-down"
            data-aos-delay="650"
          >
            Gold Sponsors
          </h2>
          <div className="sponsor-grid">
              <div
                className="sponsor-card"
                data-aos="zoom-in"
                data-aos-duration="300"
                data-aos-delay="700" // Old Bronze AOS
              >
                <img src="/images/sponsors/trumpf-logo.png" alt="Trumpf" />
              </div>
          </div>

          {/* Silver Tier Sponsors (Now using old Gold AOS) */}
          <h2
            className="sponsor-tier-title silver"
            data-aos="fade-down"
            data-aos-delay="850"
          >
            Silver Sponsors
          </h2>
          <div className="sponsor-grid">
            {/* {silverSponsors.map((image, index) => (
              <div
                className="sponsor-card"
                key={index}
                data-aos="zoom-in"
                data-aos-duration="300"
                data-aos-delay={index * 100 + 650} // Old Gold AOS
              >
                <img src={image} alt={`Silver Sponsor ${index + 1}`} />
              </div>
            ))} */}
            <h3>No sponsors</h3>
          </div>

          {/* Bronze Tier Sponsors (Now using old Silver AOS) */}
          <h2
            className="sponsor-tier-title bronze"
            data-aos="fade-down"
            data-aos-delay="950"
          >
            Bronze Sponsors
          </h2>
          <div className="sponsor-grid">
            {/* {bronzeSponsors.map((image, index) => (
              <div
                className="sponsor-card"
                key={index}
                data-aos="zoom-in"
                data-aos-duration="300"
                data-aos-delay={index * 100 + 700} // Old Silver AOS
              >
                <img src={image} alt={`Bronze Sponsor ${index + 1}`} />
              </div>
            ))} */}
            <h3>No sponsors</h3>
          </div>
        </div>
      </div>
      <GoUpButton />
    </>
  );
};

export default Sponsors;
