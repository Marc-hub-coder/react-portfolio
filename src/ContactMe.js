import React, { useState } from 'react';

function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);

    // Show the confirmation message after submission
    setSubmitted(true);

    // Clear the form
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // Hide the message after 5 seconds (optional)
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <button type="submit">Send</button>
      </form>

      {/* Success Message */}
      {submitted && <p className="success-message">Your message has been sent successfully!</p>}
    </div>
  );
}

export default ContactMe;
