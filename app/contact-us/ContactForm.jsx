"use client"; // Ensures the component runs client-side in Next.js
import React, { useState, useEffect } from "react"; // Import React and necessary hooks
import GoUpButton from "../components/go-up/goUp"; // Import GoUpButton component for scrolling back up
import AOS from "aos"; // Import AOS (Animate On Scroll) library for scroll animations
import "aos/dist/aos.css"; // Import AOS styles for animations
import "./contact-form.css"; // Import custom CSS for styling the contact form

const ContactForm = () => {
  // State to store the form data
  const [formData, setFormData] = useState({
    feedbackType: "", // Stores the feedback type (comments, suggestions, or questions)
    firstName: "", // Stores the first name
    lastName: "", // Stores the last name
    email: "", // Stores the email address
    description: "", // Stores the feedback description
  });

  // useEffect hook to initialize AOS with custom options
  useEffect(() => {
    AOS.init({
      duration: 700, // Set duration to 700ms for animations
      easing: "ease-out-back", // Set the easing function for animations
      once: true, // Animation triggers only once during scroll
    });
  }, []); // Empty dependency array to run only once when the component mounts

  // Function to handle input changes for form fields
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from event target
    setFormData((prevState) => ({
      ...prevState, // Copy the previous state
      [name]: value, // Update the specific field
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(formData); // Log the form data (for now, you can replace it with form submission logic)

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
        {/* Header for the form with fade-down animation */}
        <div
          className="box-h1"
          data-aos="fade-down"
          data-aos-duration="700"
          data-aos-delay="100"
        >
          <h1 className="contact-h1">Contact Us</h1>
        </div>

        {/* Form container with fade-up animation */}
        <div
          className="form"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <h2 data-aos="zoom-in" data-aos-delay="250" data-aos-duration="700">
            Feedback Form
          </h2>
          {/* Description paragraph with fade-up animation */}
          <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="700">
            We would love to hear your thoughts, suggestions, concerns, or
            problems with anything so we can improve!
          </p>

          {/* Form element with onSubmit handler */}
          <form onSubmit={handleSubmit}>
            {/* Feedback Type Radio Buttons with fade-up animation */}
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
                    onChange={handleChange} // Handle change for feedback type
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
                    onChange={handleChange} // Handle change for feedback type
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
                    onChange={handleChange} // Handle change for feedback type
                  />
                  Questions
                </label>
              </div>
            </div>

            {/* Feedback Description textarea with fade-up animation */}
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
                onChange={handleChange} // Handle change for feedback description
              />
            </div>

            {/* Name fields (First and Last Name) with fade-up animation */}
            <div
              className="form-group"
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="700"
            >
              <label>
                Name <span className="required">*</span>
              </label>
              {/* First Name input with half-width class */}
              <div className="half-width">
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  title="First Name"
                  value={formData.firstName}
                  required
                  onChange={handleChange} // Handle change for first name
                />
                <small className="small-text">First Name</small>
              </div>
              {/* Last Name input with half-width class */}
              <div className="half-width">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  title="Last Name"
                  value={formData.lastName}
                  required
                  onChange={handleChange} // Handle change for last name
                />
                <small className="small-text">Last Name</small>
              </div>
            </div>

            {/* Email input field with fade-up animation */}
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
                onChange={handleChange} // Handle change for email input
              />
            </div>

            {/* Submit button with zoom-in animation */}
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

      {/* GoUpButton component to scroll back to the top */}
      <GoUpButton />
    </div>
  );
};

export default ContactForm;
