"use client";

import React from "react";
import { useEffect } from "react";
import GoUpButton from "../components/go-up/goUp";
import "./formula-student.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles for animations

const FormulaStudent = () => {

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
      <header className="formula-header" >
        <h1 data-aos="fade-down">Welcome to Formula Student</h1>
        <p data-aos="fade-down">
          Formula Student is an international engineering design competition
          that inspires the engineers of tomorrow to push the limits of
          technology and innovation.
        </p>
      </header>

      {/* About Formula Student */}
      <main className="formula-content">
        <section className="about-section">
          <div className="info" data-aos="fade-left">
            <h2>What is Formula Student?</h2>
            <p>
              Formula Student is the world’s largest engineering competition,
              challenging students to design, build, test, and race their own
              single-seat formula-style car. Teams from universities around the
              globe compete not only on the track but also in business and
              engineering design presentations.
            </p>
            <p>
              The competition emphasizes engineering excellence, teamwork, and
              innovation, offering students a platform to apply their academic
              knowledge to real-world engineering challenges. Each car is judged
              on its design, performance, cost analysis, and overall presentation.
            </p>
          </div>
          <img src="https://www.epsa-team.com/images/FS/expofs-min-resize.jpg" alt="" data-aos="fade-right" />
        </section>

        {/* History Section */}
        <section className="history-section" data-aos="fade-down">
          <img src="https://www.formulabharat.com/wp-content/uploads/2021/05/11-May-Website.jpg" alt="" data-aos="fade-left" />
          <div className="info" data-aos="fade-right">
            <h2>History of Formula Student</h2>
            <p>
              Formula Student was founded in 1981 by the Society of Automotive
              Engineers (SAE) in the United States as Formula SAE. Its mission was
              to create a learning experience where students could apply their
              engineering skills in a competitive and creative environment.
            </p>
            <p>
              The competition expanded to Europe in 1998 with the launch of
              Formula Student UK, organized by the Institution of Mechanical
              Engineers (IMechE). Today, Formula Student competitions are held
              worldwide, with events in Germany, Italy, Japan, and Australia, to
              name a few.
            </p>
            <p>
              Over the years, the competition has grown significantly, attracting
              thousands of participants annually. It has become a prestigious
              event where the best and brightest future engineers showcase their
              talents.
            </p>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="importance-section" data-aos="fade-down">
          <div className="info" data-aos="fade-left">
            <h2>Why is Formula Student Important?</h2>
            <p>
              Formula Student is more than just a competition; it’s an opportunity
              for students to gain hands-on experience in engineering, project
              management, and teamwork. Participants learn to:
            </p>
            <ul>
              <li>Work collaboratively in multidisciplinary teams.</li>
              <li>Develop innovative solutions to technical challenges.</li>
              <li>Manage budgets and timelines effectively.</li>
              <li>Present their ideas professionally to judges and sponsors.</li>
            </ul>
            <p>
              Many alumni of Formula Student have gone on to work in leading
              automotive companies, motorsport teams, and other cutting-edge
              industries. It’s a stepping stone to a successful career in
              engineering and beyond.
            </p>
          </div>
          <img src="https://i.ytimg.com/vi/mVl4jsHya2A/maxresdefault.jpg" alt="" data-aos="fade-right"/>
        </section>
      </main>
    </div>
  );
};

export default FormulaStudent;
