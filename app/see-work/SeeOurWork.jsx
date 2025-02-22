"use client"
import React from "react";
import { useEffect } from "react";
import "./work.css"; // Import custom styles
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles for animations

export default function SeeOurWork() {

  useEffect(() => {
    AOS.init({
      duration: 500, // Duration of animation in milliseconds
      easing: "ease-out", // Smooth easing for animations
      once: false, // Set to true if animations should run only once when scrolling
    });
  }, []);

  return (
    <main>
    <div className="container" data-aos="fade-down">
      
      <h1 className="title">Our Work</h1>
      <p className="description">
        We are currently working hard on our designs and engineering reports. Stay tuned for updates! 
        Once we finalize our work, we will share our progress and insights here.
      </p>
      <p className="subtext">
        Follow us for more updates as we continue developing our Formula Student car.
      </p>
    </div>
    </main>
  );
}
