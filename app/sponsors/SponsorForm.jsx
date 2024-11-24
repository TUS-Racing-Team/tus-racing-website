"use client";
import React, { useState } from "react";
import "./sponsor-form.css";

const SponsorForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    description: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="box">
      <div className="container">
        <div className="form">
          <h1>Sponsorship Form</h1>
          <p>
            Thank you for your interest in sponsoring our event. Please fill out
            the form below to get started!
          </p>
          <form onSubmit={handleSubmit}>
            {/* Sponsorship Description */}
            <div className="form-group">
              <label>
                Sponsorship Description: <span className="required">*</span>
              </label>
              <textarea
                name="description"
                placeholder="Please describe your sponsorship plans..."
                value={formData.description}
                title="Description"
                required
                onChange={handleChange}
              />
            </div>

            {/* Company Name */}
            <div className="form-group">
              <label>
                Company Name <span className="required">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                placeholder="Your Company"
                title="Company Name"
                value={formData.companyName}
                required
                onChange={handleChange}
              />
            </div>

            {/* Contact Person */}
            <div className="form-group">
              <label>
                Contact Person <span className="required">*</span>
              </label>
              <input
                type="text"
                name="contactPerson"
                placeholder="John Doe"
                title="Full Name"
                value={formData.contactPerson}
                required
                onChange={handleChange}
              />
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

            <div className="form-group">
              <label>
                Phone Number <span className="required">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+359 888888888"
                value={formData.phone}
                title="Phone number must be in the format: +359 888888888 or 0888888888"
                required
                onChange={handleChange}
                pattern="^(?:\+359\s[8-9][0-9]{8}|0[0-9]{8})$"
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit Sponsorship
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SponsorForm;
