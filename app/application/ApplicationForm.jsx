"use client";
import React, { useState, useEffect } from "react";
import GoUpButton from "../components/go-up/goUp";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./application-form.css"; // Ensure the original CSS remains unchanged

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    university: "",
    course: "",
    yearOfStudy: "",
    skills: "",
    motivation: "",
    portfolioLink: "",
    resume: null,
  });

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 700, // Duration for animations
      easing: "ease-out-back",
      once: true, // Trigger animations only once
    });
  }, []);

  const sendDataToDiscord = async () => {
    const response = await fetch("/api/sendToDiscord", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: `
          First Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nEmail: ${formData.email}\nUniversity: ${formData.university}\nCourse: ${formData.course}\nYear of Study: ${formData.yearOfStudy}\nSkills: ${formData.skills}\nMotivation: ${formData.motivation}\nPortfolio Link: ${formData.portfolioLink}
        `,
      }),
    });

    const result = await response.json();
    console.log(result);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    sendDataToDiscord();
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      university: "",
      course: "",
      yearOfStudy: "",
      skills: "",
      motivation: "",
      portfolioLink: "",
      resume: null,
    });
  };

  return (
    <div className="box">
      <div className="container">
        <div
          className="form"
          data-aos="fade-up" // Apply fade-up animation to the whole form
          data-aos-duration="700"
          data-aos-delay="100"
        >
          <h2
            data-aos="zoom-in" // Apply zoom-in animation to the title
            data-aos-delay="150"
            data-aos-duration="700"
          >
            Formula Student Application
          </h2>
          <p
            data-aos="fade-up" // Apply fade-up animation to the paragraph
            data-aos-delay="200"
            data-aos-duration="700"
          >
            Thank you for your interest in applying to join our Formula Student
            team! Please fill out the application form below.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div
              className="form-group"
              data-aos="fade-up" // Apply fade-up animation to name field
              data-aos-delay="250"
              data-aos-duration="700"
            >
              <label>
                Name <span className="required">*</span>
              </label>
              <div className="half-width">
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  title="First Name"
                  value={formData.firstName}
                  required
                  onChange={handleChange}
                />
                <small className="small-text">First Name</small>
              </div>
              <div className="half-width">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  title="Last Name"
                  value={formData.lastName}
                  required
                  onChange={handleChange}
                />
                <small className="small-text">Last Name</small>
              </div>
            </div>

            {/* Email */}
            <div
              className="form-group"
              data-aos="fade-up" // Apply fade-up animation to email field
              data-aos-delay="300"
              data-aos-duration="700"
            >
              <label>
                E-mail <span className="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@example.com"
                title="E-mail"
                value={formData.email}
                required
                onChange={handleChange}
              />
            </div>

            {/* University & Course */}
            <div
              className="form-group"
              data-aos="fade-up" // Apply fade-up animation to university field
              data-aos-delay="350"
              data-aos-duration="700"
            >
              <label>
                University <span className="required">*</span>
              </label>
              <input
                type="text"
                name="university"
                placeholder="University Name"
                title="University Name"
                value={formData.university}
                required
                onChange={handleChange}
              />
            </div>

            <div
              className="form-group"
              data-aos="fade-up" // Apply fade-up animation to course field
              data-aos-delay="400"
              data-aos-duration="700"
            >
              <label>
                Course of Study <span className="required">*</span>
              </label>
              <input
                type="text"
                name="course"
                placeholder="e.g., Mechanical Engineering"
                title="Study Course"
                value={formData.course}
                required
                onChange={handleChange}
              />
            </div>

            {/* Year of Study */}
            <div
              className="form-group"
              data-aos="fade-up" // Apply fade-up animation to year of study field
              data-aos-delay="450"
              data-aos-duration="700"
            >
              <label>
                Year of Study <span className="required">*</span>
              </label>
              <input
                type="number"
                name="yearOfStudy"
                min="1"
                max="4"
                title="Year Of Study"
                value={formData.yearOfStudy}
                placeholder="Year of study"
                required
                onChange={handleChange}
              />
            </div>

            {/* Skills and Experience */}
            <div
              className="form-group"
              data-aos="fade-up" // Apply fade-up animation to skills field
              data-aos-delay="500"
              data-aos-duration="700"
            >
              <label>
                Relevant Skills and Experience{" "}
                <span className="required">*</span>
              </label>
              <textarea
                name="skills"
                placeholder="Describe your skills, relevant coursework, or any hands-on experience related to Formula Student."
                title="Personal Skills"
                value={formData.skills}
                required
                onChange={handleChange}
              />
            </div>

            {/* Motivation */}
            <div
              className="form-group"
              data-aos="fade-up" // Apply fade-up animation to motivation field
              data-aos-delay="550"
              data-aos-duration="700"
            >
              <label>
                Why do you want to join the Formula Student team?{" "}
                <span className="required">*</span>
              </label>
              <textarea
                name="motivation"
                placeholder="Explain why you are passionate about Formula Student and what you hope to contribute to the team."
                title="Motivations"
                value={formData.motivation}
                required
                onChange={handleChange}
              />
            </div>

            {/* Portfolio or GitHub Link */}
            <div
              className="form-group"
              data-aos="fade-up" // Apply fade-up animation to portfolio link field
              data-aos-delay="600"
              data-aos-duration="700"
            >
              <label>Portfolio or GitHub Link (Optional)</label>
              <input
                type="url"
                name="portfolioLink"
                placeholder="e.g., https://github.com/yourusername"
                title="Portfolio Link"
                value={formData.portfolioLink}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              data-aos="zoom-in" // Apply zoom-in animation to the submit button
              data-aos-delay="650"
              data-aos-duration="700"
            >
              Apply
            </button>
          </form>
        </div>
      </div>
      <GoUpButton />
    </div>
  );
};

export default ApplicationForm;
