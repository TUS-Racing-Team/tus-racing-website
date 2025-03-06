import React from "react";
import "./carousel.css";
import AOS from "aos"; // Importing AOS for animations
import "aos/dist/aos.css"; // Import AOS styles

const images = [
  "/images/sponsors/trumpf-logo.png",
  "/images/sponsors/trumpf-logo.png",
  "/images/sponsors/trumpf-logo.png",
  "/images/sponsors/trumpf-logo.png",
];

const SponsorCarousel = () => {
  return (
    <div className="carousel">
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
  );
};

export default SponsorCarousel;
