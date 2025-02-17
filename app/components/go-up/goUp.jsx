import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./goUpButton.css";

const GoUpButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 900) {
        setShowButton(true); // Display the button when scrolled more than 900px
      } else {
        setShowButton(false); // Hide the button when scrolled back up
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup the event listener
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect to the top
    });
  };

  return (
    // Button to scroll to the top of the page
    // When the 'showButton' state is true, the button will be displayed
    <a
      onClick={scrollToTop} // Trigger the scrollToTop function when clicked
      className={`go-up-btn ${showButton ? "show" : ""}`} // Dynamically set the 'show' class based on the state
    >
      <FaArrowUp className="arrow" /> {/* Icon for the 'Go Up' button */}
    </a>
  );
};

export default GoUpButton;
