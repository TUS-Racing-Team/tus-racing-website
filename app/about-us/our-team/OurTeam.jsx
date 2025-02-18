
'use client';

import { useEffect, React } from "react";
import Image from "next/image";
import "./our-team.css";
import GoUpButton from "../../components/go-up/goUp";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles for animations


const teamMembers = [
  { name: "John Doe", role: "Team Leader", image: "https://picsum.photos/400/300?random=8" },
  { name: "Alice Smith", role: "Mechanical Engineer", image: "/team/alice.jpg" },
  { name: "Bob Johnson", role: "Software Engineer", image: "/team/bob.jpg" },
  { name: "Emma Brown", role: "Aerodynamics Specialist", image: "/team/emma.jpg" },
];

export default function AboutTeam() {

  useEffect(() => {
    AOS.init({
      duration: 500, // Duration of animation in milliseconds
      easing: "ease-out", // Smooth easing for animations
      once: false, // Set to true if animations should run only once when scrolling
    });
  }, []);

  return (
    <div className="about-team-container">
      <Image
        src="/images/logo-tus-blue-true.png"
        alt="Description"
        width={320}
        height={50}
        className="img-logo"
        data-aos="fade-down" // Animation when the element enters the viewport
      />
      <h1 className="team-title">Meet Our Team</h1>
      <p className="team-description">
        We are a passionate group of students dedicated to pushing the limits of engineering and innovation in Formula Student.
      </p>
      <div className="team-info">
        <p><strong>TUS Racing Team</strong> is a team that, since 2015, has brought together a group of students and engineers working on the development and construction of race cars. We are young and ambitious individuals united by our passion for motorsports and engineering design.</p>
        <p>As part of the Formula Student initiative, we design, construct, and compete with specially built race cars. Our work involves various aspects of automotive engineering, including race car design, mechanics, electronics, programming, and team management.</p>
        <p>Our goal is to create an innovative and competitive car that can compete in international Formula Student competitions. The project not only allows us to apply and develop our academic knowledge but also to face the challenges of real motorsport. Beyond Formula Student competitions, we also participate in and support various automotive and charity events.</p>
        <p>As a team, we work together, exchange ideas and knowledge, learn from our mistakes, and grow in the process of creating our car. We strive for excellence, push the boundaries of what’s possible, and promote innovation in automotive engineering.</p>
        <p>We are committed to sharing our passion and love for cars and engineering design while expanding our knowledge and experience in the thrilling world of motorsport.</p>
        <p>We believe that together we can create something unique and inspiring.</p>
      </div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src="https://picsum.photos/400/300?random=8" alt="" className="team-image" />
            <div className="team-member-info">
              <h2 className="team-member-name">{member.name}</h2>
              <p className="team-member-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
      <GoUpButton />
    </div>
  );
}
