"use client"
import React from "react";
import { useEffect } from "react";
import "./work.css"; // Import custom styles
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles for animations
import { useLanguage } from "../context/LanguageContext";


export default function SeeOurWork() {
  const { t } = useLanguage();
  
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
      
      <h1 className="title">{t.work.title}</h1>
      <p className="description">
      {t.work.description}
      </p>
      <p className="subtext">
        {t.work.subtext}
      </p>
    </div>
    </main>
  );
}
