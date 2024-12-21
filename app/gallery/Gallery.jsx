"use client";
import React, { useEffect } from "react";
import GoUpButton from "../components/go-up/goUp";
import AOS from "aos";
import "./gallery.css";
import "aos/dist/aos.css"; // Import AOS styles

const Gallery = () => {
  const images = [
    "https://picsum.photos/400/300?random=1",
    "https://picsum.photos/400/300?random=2",
    "https://picsum.photos/400/300?random=3",
    "https://picsum.photos/400/300?random=4",
    "https://picsum.photos/400/300?random=5",
    "https://picsum.photos/400/300?random=6",
    "https://picsum.photos/400/300?random=7",
    "https://picsum.photos/400/300?random=8",
    "https://picsum.photos/400/300?random=9",
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation in ms
      easing: "ease-out-back", // Smooth animation easing
      once: true,
    });
  }, []);

  return (
    <div className="gallery-container">
      <h1 data-aos="fade-up" data-aos-duration="1000" className="gallery-title">
        Gallery
      </h1>

      {/* Gallery Grid with animated images */}
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            className="gallery-item"
            key={index}
            data-aos={index % 2 === 0 ? "zoom-in" : "fade-up"}
            data-aos-delay={200 + index * 100} // Adding delay for each item
          >
            <img src={image} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>

      <GoUpButton />
    </div>
  );
};

export default Gallery;
