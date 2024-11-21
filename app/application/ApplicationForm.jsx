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

  return (
    <div className="container">
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
            placeholder="ex: myname@example.com"
            value={formData.email}
            required
            onChange={handleChange}
          />
          <small className="small-text">example@example.com</small>
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
            value={formData.yearOfStudy}
            required
            onChange={handleChange}
          />
        </div>

        {/* Skills and Experience */}
        <div className="form-group">
          <label>
            Relevant Skills and Experience <span className="required">*</span>
          </label>
          <textarea
            name="skills"
            placeholder="Describe your skills, relevant coursework, or any hands-on experience related to Formula Student."
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
            value={formData.portfolioLink}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">
          Apply
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
