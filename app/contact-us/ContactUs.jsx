import ContactForm from './ContactForm';
import "./contact-us.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-intro">
        <h1>Contact Us</h1>
        <p>
          We would love to hear from you! Whether you have questions, suggestions,
          or just want to share your thoughts, we're here to listen. Please use the
          form below to get in touch with us.
        </p>
      </div>

      <ContactForm />
    </div>
  )
}

export default ContactUs