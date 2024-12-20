import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./goUpButton.css";

const GoUpButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 900) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      onClick={scrollToTop}
      className={`go-up-btn ${showButton ? "show" : ""}`}
    >
      <FaArrowUp className="arrow" />
    </a>
  );
};

export default GoUpButton;
