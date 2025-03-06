"use client"
import React, {useEffect} from "react";
import "./our-history.css";
import GoUpButton from "../../components/go-up/goUp";
import AOS from "aos";
import "aos/dist/aos.css";

function OurHistory() {
  useEffect(() => {
    AOS.init({
      duration: 700, // Duration of animation in ms
      easing: "ease-out", // Animation easing
      once: false, // Run animation once
    });
  }, []);
  return (
    <div className="our-history" data-aos="fade-down">
      <h1>Our History</h1>
      <div className="info-text" data-aos="fade">
        In 2015, the first Bulgarian Formula Student team was created at the
        Technical University of Sofia. A year later, in 2016, the team completed
        the design and construction of Bolide 1, which successfully debuted at
        the competition in Italy, completing all rounds of the endurance event.
        With the accumulated experience and knowledge, the following year, the
        development of Bolide 2 began - a new model, optimized with almost 30%
        reduced mass. The successes continued, and in 2019 Bolide 2 performed
        outstandingly at a regional competition in Croatia, winning Third Place.
        The team's achievements to date show its dedication and innovation. The
        students who are part of the Formula Student team do not stop being
        inspired and working hard, eagerly awaiting the next performances.
      </div>
      <GoUpButton />
    </div>
  );
}

export default OurHistory;
