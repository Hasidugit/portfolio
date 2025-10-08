import { faDribbble, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <img src="/assets/hero.jpg" alt="Hasidu Sandeepa" className="hero-image fade-in" />
      </div>
      <div className="hero-right fade-in delay-1">
        <h1>Hasidu Sandeepa</h1>
        <h2> Flutter Mobile App Developer</h2>
        <p>
          I build modern, responsive, and user-friendly mobile applications using Flutter. With a focus on clean code, smooth UI/UX, and robust functionality, I help turn ideas into high-quality apps that engage and delight users.
        </p>
        <div className="social-icons fade-in delay-2">
          <a href="https://dribbble.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDribbble} /></a>
          <a href="https://github.com/Hasidugit" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://linkedin.com/in/hasidu-sandeepa-06178032b" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>

        <div className="hero-buttons fade-in delay-3">
          <a href="/assets/cv.pdf" download className="btn download-btn">Download CV</a>
          <a href="#contact" className="btn contact-btn">Contact Me</a>
        </div>
      </div>

      <style>{`
        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 1rem;
          min-height: 100vh;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .hero {
            flex-direction: row;
            gap: 3rem;
          }
        }

        .hero-left {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .hero-image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
          transition: transform 0.3s;
        }

        .hero-image:hover { transform: scale(1.05); }
        @media (min-width: 768px) { .hero-image { width: 300px; height: 300px; } }
        @media (min-width: 1200px) { .hero-image { width: 400px; height: 400px; } }

        .hero-right { flex: 1; text-align: center; }
        @media (min-width: 768px) { .hero-right { text-align: left; } }

        .hero-right h1 { font-size: 2rem; margin-bottom: 0.5rem; }
        @media (min-width: 768px) { .hero-right h1 { font-size: 3rem; } }
        @media (min-width: 1200px) { .hero-right h1 { font-size: 3.8rem; } }

        .hero-right h2 {
          font-size: 1.0rem;
          color: #e53e3e;
          margin-bottom: 1rem;
        }
        @media (min-width: 768px) { .hero-right h2 { font-size: 1.5rem; } }
        @media (min-width: 1200px) { .hero-right h2 { font-size: 3rem; } }

        .hero-right p {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        @media (min-width: 768px) { .hero-right p { font-size: 1.25rem; } }

        .social-icons {
          display: flex;
          gap: 1.2rem;
          margin-bottom: 1rem;
          justify-content: center;
        }
        @media (min-width: 768px) { .social-icons { justify-content: flex-start; } }

        .social-icons a {
          font-size: 2rem;
          color: #444;
          transition: transform 0.3s, color 0.3s;
        }
        .social-icons a:hover {
          color: #e53e3e;
          transform: scale(1.15);
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }
        @media (min-width: 768px) {
          .hero-buttons { justify-content: flex-start; }
        }

        .btn {
          padding: 0.8rem 2rem;
          font-size: 1rem;
          font-weight: bold;
          border-radius: 8px;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.3s, background-color 0.3s;
        }

        .download-btn {
          background-color: #e53e3e;
          color: #fff;
        }
        .download-btn:hover {
          background-color: #c53030;
          transform: scale(1.05);
        }

        .contact-btn {
          background-color: #444;
          color: #fff;
        }
        .contact-btn:hover {
          background-color: #222;
          transform: scale(1.05);
        }

        /* === Friendly Animations === */
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in {
          opacity: 0;
          animation: fadeSlideUp 0.8s ease forwards;
        }
        .delay-1 { animation-delay: 0.3s; }
        .delay-2 { animation-delay: 0.6s; }
        .delay-3 { animation-delay: 0.9s; }
      `}</style>
    </div>
  );
};

export default Hero;
