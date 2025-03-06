"use client";
import React, { useState, useEffect } from "react";
import GoUpButton from "../components/go-up/goUp";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./application-form.css"; // Ensure the original CSS remains unchanged
import { useLanguage } from "../context/LanguageContext";


const ApplicationForm = () => {
  const { t } = useLanguage();

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

  // Initialize AOS (animation on scroll)
  useEffect(() => {
    AOS.init({
      duration: 700, // Duration for animations
      easing: "ease-out-back",
      once: true, // Trigger animations only once
    });
  }, []);

  // Function to send data to Discord webhook
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

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle file input change (for resume)
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files[0],
    }));
  };

  // Handle form submission
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
          {/* Form Title */}
          <h2
            data-aos="zoom-in" // Apply zoom-in animation to the title
            data-aos-delay="150"
            data-aos-duration="700"
          >
            {t.forms.apply.title}
          </h2>

          {/* Form Introduction Paragraph */}
          <p
            data-aos="fade-up" // Apply fade-up animation to the paragraph
            data-aos-delay="200"
            data-aos-duration="700"
          >
            {t.forms.apply.th}
          </p>

          {/* Form Start */}
          <form onSubmit={handleSubmit}>
            {/* Name Fields (First and Last Name) */}
            <div
              className="form-group"
              data-aos="fade-up" // Apply fade-up animation to name field
              data-aos-delay="250"
              data-aos-duration="700"
            >
              <label>
              {t.forms.apply.name} <span className="required">*</span>
              </label>
              <div className="half-width">
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  title={t.forms.apply.f_name}
                  value={formData.firstName}
                  required
                  onChange={handleChange}
                />
                <small className="small-text">{t.forms.apply.f_name}</small>
              </div>
              <div className="half-width">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  title={t.forms.apply.l_name}
                  value={formData.lastName}
                  required
                  onChange={handleChange}
                />
                <small className="small-text">{t.forms.apply.l_name}</small>
              </div>
            </div>

            {/* Email Field */}
            <div
              className="form-group"
              data-aos="fade-up" // Apply fade-up animation to email field
              data-aos-delay="300"
              data-aos-duration="700"
            >
              <label>
              {t.forms.apply.email} <span className="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@example.com"
                title={t.forms.apply.email}
                value={formData.email}
                required
                onChange={handleChange}
              />
            </div>

            {/* University Field */}
            <div
              className="form-group"
              data-aos="fade-up" // Apply fade-up animation to university field
              data-aos-delay="350"
              data-aos-duration="700"
            >
              <label>
              {t.forms.apply.uni} <span className="required">*</span>
              </label>
              <input
                type="text"
                name="university"
                placeholder={t.forms.apply.uni_name}
                title={t.forms.apply.uni_name}
                value={formData.university}
                required
                onChange={handleChange}
              />
            </div>

            {/* Course Field */}
            <div
              className="form-group"
              data-aos="fade-up" // Apply fade-up animation to course field
              data-aos-delay="400"
              data-aos-duration="700"
            >
              <label>
              {t.forms.apply.c_s} <span className="required">*</span>
              </label>
              <input
                type="text"
                name="course"
                placeholder={t.forms.apply.c_s_n}
                title="Study Course"
                value={formData.course}
                required
                onChange={handleChange}
              />
            </div>

            {/* Year of Study Field */}
            <div
              className="form-group"
              data-aos="fade-up" // Apply fade-up animation to year of study field
              data-aos-delay="450"
              data-aos-duration="700"
            >
              <label>
              {t.forms.apply.y_s} <span className="required">*</span>
              </label>
              <input
                type="number"
                name="yearOfStudy"
                min="1"
                max="4"
                title={t.forms.apply.y_s}
                value={formData.yearOfStudy}
                placeholder={t.forms.apply.y_s}
                required
                onChange={handleChange}
              />
            </div>

            {/* Skills and Experience Field */}
            <div
              className="form-group"
              data-aos="fade-up" // Apply fade-up animation to skills field
              data-aos-delay="500"
              data-aos-duration="700"
            >
              <label>
              {t.forms.apply.rs}{" "}
                <span className="required">*</span>
              </label>
              <textarea
                name="skills"
                placeholder={t.forms.apply.rs_d}
                title={t.forms.apply.rs_t}
                value={formData.skills}
                required
                onChange={handleChange}
              />
            </div>

            {/* Motivation Field */}
            <div
              className="form-group"
              data-aos="fade-up" // Apply fade-up animation to motivation field
              data-aos-delay="550"
              data-aos-duration="700"
            >
              <label>
              {t.forms.apply.why}{" "}
                <span className="required">*</span>
              </label>
              <textarea
                name="motivation"
                placeholder={t.forms.apply.why_p}
                title={t.forms.apply.why_p}
                value={formData.motivation}
                required
                onChange={handleChange}
              />
            </div>

            {/* Portfolio or GitHub Link Field (Optional) */}
            <div
              className="form-group"
              data-aos="fade-up" // Apply fade-up animation to portfolio link field
              data-aos-delay="600"
              data-aos-duration="700"
            >
              <label>{t.forms.apply.git}</label>
              <input
                type="url"
                name="portfolioLink"
                placeholder={t.forms.apply.git_p}
                title={t.forms.apply.git_t}
                value={formData.portfolioLink}
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="submit-btn"
              data-aos="zoom-in" // Apply zoom-in animation to the submit button
              data-aos-delay="650"
              data-aos-duration="700"
            >
              {t.forms.apply.apply}
            </button>
          </form>
        </div>
      </div>

      {/* Go Up Button Component */}
      <GoUpButton />
    </div>
  );
};

export default ApplicationForm;
