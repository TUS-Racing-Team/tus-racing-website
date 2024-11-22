"use client";
import { useState, useEffect } from "react";
import "./home.css";
import "./responsive-home.css"
import Image from "next/image";



const HomePage = () => {
  const [mobileVersion, setVersion] = useState(false)
  const [openTeam, setTeam] = useState("None")

  // send data to Discord
  async function sendMessage() {
    const response = await fetch('/api/sendToDiscord', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: 'Hello, Discord!' }),
    });
  
    const data = await response.json();
    console.log(data);
  }

  const checkRes = () => {
    if(window.innerWidth <= 425){
      setVersion(true)
    } else {
      setVersion(false)
    }
  }

  const openTeamInfo = (team) => {
    if(openTeam == team) {
      setTeam("None")
    } else {
      setTeam(team)
    }
  }

  useEffect(() => {
    checkRes(); 

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
        }}
      >
        <div className="main-ca">
          <div className="ca-info">
            <Image
              src="/images/logo-tus-white.png"
              alt="Description"
              width={293}
              height={70}
              className="img-logo"
            />
            <h1>Explore Our Engineering!</h1>
            <a href="#">See Our Work</a>
          </div>
        </div>
      </div>
      <div className="home-join-us">
        <div className="formula-student-info">
          <h5>WELCOME TO TUS RACING TEAM</h5>
          <h1>Formula Student in Sofia</h1>
          <div className="sl"></div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ut
            commodi delectus aspernatur, doloribus quam veritatis repellendus.
            Similique sed, non eligendi reiciendis necessitatibus, et animi,
            blanditiis at debitis pariatur temporibus.
          </p>
          <a href="/formula-student">More about formula student</a>
        </div>
        <div className="looking">
          <h1>We are searching for new talent in the following areas:</h1>
          <div className="sl"></div>
          
          <div className={`looking-teams ${mobileVersion ? "teams-res" : ""}`}>
            <div className={`team ${mobileVersion ? "team-res": ""}`}>
              <h3 onClick={() => {openTeamInfo("Mechanical")}}>{mobileVersion ? "Mechanical >" : "Mechanical"}</h3>
              {(!mobileVersion || (openTeam == "Mechanical")) && (
                <ul>
                <li>Suspension</li>
                <li>Aerodynamics</li>
                <li>Chassis</li>
                <li>Ergonomics</li>
              </ul>
              )}
              
            </div>
            <div className={`team ${mobileVersion ? "team-res": ""}`}>
              <h3 onClick={() => {openTeamInfo("Electrical")}}>{mobileVersion ? "Electrical >" : "Electrical"}</h3>
              {(mobileVersion == false || (openTeam == "Electrical")) && (
                <ul>
                  <li>LV-System</li>
                  <li>HV-System</li>
                  <li>Accumulator</li>
                  <li>Drivetrain</li>
                </ul>
              )}
            </div>
            <div className={`team ${mobileVersion ? "team-res": ""}`}>
              <h3 onClick={() => {openTeamInfo("Media")}}>{mobileVersion ? "Media >" : "Media"}</h3>
              {(!mobileVersion || (openTeam == "Media")) && (
                <ul>
                  <li>IT & Website</li>
                  <li>Social Media</li>
                  <li>Media Engineering</li>
                  <li>Media Production</li>
                </ul>
              )}
            </div>
            <div className={`team ${mobileVersion ? "team-res": ""}`}>
              <h3 onClick={() => {openTeamInfo("Business")}}>{mobileVersion ? "Business >" : "Business"}</h3>
              {(!mobileVersion || (openTeam == "Business")) && (
                <ul>
                  <li>Marketing</li>
                  <li>Accounting</li>
                  <li>Sponsoring</li>
                  <li>Test</li>
                </ul>
              )}
            </div>
          </div>
          <a href="/application" onClick={(e) => { e.preventDefault(); sendMessage(); }}>GO TO THE APPLICATION</a>
        </div>
      </div>
      <div
        className="sub-section"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          //height: '100vh', // Ensures it takes the full viewport height
          width: "100%",
        }}
      ></div>

      <div className="apply-now">
        <div className="apply-info">
          <h1>Apply now!</h1>
          <div className="sl"></div>
          <p>
            Do you fancy motorsport and tinkering? <br />
            Do you have team spirit and want to get to know your fellow
            students? <br />
            Want to think outside the box and acquire new skills?
            <br />
            <br />
            <br />
            Become part of a motivated team and get involved with E-Traxx.{" "}
            <br />
            Simply apply here!
          </p>
          <a href="/apply">GO TO THE APPLICATION</a>
        </div>
        <Image
          src="/images/team-photo.jpg"
          alt="Description"
          width={700}
          height={500}
          className="img-team"
        />
      </div>
    </div>
  );
};

export default HomePage;
