"use client";
import React, { useState, useEffect } from "react";
import GoUpButton from "../components/go-up/goUp";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./contact-form.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    feedbackType: "",
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 700, // Set duration to 700ms for faster animation
      easing: "ease-out-back",
      once: true,
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
      feedbackType: "",
      firstName: "",
      lastName: "",
      email: "",
      description: "",
    });
  };

  return (
    <div className="box">
      <div className="container">
        {/* Animate the entire form container */}
        <div
          className="box-h1"
          data-aos="fade-down"
          data-aos-duration="700"
          data-aos-delay="100"
        >
          <h1 className="contact-h1">Contact Us</h1>
        </div>

        <div
          className="form"
          data-aos="fade-up" // Animating the form itself
          data-aos-duration="800" // Slightly slower animation for the form container
          data-aos-delay="200" // Delay the form animation to start after the heading
        >
          <h2 data-aos="zoom-in" data-aos-delay="250" data-aos-duration="700">
            Feedback Form
          </h2>
          <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="700">
            We would love to hear your thoughts, suggestions, concerns, or
            problems with anything so we can improve!
          </p>
          <form onSubmit={handleSubmit}>
            <div
              className="form-group"
              data-aos="fade-up"
              data-aos-delay="350"
              data-aos-duration="700"
            >
              <label>
                Feedback Type <span className="required">*</span>
              </label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="feedbackType"
                    value="comments"
                    title="Feedback Options"
                    required
                    checked={formData.feedbackType === "comments"}
                    onChange={handleChange}
                  />
                  Comments
                </label>
                <label>
                  <input
                    type="radio"
                    name="feedbackType"
                    value="suggestions"
                    title="Feedback Options"
                    required
                    checked={formData.feedbackType === "suggestions"}
                    onChange={handleChange}
                  />
                  Suggestions
                </label>
                <label>
                  <input
                    type="radio"
                    name="feedbackType"
                    value="questions"
                    title="Feedback Options"
                    required
                    checked={formData.feedbackType === "questions"}
                    onChange={handleChange}
                  />
                  Questions
                </label>
              </div>
            </div>

            {/* Feedback Description */}
            <div
              className="form-group"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="700"
            >
              <label>
                Describe Your Feedback: <span className="required">*</span>
              </label>
              <textarea
                name="description"
                placeholder="Your opinion, suggestions and questions..."
                title="Description"
                value={formData.description}
                required
                onChange={handleChange}
              />
            </div>

            {/* Name */}
            <div
              className="form-group"
              data-aos="fade-up"
              data-aos-delay="450"
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
              data-aos="fade-up"
              data-aos-delay="500"
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

            <button
              type="submit"
              className="submit-btn"
              data-aos="zoom-in"
              data-aos-delay="600"
              data-aos-duration="700"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
      <GoUpButton />
    </div>
  );
};

export default ContactForm;
