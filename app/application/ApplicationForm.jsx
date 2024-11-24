"use client";
import React, { useState } from "react";
import "./application-form.css"; // Make sure to update or create CSS for this

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
  };

  const sendDataToDisocrd = async () => {
    //try {
    //  const response = await fetch("/sendToDiscord"); // Call your API route
    //  const data = await response.json();
    //  setMessage(data.message);
    //} catch (error) {
    //  console.error("Error fetching data:", error);
    //}

    const webhookUrl =
      "https://discord.com/api/webhooks/1307844630376615956/ZhcBPjfDhysbJVlxxctr2k0ZZUTh8gIFEpJvYv_HomykiNv5QYC5kPLBPezsE8nDkooC";

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Test: "Test" }),
      });

      if (!response.ok) {
        throw new Error(`Error sending message: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="box">
      <div className="container">
        <div className="form">
          <h1>Formula Student Application</h1>
          <p>
            Thank you for your interest in applying to join our Formula Student
            team! Please fill out the application form below.
          </p>
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="form-group">
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
            <div className="form-group">
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
            <div className="form-group">
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

            <div className="form-group">
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
            <div className="form-group">
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
            <div className="form-group">
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
            <div className="form-group">
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
            <div className="form-group">
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
              onClick={sendDataToDisocrd}
            >
              Apply
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
