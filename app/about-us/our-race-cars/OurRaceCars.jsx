"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import GoUpButton from "../../components/go-up/goUp";
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
    <div className="our-cars" data-aos-delay="100">
      <div className="our-cars-info">
        <h1 data-aos="fade-down" data-aos-delay="150">
          Our Race Cars
        </h1>
      </div>
      <div className="list-cars" data-aos-delay="150">
        <div className="car" data-aos="fade-left">
          <div className="car-info" data-aos="fade-left" data-aos-delay="200">
            <h1 data-aos="fade-down" data-aos-delay="250">
              TSR-03
            </h1>
            <ul data-aos="fade-right" data-aos-delay="300">
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
            data-aos="fade-left"
            data-aos-delay="350"
          />
        </div>
        <div className="car" data-aos="fade-right">
          <Image
            src="/images/car-photos/car-italy-edit.png"
            alt="Description"
            width={815}
            height={414}
            className="img-logo"
            data-aos="fade-right"
          />
          <div className="car-info" data-aos="fade-right" data-aos-delay="400">
            <h1 data-aos="fade-down" data-aos-delay="450">
              TSR-02
            </h1>
            <ul data-aos="fade-left" data-aos-delay="500">
              <li>hp - </li>
              <li>top speed - </li>
              <li>chassis type - </li>
              <li>engine type - </li>
            </ul>
          </div>
        </div>
        <div className="car" data-aos="fade-left">
          <div className="car-info" data-aos="fade-left" data-aos-delay="550">
            <h1 data-aos="fade-down" data-aos-delay="600">
              TSR-01
            </h1>
            <ul data-aos="fade-right" data-aos-delay="650">
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
            data-aos="fade-left"
            data-aos-delay="700"
          />
        </div>
      </div>
      <GoUpButton />
    </div>
  );
};

export default OurRaceCars;
