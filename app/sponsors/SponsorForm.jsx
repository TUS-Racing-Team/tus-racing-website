"use client";
import React, { useState, useEffect } from "react";
import GoUpButton from "../components/go-up/goUp"; // Importing the GoUpButton component
import AOS from "aos"; // Importing AOS for animations
import "aos/dist/aos.css"; // Import AOS styles
import "./sponsor-form.css"; // Import the CSS for this form
import { useLanguage } from "../context/LanguageContext";


const SponsorForm = () => {
  const { t } = useLanguage();
  
  // State hook to store form data
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    description: "",
    phone: "",
  });

  // Effect hook to initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 700, // Animation duration in milliseconds
      easing: "ease-out-back", // Easing function for animation
      once: true, // Make animations run only once
    });
  }, []); // Empty dependency array means it runs once when the component mounts

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target; // Extract name and value from the event target (input element)
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, // Update the specific form field in the state
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission (page reload)
    console.log(formData); // Log form data (this is where you would handle submission, e.g., sending to a server)

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
        {/* Title with AOS animation */}
        <div
          className="sponsor-box-h1"
          data-aos="fade-up" // Apply fade-up animation to the heading
          data-aos-duration="700"
          data-aos-delay="100"
        >
          <h1 className="sponsor-form-h1">{t.forms.sponsor.be}</h1>
        </div>

        {/* Form container with AOS animation */}
        <div
          className="form"
          data-aos="fade-up" // Apply fade-up animation to the form
          data-aos-duration="700"
          data-aos-delay="200"
        >
          {/* Form heading */}
          <h2
            data-aos="fade-up" // Apply fade-up animation to the heading
            data-aos-duration="700"
            data-aos-delay="150"
          >
            {t.forms.sponsor.sf}
          </h2>
          {/* Form description */}
          <p
            data-aos="fade-up" // Apply fade-up animation to the paragraph
            data-aos-delay="200"
            data-aos-duration="700"
          >
            {t.forms.sponsor.th}
          </p>

          {/* The form itself */}
          <form onSubmit={handleSubmit}>
            {/* Sponsorship description field */}
            <div
              className="form-group"
              data-aos="fade-up" // Apply fade-up animation to description field
              data-aos-delay="250"
              data-aos-duration="700"
            >
              <label>
              {t.forms.sponsor.des} <span className="required">*</span>
              </label>
              <textarea
                name="description"
                placeholder={t.forms.sponsor.des_p}
                value={formData.description} // Controlled component (value from state)
                title={t.forms.sponsor.des_t}
                required // Field is required
                onChange={handleChange} // Handle change for description field
              />
            </div>

            {/* Company name field */}
            <div
              className="form-group"
              data-aos="fade-up" // Apply fade-up animation to company name field
              data-aos-delay="300"
              data-aos-duration="700"
            >
              <label>
              {t.forms.sponsor.company_name} <span className="required">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                placeholder={t.forms.sponsor.company_p}
                title={t.forms.sponsor.company_t}
                value={formData.companyName} // Controlled component (value from state)
                required // Field is required
                onChange={handleChange} // Handle change for company name field
              />
            </div>

            {/* Contact person field */}
            <div
              className="form-group"
              data-aos="fade-up" // Apply fade-up animation to contact person field
              data-aos-delay="350"
              data-aos-duration="700"
            >
              <label>
              {t.forms.sponsor.contact} <span className="required">*</span>
              </label>
              <input
                type="text"
                name="contactPerson"
                placeholder="John Doe"
                title={t.forms.sponsor.contact_t}
                value={formData.contactPerson} // Controlled component (value from state)
                required // Field is required
                onChange={handleChange} // Handle change for contact person field
              />
            </div>

            {/* Email field */}
            <div
              className="form-group"
              data-aos="fade-up" // Apply fade-up animation to email field
              data-aos-delay="400"
              data-aos-duration="700"
            >
              <label>
              {t.forms.sponsor.email} <span className="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@example.com"
                title={t.forms.sponsor.email}
                value={formData.email} // Controlled component (value from state)
                required // Field is required
                onChange={handleChange} // Handle change for email field
              />
            </div>

            {/* Phone number field */}
            <div
              className="form-group"
              data-aos="fade-up" // Apply fade-up animation to phone number field
              data-aos-delay="450"
              data-aos-duration="700"
            >
              <label>
              {t.forms.sponsor.phone} <span className="required">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+359 888888888"
                value={formData.phone} // Controlled component (value from state)
                title={t.forms.sponsor.phone_t}
                onChange={handleChange} // Handle change for phone number field
                pattern="^(?:\+359\s?[89][0-9]{8}|0[87][0-9]{8})$" // Pattern for phone validation
                required // Field is required
              />
            </div>

            {/* Submit button with AOS animation */}
            <button
              type="submit"
              className="submit-btn"
              data-aos="zoom-in" // Apply zoom-in animation to submit button
              data-aos-delay="500"
              data-aos-duration="700"
            >
              {t.forms.sponsor.ss}
            </button>
          </form>
        </div>
      </div>
      {/* Scroll to top button */}
      <GoUpButton />
    </div>
  );
};

export default SponsorForm;
