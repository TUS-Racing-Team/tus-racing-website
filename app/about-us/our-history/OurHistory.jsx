"use client"
import React, {useEffect} from "react";
import "./our-history.css";
import GoUpButton from "../../components/go-up/goUp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLanguage } from "../../context/LanguageContext";


function OurHistory() {
  const { t } = useLanguage();
  
  useEffect(() => {
    AOS.init({
      duration: 700, // Duration of animation in ms
      easing: "ease-out", // Animation easing
      once: false, // Run animation once
    });
  }, []);
  return (
    <div className="our-history" data-aos="fade-down">
      <h1>{t.history.title}</h1>
      <div className="info-text" data-aos="fade">
        {t.history.content}
      </div>
      <GoUpButton />
    </div>
  );
}

export default OurHistory;
