"use client";
import "./home.css";
import Image from "next/image";



const HomePage = () => {
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
          <Image
            src="/images/logo-tus-white.png"
            alt="Description"
            width={293}
            height={70}
            className="img-logo"
          />
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
          <div className="looking-teams">
            <div className="team">
              <h3>Mechanical</h3>
              <ul>
                <li>Suspension</li>
                <li>Aerodynamics</li>
                <li>Chassis</li>
                <li>Ergonomics</li>
              </ul>
            </div>
            <div className="team">
              <h3>Electrical</h3>
              <ul>
                <li>LV-System</li>
                <li>HV-System</li>
                <li>Accumulator</li>
                <li>Drivetrain</li>
              </ul>
            </div>
            <div className="team">
              <h3>Media</h3>
              <ul>
                <li>IT & Website</li>
                <li>Social Media</li>
                <li>Media Engineering</li>
                <li>Media Production</li>
              </ul>
            </div>
            <div className="team">
              <h3>Business</h3>
              <ul>
                <li>Marketing</li>
                <li>Accounting</li>
                <li>Sponsoring</li>
                <li>Test</li>
              </ul>
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
