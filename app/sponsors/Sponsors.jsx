"use client";

import "./sponsors.css"; // Import the CSS for styling
import React, { useEffect } from "react";
import SponsorForm from "./SponsorForm"; // Import the SponsorForm component
import GoUpButton from "../components/go-up/goUp"; // Importing GoUpButton component to scroll up
import AOS from "aos"; // Importing AOS for animations
import "aos/dist/aos.css"; // Import AOS styles

// Arrays of sponsor images categorized by tiers
const platinumSponsors = [
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

const images = [
  "/images/sponsors/samsung-logo.png",
  "/images/sponsors/red-bull-logo.png",
  "/images/sponsors/bosch-logo.png",
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
          {/* Platinum Tier Sponsors */}
          <h2
            className="sponsor-tier-title platinum"
            data-aos="fade-down"
            data-aos-delay="650"
          >
            Platinum Sponsors
          </h2>
          <div className="sponsor-grid">
            {platinumSponsors.map((image, index) => (
              <div
                className="sponsor-card"
                key={index}
                data-aos="zoom-in"
                data-aos-duration="300"
                data-aos-delay={index * 100 + 750}
              >
                <img src={image} alt={`Platinum Sponsor ${index + 1}`} />
              </div>
            ))}
          </div>

          {/* Gold Tier Sponsors */}
          <h2
            className="sponsor-tier-title gold"
            data-aos="fade-down"
            data-aos-delay="850"
          >
            Gold Sponsors
          </h2>
          <div className="sponsor-grid">
            {goldSponsors.map((image, index) => (
              <div
                className="sponsor-card"
                key={index}
                data-aos="zoom-in"
                data-aos-duration="300"
                data-aos-delay={index * 100 + 800}
              >
                <img src={image} alt={`Gold Sponsor ${index + 1}`} />
              </div>
            ))}
          </div>

          {/* Silver Tier Sponsors */}
          <h2
            className="sponsor-tier-title silver"
            data-aos="fade-down"
            data-aos-delay="950"
          >
            Silver Sponsors
          </h2>
          <div className="sponsor-grid">
            {silverSponsors.map((image, index) => (
              <div
                className="sponsor-card"
                key={index}
                data-aos="zoom-in"
                data-aos-duration="300"
                data-aos-delay={index * 100 + 850}
              >
                <img src={image} alt={`Silver Sponsor ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Carousel container to display the sponsor logos */}
        <div
          className="carousel"
          data-aos="zoom-out"
          data-aos-delay="1050"
        >
          {/* First group of images for smooth looping */}
          <div className="group">
            {/* Loop through the images array and create a card for each image */}
            {images.map((image, index) => (
              <div className="card" key={index}>
                {/* Sponsor logo image */}
                <img src={image} alt={`Sponsor ${index + 1}`} />
              </div>
            ))}
          </div>

          {/* Second group of images for continuous scrolling effect */}
          <div aria-hidden className="group">
            {/* Loop through the images array again, this time with an adjusted key for a unique value */}
            {images.map((image, index) => (
              <div className="card" key={index + images.length}>
                {/* Sponsor logo image */}
                <img src={image} alt={`Sponsor ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <GoUpButton />
    </>
  );
};

export default Sponsors;
