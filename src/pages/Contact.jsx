function Contact() {
  return (
    <main className="contact-page">
      <div className="page-heading">
        <p className="eyebrow">GET IN TOUCH</p>
        <h1>Contact Us</h1>
        <p>We would love to hear from you.</p>
      </div>

      <div className="contact-container">
        <div className="location">
          <h2>Our Location</h2>
          <p>Nairobi, Kenya</p>
          <p>Email: info@elanfashion.com</p>
          <p>Phone: +254 700 000 000</p>
        </div>

        <form className="contact-form">
          <h2>Send Us a Message</h2>

          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Subject</label>
          <input type="text" placeholder="Enter subject" required />

          <label>Message</label>
          <textarea placeholder="Write your message" rows="5" required />

          <button type="submit" className="add-btn">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;