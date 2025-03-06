"use client";

import React from "react";
import { useEffect } from "react";
import GoUpButton from "../components/go-up/goUp";
import "./formula-student.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles for animations
import { useLanguage } from "../context/LanguageContext";


const FormulaStudent = () => {
    const { t } = useLanguage();
  
  useEffect(() => {
    AOS.init({
      duration: 500, // Duration of animation in milliseconds
      easing: "ease-out", // Smooth easing for animations
      once: false, // Set to true if animations should run only once when scrolling
    });
  }, []);

  return (
    <div className="formula-student-container">
      {/* Header */}
      <header className="formula-header">
        <h1 data-aos="fade-down" data-aos-delay="200">
          {t.formula_student.title}
        </h1>
        <p data-aos="fade-up" data-aos-delay="300">
        {t.formula_student.description}
        </p>
      </header>

      {/* About Formula Student */}
      <div className="formula-content">
        <section
          className="about-section"
          data-aos="zoom-in-up"
          data-aos-delay="400"
        >
          <div className="info">
            <h2 data-aos="zoom-in" data-aos-delay="500">
            {t.formula_student.sections.what_is.title}
            </h2>
            <p data-aos="fade-up" data-aos-delay="600">
              {t.formula_student.sections.what_is.content.paragraph1}
            </p>
            <p data-aos="fade-up" data-aos-delay="600">
            {t.formula_student.sections.what_is.content.paragraph2}
            </p>
            <p data-aos="fade-up" data-aos-delay="600">
            {t.formula_student.sections.what_is.content.paragraph3}
            </p>
            <p data-aos="fade-up" data-aos-delay="600">
            {t.formula_student.sections.what_is.content.paragraph4}
            </p>
          </div>
          <img
            src="https://www.epsa-team.com/images/FS/expofs-min-resize.jpg"
            alt=""
            data-aos="zoom-in-left"
            data-aos-delay="650"
          />
        </section>

        {/* History Section */}
        <section
          className="history-section"
          data-aos="zoom-in-up"
          data-aos-delay="700"
        >
          <img
            src="https://www.formulabharat.com/wp-content/uploads/2021/05/11-May-Website.jpg"
            alt=""
            data-aos="zoom-in-right"
            data-aos-delay="750"
          />
          <div className="info">
            <h2 data-aos="zoom-in" data-aos-delay="800">
            {t.formula_student.sections.history.title}
            </h2>
            <p data-aos="fade-up" data-aos-delay="850">
            {t.formula_student.sections.history.content.paragraph1}
            </p>
            <p data-aos="fade-up" data-aos-delay="850">
            {t.formula_student.sections.history.content.paragraph2}
            </p>
            <p data-aos="fade-up" data-aos-delay="850">
            {t.formula_student.sections.history.content.paragraph3}
            </p>
          </div>
        </section>

        {/* Why It Matters */}
        <section
          className="section-topic"
          data-aos="zoom-in-up"
          data-aos-delay="900"
        >
          <div className="info">
            <h2 data-aos="zoom-in" data-aos-delay="950">
            {t.formula_student.sections.importance.title}
            </h2>
            <p data-aos="fade-up" data-aos-delay="1000">
            {t.formula_student.sections.importance.content.paragraph1}
            </p>
            <ul data-aos="fade-right" data-aos-delay="1000">
              <li data-aos="fade-right" data-aos-delay="1050">
              {t.formula_student.sections.importance.content.key_points[0]}
              </li>
              <li data-aos="fade-right" data-aos-delay="1050">
              {t.formula_student.sections.importance.content.key_points[1]}
              </li>
              <li data-aos="fade-right" data-aos-delay="1050">
              {t.formula_student.sections.importance.content.key_points[2]}
              </li>
              <li data-aos="fade-right" data-aos-delay="1050">
              {t.formula_student.sections.importance.content.key_points[3]}
              </li>
            </ul>

            <p data-aos="fade-up" data-aos-delay="1100">
            {t.formula_student.sections.importance.content.paragraph2}
            </p>
            <p data-aos="fade-up" data-aos-delay="1100">
            {t.formula_student.sections.importance.content.paragraph3}
            </p>
          </div>
          <img
            src="https://i.ytimg.com/vi/mVl4jsHya2A/maxresdefault.jpg"
            alt=""
            data-aos="zoom-in-left"
            data-aos-delay="1150"
          />
        </section>
      </div>
      <GoUpButton />
    </div>
  );
};

export default FormulaStudent;
