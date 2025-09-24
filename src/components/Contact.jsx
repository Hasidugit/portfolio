import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setIsSent(true);
    setTimeout(() => setIsSent(false), 4000); // auto-hide success after 4s
  };

  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-container">
          {/* Header */}
          <div className="contact-header">
            <h2>Contact me</h2>
            <p>Feel free to reach out for collaborations, freelance projects, or just a friendly chat.</p>
            <div className="underline"></div>
          </div>
<br />
<br  />
          {/* Content */}
          <div className="contact-content">
            {/* Left: Info */}
            <div className="contact-info">
              <h3>Contact Information</h3>
              <ul>
                <li><FontAwesomeIcon icon={faEnvelope} /> Hasidusandeepa24@gmail.com</li>
                <li><FontAwesomeIcon icon={faPhone} /> +94 74 3445604</li>
                <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Anuradhapura, Sri Lanka</li>
              </ul>
              <div className="social-links">
                <a href="https://github.com/Hasidugit" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://linkedin.com/in/hasidu-sandeepa-06178032b" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="contact-form-container">
              {isSent ? (
                <div className="form-success">
                  <p>✅ Message sent successfully! I’ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />

                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />

                  <label htmlFor="subject">Subject</label>
                  <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />

                  <label htmlFor="message">Message</label>
                  <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>

                  <button type="submit">Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Styles */}
      <style>{`
        .contact-section {
          background-color: #111;
          color: #f5f5f5;
          padding: 4rem 1rem;
          font-family: 'Segoe UI', sans-serif;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: background 0.5s;
        }
           .contact-section h2{
         fontsize: 3rem;
          color: #e53e3e;
       
        }

        .contact-container { max-width: 1200px; width: 100%; text-align: center; }

        .contact-header h2 {
          font-size: 2.8rem;
          font-weight: 700;
          position: relative;
          display: inline-block;
        }
        .contact-header .underline {
          width: 80px; height: 4px; background-color: #e53e3e;
          margin: 0.5rem auto 0;
          border-radius: 9999px;
          transition: width 0.3s;
        }

        .contact-header p { font-size: 1.8rem; color: #ccc; margin-top: 0.5rem; }
        .contact-header:hover .underline { width: 120px; }

        .contact-content { display: flex; flex-direction: column; gap: 2rem; justify-content: center; align-items: stretch; }
        @media (min-width: 800px) { .contact-content { flex-direction: row; gap: 2rem; } }

        .contact-info, .contact-form-container {
          background-color: #1e1e1e;
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.4);
          flex: 4; text-align: left; min-width: 0;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .contact-info:hover { transform: translateY(-5px); box-shadow: 0 12px 30px rgba(0,0,0,0.5); }

        .contact-info h3 { color: #e53e3e; margin-bottom: 1.5rem; font-size: 1.6rem; }
        .contact-info ul { list-style: none; padding: 0; margin: 0; font-size: 1.3rem; line-height: 2.5; }
        .contact-info ul li { display: flex; align-items: center; gap: 0.5rem; transition: color 0.3s; }
        .contact-info ul li:hover { color: #e53e3e; }

        .social-links { margin-top: 2rem; display: flex; gap: 1.5rem; }
        .social-links a { color: #fff; font-size: 1.7rem; transition: transform 0.3s, color 0.3s; }
        .social-links a:hover { transform: rotate(-10deg) scale(1.3); color: #e53e3e; }

        .contact-form-container form { display: flex; flex-direction: column; gap: 1rem; }
        .contact-form-container label { font-size: 1.2rem; font-weight: 600; margin-bottom: 0.3rem; color: #ddd; }

        .contact-form-container input, .contact-form-container textarea {
          padding: 0.9rem;
          border: 1px solid #444;
          background-color: #222;
          color: #f5f5f5;
          border-radius: 8px;
          font-size: 1rem;
          width: 100%;
          transition: border-color 0.3s, box-shadow 0.3s, transform 0.2s;
        }
        .contact-form-container input:focus, .contact-form-container textarea:focus {
          outline: none;
          border-color: #e53e3e;
          box-shadow: 0 0 8px #e53e3e;
          transform: scale(1.02);
        }

        .contact-form-container button {
          background-color: #e53e3e; color: #fff; border: none; padding: 1rem; font-size: 1rem; font-weight: bold;
          border-radius: 8px; cursor: pointer; transition: transform 0.2s, background-color 0.3s;
        }
        .contact-form-container button:hover { background-color: #c53030; transform: scale(1.05); }

        .form-success {
          background-color: #2b6c2b; color: #e0f2e0;
          padding: 2rem; border-radius: 12px; text-align: center;
          font-size: 1.2rem; font-weight: bold;
          animation: fadeIn 0.5s ease forwards;
        }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }

        .footer { background-color: #111; color: #aaa; padding: 1rem; text-align: center; border-top: 1px solid #333; }
        .footer-socials { display: flex; justify-content: center; gap: 1rem; margin-top: 0.5rem; }
        .footer-socials a { color: #aaa; text-decoration: none; transition: color 0.3s, transform 0.3s; }
        .footer-socials a:hover { color: #e53e3e; transform: scale(1.2); }
      `}</style>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
      <div className="footer-socials">
        <a href="https://github.com/Hasidugit" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/hasidu-sandeepa-06178032b" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer">Twitter</a>
      </div>
    </footer>
  );
}

export default Contact;
