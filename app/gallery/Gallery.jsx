"use client";
import React, { useEffect } from "react";
import GoUpButton from "../components/go-up/goUp"; // Importing GoUpButton component to scroll up
import AOS from "aos"; // AOS library for scroll animations
import "./gallery.css"; // Importing gallery styles
import "aos/dist/aos.css"; // Importing AOS styles for animations

const Gallery = () => {
  // Array of images with their respective descriptions
  const images = [
    {
      src: "https://picsum.photos/400/300?random=1", // Image URL
      description: "Image 1 Description", // Image description
    },
    {
      src: "https://picsum.photos/400/300?random=2", // Image URL
      description: "Image 2 Description", // Image description
    },
    {
      src: "https://picsum.photos/400/300?random=3", // Image URL
      description: "Image 3 Description", // Image description
    },
    {
      src: "https://picsum.photos/400/300?random=4", // Image URL
      description: "Image 4 Description", // Image description
    },
    {
      src: "https://picsum.photos/400/300?random=5", // Image URL
      description: "Image 5 Description", // Image description
    },
    {
      src: "https://picsum.photos/400/300?random=6", // Image URL
      description: "Image 6 Description", // Image description
    },
    {
      src: "https://picsum.photos/400/300?random=7", // Image URL
      description: "Image 7 Description", // Image description
    },
    {
      src: "https://picsum.photos/400/300?random=8", // Image URL
      description: "Image 8 Description", // Image description
    },
    {
      src: "https://picsum.photos/400/300?random=9", // Image URL
      description: "Image 9 Description", // Image description
    },
  ];

  // Initialize AOS (Animate on Scroll) when the component is mounted
  useEffect(() => {
    AOS.init({
      duration: 700, // Duration of animation in milliseconds
      easing: "ease-out-back", // Easing function for smooth animation
      once: true, // Animation should only happen once
    });
  }, []);

  return (
    <div className="gallery-container">
      {/* Title with animation on scroll */}
      <h1 data-aos="fade-up" data-aos-duration="800" className="gallery-title">
        Gallery
      </h1>

      {/* Gallery Grid with animated images */}
      <div className="gallery-grid">
        {/* Map through images and display each one with animation */}
        {images.map((image, index) => (
          <div
            key={index} // Unique key for each item
            data-aos={index % 2 === 0 ? "zoom-in" : "fade-up"} // Alternate animation types based on index
            data-aos-duration="1000" // Set animation duration (1.2 seconds)
            data-aos-delay={200 + index * 100} // Adding staggered delay to each item animation
            data-aos-easing="ease-out" // Easing effect for smooth transitions
          >
            <div
              className="gallery-item" // Gallery item wrapper
            >
              <img src={image.src} alt={`Gallery image ${index + 1}`} />
              {/* Display the image */}
              <div className="description">
                <p>{image.description}</p>
                {/* Display the description of the image */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GoUpButton for scrolling back to the top of the page */}
      <GoUpButton />
    </div>
  );
};

export default Gallery;
