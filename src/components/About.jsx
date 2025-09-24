import profileImage from "../assets/p1.png";

const skills = ["Flutter", "Dart", "React.js", "Node.js", "C#", "SQL", "MongoDB", "Git", "REST APIs"];

function About() {
  return (
    <section id="about" className="about-section">
      {/* Header */}
      <div className="about-header">
        <h2>About Me</h2>
        <div className="underline"></div>
      </div>

      <div className="about-container">
        {/* Profile Image */}
        <div className="about-image fade-in-left">
          <img src={profileImage} alt="Hasidu Sandeepa" />
        </div>

        {/* Bio + Skills */}
        <div className="about-content fade-in-right">
          <p>
            Hello! I’m <strong>xasidu Sandeepa</strong>, a passionate Flutter and mobile app developer. I build clean,
            responsive, and high-performance mobile applications for Android and iOS.
          </p>
          <p>
            I enjoy solving challenging problems, exploring new technologies, and creating apps that provide real value
            to users.
          </p>
          <p>
            My goal is to craft <strong>user-friendly</strong> and scalable mobile solutions using Flutter, Dart, and modern development tools.
          </p>

          <h3>Technical Skills</h3>
          <div className="skills">
            {skills.map((skill, index) => (
              <span key={index} className="skill-badge">{skill}</span>
            ))}
          </div>
        </div>
        
        
      </div>

      <style>{`
        .about-section {
          padding: 1rem 4rem;
          
          background: linear-gradient(135deg, #1c1c1c, #121212);
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .about-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .about-header h2 {
          font-size: 3rem;
          color: #e53e3e;
        }
        .about-header .underline {
          width: 80px;
          height: 4px;
          background-color: #e53e3e;
          margin: 0.5rem auto 0;
          border-radius: 9999px;
        }
        .about-header:hover .underline {
          width: 120px;
        }

        .about-container {
          display: flex;
          flex-direction: column;
          align-items: center;
            justify-content: left;
          gap: rem;
          max-width: 70000px;
          width: 100%;
        }

        @media (min-width: 768px) {
          .about-container {
            flex-direction: row;
            gap: 5rem;
          }
        }

        .about-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .about-image img {
        
          width: 400px;
          height: 400px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 15px 30px rgba(0,0,0,0.3);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .about-image img:hover {
          transform: scale(1.10) rotate(0deg);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .about-content {
          flex: 2;
          text-align: center;
          padding:  4rem;
        }

        @media (min-width: 768px) {
          .about-content { text-align: left; }
        }

        .about-content p {
          font-size: 1.4rem;
          line-height: 1.8;
          color: #ccc;
          margin-bottom: 1rem;
        }

        .about-content h3 {
          font-size: 2rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #e53e3e;
        }

        .skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .skill-badge {
          background: #e53e3e;
          color: #fff;
          padding: 0.55rem 1.2rem;
          border-radius: 25px;
          font-weight: 600;
          font-size: 1.2rem;
          transition: transform 0.3s, background 0.3s;
        }

        .skill-badge:hover {
          transform: scale(1.1);
          background: #c53030;
        }

        .fade-in-left {
          animation: fadeInLeft 1s ease forwards;
        }
        .fade-in-right {
          animation: fadeInRight 1s ease forwards;
        }

        @keyframes fadeInLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInRight {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}

export default About;
