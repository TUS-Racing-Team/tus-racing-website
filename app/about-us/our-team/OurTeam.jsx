"use client";

import { useEffect, React } from "react";
import Image from "next/image";
import "./our-team.css";
import GoUpButton from "../../components/go-up/goUp";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles for animations

const teamMembers = [
  {
    name: "John Doe",
    role: "Team Leader",
    image: "https://picsum.photos/400/300?random=1",
  },
  {
    name: "Alice Smith",
    role: "Mechanical Engineer",
    image: "https://picsum.photos/400/300?random=2",
  },
  {
    name: "Bob Johnson",
    role: "Software Engineer",
    image: "https://picsum.photos/400/300?random=3",
  },
  {
    name: "Emma Brown",
    role: "Aerodynamics Specialist",
    image: "https://picsum.photos/400/300?random=4",
  },
];

export default function AboutTeam() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation in milliseconds
      easing: "ease-out", // Smooth easing for animations
      once: true, // Animations should run only once when scrolling
    });
  }, []);

  return (
    <div className="about-team-container" data-aos-delay="150">
      <h1 className="team-title" data-aos="fade-up" data-aos-delay="200">
        Meet Our Team
      </h1>
      <p className="team-description" data-aos="fade-up" data-aos-delay="300">
        We are a passionate group of students dedicated to pushing the limits of
        engineering and innovation in Formula Student.
      </p>
      <div className="team-info" data-aos="fade-up" data-aos-delay="300">
        <p data-aos="fade-left" data-aos-delay="300">
          <strong>TUS Racing Team</strong> is a team that, since 2015, has
          brought together a group of students and engineers working on the
          development and construction of race cars. We are young and ambitious
          individuals united by our passion for motorsports and engineering
          design.
        </p>
        <p data-aos="fade-right" data-aos-delay="400">
          As part of the Formula Student initiative, we design, construct, and
          compete with specially built race cars. Our work involves various
          aspects of automotive engineering, including race car design,
          mechanics, electronics, programming, and team management.
        </p>
        <p data-aos="fade-left" data-aos-delay="500">
          Our goal is to create an innovative and competitive car that can
          compete in international Formula Student competitions. The project not
          only allows us to apply and develop our academic knowledge but also to
          face the challenges of real motorsport. Beyond Formula Student
          competitions, we also participate in and support various automotive
          and charity events.
        </p>
        <p data-aos="fade-right" data-aos-delay="600">
          As a team, we work together, exchange ideas and knowledge, learn from
          our mistakes, and grow in the process of creating our car. We strive
          for excellence, push the boundaries of what’s possible, and promote
          innovation in automotive engineering.
        </p>
        <p data-aos="fade-left" data-aos-delay="700">
          We are committed to sharing our passion and love for cars and
          engineering design while expanding our knowledge and experience in the
          thrilling world of motorsport.
        </p>
        <p data-aos="fade-right" data-aos-delay="800">
          We believe that together we can create something unique and inspiring.
        </p>
      </div>
      <div className="team-grid" data-aos-delay="700">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member" data-aos="zoom-in">
            <img
              src={member.image}
              alt={member.name}
              className="team-image"
              data-aos="fade-up"
              data-aos-duration="550"
              data-aos-delay={index * 100 + 700} // Add a delay based on the index for a staggered effect
            />
            <div className="team-member-info">
              <h2
                className="team-member-name"
                data-aos="fade-up"
                data-aos-duration="550"
                data-aos-delay={index * 100 + 700} // Add a delay based on the index for a staggered effect
              >
                {member.name}
              </h2>
              <p
                className="team-member-role"
                data-aos="fade-up"
                data-aos-duration="550"
                data-aos-delay={index * 100 + 700} // Add a delay based on the index for a staggered effect
              >
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
      <GoUpButton />
    </div>
  );
}
