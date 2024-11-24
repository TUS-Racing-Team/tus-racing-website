"use client";
import React, { useState } from "react";
import "./contact-form.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    feedbackType: "",
    firstName: "",
    lastName: "",
    email: "",
    description: "",
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
          <h1>Feedback Form</h1>
          <p>
            We would love to hear your thoughts, suggestions, concerns, or
            problems with anything so we can improve!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
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
            <div className="form-group">
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

            <button type="submit" className="submit-btn">
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
