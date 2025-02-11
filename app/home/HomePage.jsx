"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import GoUpButton from "../components/go-up/goUp";
import AOS from "aos";
import "./home.css";
import "aos/dist/aos.css";

const HomePage = () => {
  const [mobileVersion, setVersion] = useState(false);
  const [openTeam, setTeam] = useState("None");

  const checkRes = () => {
    if (window.innerWidth <= 425) {
      setVersion(true);
    } else {
      setVersion(false);
    }
  };

  const openTeamInfo = (team) => {
    if (openTeam == team) {
      setTeam("None");
    } else {
      setTeam(team);
    }
  };

  useEffect(() => {
    checkRes();
    AOS.init({
      duration: 450, // Duration of animation in ms
      easing: "ease-out", // Animation easing
      once: false,
      mirror: true,
    });
    // Add event listener for window resize
    window.addEventListener("resize", checkRes);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkRes);
    };
  }, [mobileVersion]);

  return (
    <div>
      <div
        className="landingPage"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "100vh",
          width: "100%",
          top: "82px",
        }}
      >
        <div className="main-ca">
          <div className="ca-info" data-aos="fade-up">
            <Image
              src="/images/logo-tus-white.png"
              alt="Description"
              width={293}
              height={70}
              className="img-logo"
              data-aos="fade-down"
            />
            <h1 data-aos="fade-up" data-aos-delay="400">
              Explore Our Engineering!
            </h1>
            <a href="#" data-aos="fade-up" data-aos-delay="700">
              See Our Work
            </a>
          </div>
        </div>
      </div>

      {/* Text and Images with AOS animation */}
      <div className="home-join-us">
        <div className="formula-student-info">
          <h5 data-aos="fade-up" data-aos-delay="200">
            WELCOME TO TUS RACING TEAM
          </h5>
          <h1 data-aos="fade-up" data-aos-delay="300">
            Formula Student in Sofia
          </h1>
          <div className="sl" data-aos="fade-up" data-aos-delay="300"></div>
          <p data-aos="fade-up" data-aos-delay="400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ut
            commodi delectus aspernatur, doloribus quam veritatis repellendus.
            Similique sed, non eligendi reiciendis necessitatibus, et animi,
            blanditiis at debitis pariatur temporibus.
          </p>
          <a href="/formula-student" className="more-about" data-aos="fade-up" data-aos-delay="550">
            More about formula student
          </a>
        </div>

        <div className="looking" data-aos="fade-up" data-aos-delay="300">
          <h1 data-aos="fade-up" data-aos-delay="350">
            We are searching for new talent in the following areas:
          </h1>
          <div className="sl" data-aos="fade-up" data-aos-delay="400"></div>

          <div
            className={`looking-teams ${mobileVersion ? "teams-res" : ""}`}
            data-aos="fade-down"
            data-aos-delay="450"
          >
            <div
              className={`team-desc ${mobileVersion ? "team-res" : ""}`}
              data-aos="fade-right"
              data-aos-delay="550"
            >
              <h3
                onClick={() => {
                  openTeamInfo("Mechanical");
                }}
              >
                {mobileVersion ? "Mechanical >" : "Mechanical"}
              </h3>
              {(!mobileVersion || openTeam == "Mechanical") && (
                <ul>
                  <li>Suspension</li>
                  <li>Aerodynamics</li>
                  <li>Chassis</li>
                  <li>Ergonomics</li>
                </ul>
              )}
            </div>
            <div
              className={`team-desc ${mobileVersion ? "team-res" : ""}`}
              data-aos="fade-down"
              data-aos-delay="650"
            >
              <h3
                onClick={() => {
                  openTeamInfo("Electrical");
                }}
              >
                {mobileVersion ? "Electrical >" : "Electrical"}
              </h3>
              {(mobileVersion == false || openTeam == "Electrical") && (
                <ul>
                  <li>LV-System</li>
                  <li>HV-System</li>
                  <li>Accumulator</li>
                  <li>Drivetrain</li>
                </ul>
              )}
            </div>
            <div
              className={`team-desc ${mobileVersion ? "team-res" : ""}`}
              data-aos="fade-up"
              data-aos-delay="850"
            >
              <h3
                onClick={() => {
                  openTeamInfo("Media");
                }}
              >
                {mobileVersion ? "Media >" : "Media"}
              </h3>
              {(!mobileVersion || openTeam == "Media") && (
                <ul>
                  <li>IT</li>
                  <li>Programming</li>
                  <li>TV</li>
                  <li>Journalist</li>
                </ul>
              )}
            </div>
            <div
              className={`team-desc ${mobileVersion ? "team-res" : ""}`}
              data-aos="fade-left"
              data-aos-delay="850"
            >
              <h3
                onClick={() => {
                  openTeamInfo("Business");
                }}
              >
                {mobileVersion ? "Business >" : "Business"}
              </h3>
              {(!mobileVersion || openTeam == "Business") && (
                <ul>
                  <li>Marketing</li>
                  <li>Accounting</li>
                  <li>Sponsoring</li>
                  <li>Test</li>
                </ul>
              )}
            </div>
          </div>
          <a
            href="/application"
            data-aos="zoom-in"
            data-aos-delay="550"
            className="go-to-application"
          >
            GO TO THE APPLICATION
          </a>
        </div>
      </div>

      <div
        className="sub-section"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          width: "100%",
        }}
      ></div>

      {/* Team Organization Section */}
      <div className="team-organization">
        <div
          className="team-information"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h1 data-aos="fade-right" data-aos-delay="400">
            Apply now!
          </h1>
          <div className="sl" data-aos="fade-down" data-aos-delay="500"></div>
          <br />
          <p data-aos="fade-left" data-aos-delay="700">
            Do you fancy motorsport and tinkering? <br />
            Do you have team spirit and want to get to know your fellow
            students? <br />
            Want to think outside the box and acquire new skills?
            <br />
            <br />
            Simply apply here!
          </p>
          <a href="/application" className="apply-team" data-aos="fade-up" data-aos-delay="500">
            GO TO THE APPLICATION
          </a>
        </div>

        {/* Image with animation */}
        <Image
          src="/images/team-photos/team-photo.jpg"
          alt="Description"
          width={700}
          height={500}
          className="img-team"
          data-aos="zoom-in"
          data-aos-delay="900"
        />
      </div>
      <GoUpButton />
    </div>
  );
};

export default HomePage;
