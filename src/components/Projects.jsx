import { useState } from "react";

const projects = [
{
  title: "Highway Toll Control with Computer Vision",
  description: "This project tackles critical challenges in Sri Lanka’s highway system – outdated manual toll collection, congestion, and lack of proper enforcement.",
  link: "https://www.linkedin.com/posts/hasidu-sandeepa-06178032b_computervision-ai-mobileappdevelopment-activity-7370257177929871360-Di0k?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFM6zEkBJCSF05hiHnfVjT8F6cqlVfCptYY",
  image: "../assets/highway.jpg",
  technologies: ["Group project", "Flutter", "Firebase", "ML", "React.js"]
},
 { 
    "title": "Full-Stack Learning Platform", 
    "description": "A powerful learning platform tailored for students, with a Flutter mobile app and a MERN stack web application.", 
    "link": "https://www.linkedin.com/posts/hasidu-sandeepa-06178032b_flutter-dart-mobiledevelopment-activity-7338789825405186048-IsWF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFM6zEkBJCSF05hiHnfVjT8F6cqlVfCptYY",
    "image": "../assets/lms.jpg",
    "technologies": ["Group project", "Flutter", "Dart", "MERN stack", "MongoDB Atlas", "Node.js", "Express.js"]
},
{
  "title": "Construction Items Rent App",
  "description": "A cross-platform rental app for construction items, featuring category browsing, a cart, orders, and secure payments. It includes user authentication and an admin panel.",
  "link": "",
  "image": "../assets/rent.jpeg",
  "technologies": ["Flutter", "Firebase", "Dart", "GoRouter", "Providers"]
},
{
  "title": "Flutter + Firebase To-Do App",
  "description": "A To-Do app for managing tasks with real-time updates and a clean UI, built to explore real-time capabilities of Firebase and sharpen Flutter UI/UX skills.",
  "link": "https://www.linkedin.com/posts/hasidu-sandeepa-06178032b_flutter-firebase-firestore-activity-7333336741921107968-fILk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFM6zEkBJCSF05hiHnfVjT8F6cqlVfCptYY",
  "image": "../assets/todo.jpg",
  "technologies": ["Flutter", "Firebase Firestore", "Provider", "go_router"]
},
{
  "title": "Student Capture & Attendance System",
  "description": "A system that captures student images and marks attendance automatically using machine learning, with real-time email notifications for late arrivals sent to parents. It streamlines student records and communication for educational institutions.",
  "link": "https://www.linkedin.com/posts/hasidu-sandeepa-06178032b_python-machinelearning-jupyter-activity-7295690806567292928-kUop?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFM6zEkBJCSF05hiHnfVjT8F6cqlVfCptYY",
  "image": "../assets/attendence.jpg",
  "technologies": ["Python", "Jupyter", "Tkinter", "MongoDB", "Machine Learning", "SMTP", "CSV"]
},
{
  "title": "Dictation Master - English Learning Companion",
  "description": "A mobile app designed to make learning English fun and engaging with features like a word collection, translator, quizzes, and interactive learning tools.",
  "link": "https://www.linkedin.com/posts/hasidu-sandeepa-06178032b_englishlearning-mobileapp-languageskills-activity-7269524933704130560-NY5P?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFM6zEkBJCSF05hiHnfVjT8F6cqlVfCptYY",
  "image": "../assets/dic.jpg",
  "technologies": ["Flutter"]
},
{
  "title": "Speech to Text Translator",
  "description": "A browser extension using the Web Speech API to convert spoken language into text in real-time, designed to enhance accessibility and improve note-taking for users.",
  "link": "https://www.linkedin.com/posts/hasidu-sandeepa-06178032b_speechtotext-webspeechapi-accessibility-activity-7256833416908730370-g04U?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFM6zEkBJCSF05hiHnfVjT8F6cqlVfCptYY",
  "image": "",
  "technologies": ["Web Speech API", "JavaScript", "Browser Extension"]
},
{
  "title": "SOS Game",
  "description": "A digital version of the classic SOS game built with Flutter for two players, featuring a clean UI and a dynamic grid system.",
  "link": "https://www.linkedin.com/posts/hasidu-sandeepa-06178032b_flutter-gamedevelopment-mobileapp-activity-7252497744106323969-bJCr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFM6zEkBJCSF05hiHnfVjT8F6cqlVfCptYY",
  "image": "../assets/sosgame.jpg",
  "technologies": ["Flutter", "Dart"]
},
{
  "title": "Weather App",
  "description": "A weather app built with Flutter that provides real-time weather updates and a 7-day forecast. It features a search function and a responsive design.",
  "link": "https://www.linkedin.com/posts/hasidu-sandeepa-06178032b_flutter-weatherapp-appdevelopment-activity-7246047484223836160-d3Wh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFM6zEkBJCSF05hiHnfVjT8F6cqlVfCptYY",
  "image": "../assets/weatherapp.jpg",
  "technologies": ["Flutter", "API Integration"]
},
{
  "title": "Library Management System",
  "description": "A fully functional Library Management System built with C# and SQL. It manages book collections, tracks user records, handles borrowing and returns, and generates reports.",
  "link": "https://www.linkedin.com/posts/hasidu-sandeepa-06178032b_csharp-sql-librarymanagement-activity-7252487763441188864-8IyN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFM6zEkBJCSF05hiHnfVjT8F6cqlVfCptYY",
  "image": "../assets/libms.jpg",
  "technologies": ["C#", "SQL", "Windows Forms"]
}
];

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="projects-section">
      {/* Header */}
      <div className="projects-header">
        <h2>My Projects</h2>
        <p>A collection of applications and systems I’ve built using different technologies.</p>
        <div className="underline"></div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {displayedProjects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {/* Technologies Used */}
            <div className="tech-stack">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>

            <a href={project.link} target="_blank" rel="noreferrer" className="button">
              View Project
            </a>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="see-more-container">
        <button className="see-more-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "See Less" : "See More"}
        </button>
      </div>

      {/* Inline CSS */}
      <style>{`
      
        .projects-section {
          padding: 5rem 2rem;
          background-color: #111;
          color: #f5f5f5;
          text-align: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .projects-header h2 {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: #e53e3e;
        }

        .projects-header p {
          color: #aaa;
          font-size: 1.6rem;
          margin-bottom: 1rem;
        }
       
        .underline {
          width: 80px;
          height: 4px;
          background-color: #e53e3e;
          margin: 0.5rem auto 2rem;
          border-radius: 9999px;
          transition: width 0.3s;
        }

        .projects-header:hover .underline {
          width: 120px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media(min-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media(min-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .project-card {
          background-color: #1a1a1a;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.5);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.7);
        }

        .project-image img {
          width: 100%;
          height: 600px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 1rem;
        }

        .project-card h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: #e53e3e;
        }

        .project-card p {
          font-size: 1rem;
          color: #ccc;
          margin-bottom: 1rem;
        }

        .tech-stack {
          margin-bottom: 1rem;
        }

        .tech-badge {
          display: inline-block;
          background: #222;
          border: 1px solid #e53e3e;
          color: #e53e3e;
          padding: 4px 10px;
          font-size: 0.9rem;
          border-radius: 8px;
          margin: 4px;
          transition: all 0.3s;
        }

        .tech-badge:hover {
          background: #e53e3e;
          color: #fff;
        }

        .project-card a {
          text-decoration: none;
          color: #fff;
          background-color: #e53e3e;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-weight: bold;
          transition: background-color 0.3s, transform 0.3s;
        }

        .project-card a:hover {
          background-color: #c53030;
          transform: scale(1.05);
        }

        .see-more-container {
          margin-top: 2rem;
        }

        .see-more-btn {
          background-color: transparent;
          color: #e53e3e;
          border: 2px solid #e53e3e;
          padding: 0.8rem 2rem;
          font-size: 1rem;
          font-weight: bold;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .see-more-btn:hover {
          background-color: #e53e3e;
          color: #fff;
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}

export default Projects;
