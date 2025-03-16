"use client";

import { useEffect, React } from "react";
import Image from "next/image";
import "./our-team.css";
import GoUpButton from "../../components/go-up/goUp";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles for animations
import { useLanguage } from "../../context/LanguageContext";


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
  const { t } = useLanguage();
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
        {t.our_team.title}
      </h1>
      <p className="team-description" data-aos="fade-up" data-aos-delay="300">
      {t.our_team.desc}
      </p>
      <div className="team-info" data-aos="fade-up" data-aos-delay="300">
        <p data-aos="fade-left" data-aos-delay="300">
        {t.our_team.text1}
        </p>
        <p data-aos="fade-right" data-aos-delay="400">
        {t.our_team.text2}
        </p>
        <p data-aos="fade-left" data-aos-delay="500">
        {t.our_team.text3}
        </p>
        <p data-aos="fade-right" data-aos-delay="600">
        {t.our_team.text4}
        </p>
        <p data-aos="fade-left" data-aos-delay="700">
        {t.our_team.text5}
        </p>
        <p data-aos="fade-right" data-aos-delay="800">
        {t.our_team.text6}
        </p>
      </div>
      {/* <div className="team-grid" data-aos-delay="700">
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
      </div> */}
      <GoUpButton />
    </div>
  );
}
