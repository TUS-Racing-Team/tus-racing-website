"use client";
import { useState, useEffect } from "react"; // Import React hooks
import Image from "next/image"; // Import Next.js Image component
import GoUpButton from "../components/go-up/goUp"; // Import a custom "Go Up" button component
import AOS from "aos"; // Import AOS library for scroll animations
import "./home.css"; // Import custom styles
import "aos/dist/aos.css"; // Import AOS CSS for animations

const HomePage = () => {
  const [mobileVersion, setVersion] = useState(false); // State to track if the screen is mobile size
  const [openTeam, setTeam] = useState("None"); // State to track which team section is open

  // Function to check window size and set mobileVersion state accordingly
  const checkRes = () => {
    if (window.innerWidth <= 425) {
      setVersion(true); // Set mobileVersion to true for small screen sizes
    } else {
      setVersion(false); // Otherwise, set mobileVersion to false
    }
  };

  // Function to toggle the display of a team section when clicked
  const openTeamInfo = (team) => {
    if (openTeam == team) {
      setTeam("None"); // Close the section if it's already open
    } else {
      setTeam(team); // Open the clicked team section
    }
  };

  // useEffect hook to initialize AOS and handle window resize
  useEffect(() => {
    checkRes(); // Check the window size when the component is mounted
    AOS.init({
      duration: 450, // Set animation duration
      easing: "ease-out", // Set animation easing function
      once: false, // Disable animation running only once
      mirror: true, // Enable animations to run on scroll back into view
    });

    // Add an event listener to track window resize and update mobileVersion
    window.addEventListener("resize", checkRes);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkRes);
    };
  }, [mobileVersion]); // Re-run effect if mobileVersion changes

  return (
    <div>
      {/* Landing Page Section */}
      <div
        className="landingPage"
        style={{
          backgroundSize: "cover", // Make the background image cover the entire area
          backgroundPosition: "center", // Center the background image
          backgroundAttachment: "fixed", // Keep background fixed while scrolling
          height: "100vh", // Full viewport height
          width: "100%", // Full viewport width
          top: "82px", // Offset top position
        }}
      >
        <div className="main-ca">
          <div className="ca-info" data-aos="fade-up">
            {" "}
            {/* Apply AOS fade-up animation */}
            <Image
              src="/images/logo-tus-white.png" // Logo image
              alt="Description" // Alt text for accessibility
              width={293} // Set image width
              height={70} // Set image height
              className="img-logo" // Class for styling
              data-aos="fade-down" // Apply AOS fade-down animation
            />
            <h1 data-aos="fade-up" data-aos-delay="400">
              {" "}
              {/* Header with animation */}
              Explore Our Engineering!
            </h1>
            <a href="#" data-aos="fade-up" data-aos-delay="700">
              {" "}
              {/* Call-to-action link */}
              See Our Work
            </a>
          </div>
        </div>
      </div>

      {/* Section with text and AOS animations */}
      <div className="home-join-us">
        <div className="formula-student-info">
          <h5 data-aos="fade-up" data-aos-delay="200">
            {" "}
            {/* Heading with AOS animation */}
            WELCOME TO TUS RACING TEAM
          </h5>
          <h1 data-aos="fade-up" data-aos-delay="300">
            Formula Student in Sofia
          </h1>
          <div className="sl" data-aos="fade-up" data-aos-delay="300"></div>
          <p data-aos="fade-up" data-aos-delay="400">
            {/* Placeholder text */}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ut
            commodi delectus aspernatur, doloribus quam veritatis repellendus.
          </p>
          <a
            href="/formula-student"
            className="more-about"
            data-aos="fade-up"
            data-aos-delay="550"
          >
            More about formula student
          </a>
        </div>

        {/* Team sections */}
        <div className="looking" data-aos="fade-up" data-aos-delay="300">
          <h1 data-aos="fade-up" data-aos-delay="350">
            We are searching for new talent in the following areas:
          </h1>
          <div className="sl" data-aos="fade-up" data-aos-delay="400"></div>

          {/* Team list */}
          <div
            className={`looking-teams ${mobileVersion ? "teams-res" : ""}`}
            data-aos="fade-down"
            data-aos-delay="450"
          >
            {/* Mechanical Team Section */}
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

            {/* Electrical Team Section */}
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

            {/* Media Team Section */}
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
                {!mobileVersion || openTeam == "Media" ? "Media >" : "Media"}
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

            {/* Business Team Section */}
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

          {/* Call to application page */}
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

      {/* Sub-section with background image */}
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
            {/* Description text */}
            Do you fancy motorsport and tinkering? <br />
            Do you have team spirit and want to get to know your fellow
            students? <br />
            Want to think outside the box and acquire new skills?
            <br />
            <br />
            Simply apply here!
          </p>
          <a
            href="/application"
            className="apply-team"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            GO TO THE APPLICATION
          </a>
        </div>

        {/* Team image with animation */}
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

      {/* "Go to Top" button */}
      <GoUpButton />
    </div>
  );
};

export default HomePage;
