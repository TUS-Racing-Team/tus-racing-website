"use client";
import React, { useState, useEffect } from "react";
import GoUpButton from "../components/go-up/goUp";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./sponsor-form.css"; // Ensure that your CSS remains unchanged

const SponsorForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    description: "",
    phone: "",
  });

  useEffect(() => {
    // Initialize AOS library
    AOS.init({
      duration: 700, // Duration for animations
      easing: "ease-out-back",
      once: true, // Trigger animations only once
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can handle form submission logic here

    // Reset the form fields after submission
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      description: "",
      phone: "",
    });
  };

  return (
    <div className="box">
      <div className="container">
        <div
          className="sponsor-box-h1"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="100"
        >
          <h1 className="sponsor-form-h1">Be one of our sponsors</h1>
        </div>

        {/* Apply AOS to the form container */}
        <div
          className="form"
          data-aos="fade-up" // Apply fade-up animation to the whole form container
          data-aos-duration="700"
          data-aos-delay="200"
        >
          <h2
            data-aos="fade-up" // Apply fade-up animation to the heading
            data-aos-duration="700"
            data-aos-delay="150"
          >
            Sponsorship Form
          </h2>
          <p
            data-aos="fade-up" // Apply fade-up animation to the paragraph
            data-aos-delay="200"
            data-aos-duration="700"
          >
            Thank you for your interest in sponsoring our event. Please fill out
            the form below to get started!
          </p>

          <form onSubmit={handleSubmit}>
            {/* Sponsorship Description */}
            <div
              className="form-group"
              data-aos="fade-up" // Apply fade-up animation to description field
              data-aos-delay="250"
              data-aos-duration="700"
            >
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
            <div
              className="form-group"
              data-aos="fade-up" // Apply fade-up animation to company name field
              data-aos-delay="300"
              data-aos-duration="700"
            >
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
            <div
              className="form-group"
              data-aos="fade-up" // Apply fade-up animation to contact person field
              data-aos-delay="350"
              data-aos-duration="700"
            >
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
            <div
              className="form-group"
              data-aos="fade-up" // Apply fade-up animation to email field
              data-aos-delay="400"
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

            {/* Phone Number */}
            <div
              className="form-group"
              data-aos="fade-up" // Apply fade-up animation to phone number field
              data-aos-delay="450"
              data-aos-duration="700"
            >
              <label>
                Phone Number <span className="required">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+359 888888888"
                value={formData.phone}
                title="Phone number must be in the format: +359 888888888 or 0888888888"
                onChange={handleChange}
                pattern="^(?:\+359\s?[89][0-9]{8}|0[87][0-9]{8})$"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="submit-btn"
              data-aos="zoom-in" // Apply zoom-in animation to submit button
              data-aos-delay="500"
              data-aos-duration="700"
            >
              Submit Sponsorship
            </button>
          </form>
        </div>
      </div>
      <GoUpButton />
    </div>
  );
};

export default SponsorForm;
