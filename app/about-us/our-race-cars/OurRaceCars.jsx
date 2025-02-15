"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./our-cars.css";

const OurRaceCars = () => {
  useEffect(() => {
      AOS.init({
        duration: 500, // Duration of animation in ms
        easing: "ease-out", // Animation easing
        once: false, // Run animation once
      });
    }, []);

  return (
    <div className="our-cars">
      <div className="our-cars-info">
        <Image
          src="/images/logo-tus-blue-true.png"
          alt="Description"
          width={320}
          height={50}
          className="img-logo"
          data-aos="fade-down" // Animation when the element enters the viewport
        />
        <h1 data-aos="fade-down">OUR RACE CARS</h1>
      </div>
      <div className="list-cars">
        <h1>TSR-03</h1>
        <div className="car" data-aos="fade-left">
          <div className="car-info">
            <h2>TSR-03</h2>
            <ul>
              <li>hp - </li>
              <li>top speed - </li>
              <li>chassis type - </li>
              <li>engine type - </li>
            </ul>
          </div>
          <Image
            src="/images/car-photos/car-italy-edit.png"
            alt="Description"
            width={815}
            height={414}
            className="img-logo"
            data-aos="fade-right" 
          />
        </div>
        <h1>TSR-02</h1>
        <div className="car">
        <Image
            src="/images/car-photos/car-italy-edit.png"
            alt="Description"
            width={815}
            height={414}
            className="img-logo"
            data-aos="fade-left" 
          />
          <div className="car-info" data-aos="fade-right">
            <h2>TSR-02</h2>
            <ul>
              <li>hp - </li>
              <li>top speed - </li>
              <li>chassis type - </li>
              <li>engine type - </li>
            </ul>
          </div>
        </div>
        <h1>TSR-01</h1>
        <div className="car">
          <div className="car-info" data-aos="fade-left">
            <h1>TSR-01</h1>
            <ul>
              <li>hp - </li>
              <li>top speed - </li>
              <li>chassis type - </li>
              <li>engine type - </li>
            </ul>
          </div>
          <Image
            src="/images/car-photos/car-italy-edit.png"
            alt="Description"
            width={815}
            height={414}
            className="img-logo"
            data-aos="fade-right" 
          />
        </div>
      </div>
    </div>
  );
}

export default OurRaceCars;
