import React, { useState } from "react";
import "./Projects.css";
import ePlannerImage from "../assets/images/e-planner.png";
import shopifyImage from "../assets/images/Shopify.png";
import cliImage from "../assets/images/cli.png";
import jsPhenomenaImage from "../assets/images/jsphenomena.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  const projects = [
    {
      id: 6,
      title:
        "Gemini AI API Quiz Generator using Firebase, NodeJS, and React JS.",
      description:
        "A full-stack development project to showcase the use of the Gemini API in content creation. This project uses Gemini AI to dynamically generate engaging, topic-based quizzes, complete with multiple-choice questions, correct answers, and detailed explanations tailored for beginners. The application integrates a secure user authentication system using Firebase, a NodeJS backend for handling Gemini API interactions and data processing, and a responsive React JS frontend. Key features include: personalized quiz generation based on selected or custom topics, real-time scoring, secure user authentication, persistent quiz history stored in Firestore, and formatted code snippets within question explanations for enhanced learning.",
      technologies: ["React", "Flask", "Daraja API"],
      link: "https://github.com/computeman/mpesablog",
      github: "https://github.com/computeman/mpesablog",
      image:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1713818268842/abdb6bee-4167-4845-9d48-0b1cfccc39f7.png?auto=compress,format&format=webp",
      video: "https://your-video-url.com/eplanner-demo.mp4",
    },
    {
      id: 1,
      title: "Full Stack Integration of Daraja API",
      description:
        "A full-stack development project to showcase the use of Daraja API to process payments in an e-commerce site.",
      technologies: ["React", "Flask", "Daraja API"],
      link: "https://github.com/computeman/mpesablog",
      github: "https://github.com/computeman/mpesablog",
      image:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1713818268842/abdb6bee-4167-4845-9d48-0b1cfccc39f7.png?auto=compress,format&format=webp",
      video: "https://your-video-url.com/eplanner-demo.mp4",
    },
    {
      id: 2,
      title: "Full Stack Event Planner in Next JS and Flask",
      description:
        "E-Planner helps users keep track of their events and tasks with features like task monitoring, calendar views, and collaboration.",
      technologies: ["Next.js", "Flask", "SQLAlchemy"],
      link: "https://github.com/yourusername",
      github: "https://github.com/yourusername",
      image: ePlannerImage,
      video: "https://your-video-url.com/eplanner-demo.mp4",
    },
    {
      id: 3,
      title: "Full Stack Shopify254 App in React JS and Flask",
      description:
        "An e-commerce platform for managing online stores with features like product management, order handling, and sales tracking.",
      technologies: ["React", "Flask", "JWT"],
      link: "https://github.com/computeman/Phase4Project",
      github: "https://github.com/computeman/Phase4Project",
      image: shopifyImage,
      video: "https://your-video-url.com/eplanner-demo.mp4",
    },
    {
      id: 4,
      title: "Task Management CLI Application in Python",
      description:
        "A CLI application for task organization, offering task creation, categorization, prioritization, and due date assignment.",
      technologies: ["Python"],
      link: "https://github.com/computeman/Phase-3-CLI",
      github: "https://github.com/computeman/Phase-3-CLI",
      image: cliImage,
      video: "https://your-video-url.com/eplanner-demo.mp4",
    },
    {
      id: 5,
      title: "JSONPhenomena Blog App using HTML, CSS, and JS",
      description:
        "A dynamic blog app with features like instant likes, comments, and smooth navigation for an interactive experience.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/computeman/JSPhenomena-phase-1",
      github: "https://github.com/computeman/JSPhenomena-phase-1",
      image: jsPhenomenaImage,
      video: "https://your-video-url.com/eplanner-demo.mp4",
    },
  ];

  const handleClick = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setShowVideo(false);
  };

  const handleVideoPlay = () => {
    setShowVideo(true);
  };

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <ul className="projects-list">
        {projects.map((project) => (
          <li key={project.id} className="project-item">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-item-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <button onClick={() => handleClick(project)}>View Details</button>
             <button onClick={handleVideoPlay}>Play Video Demo</button>
             <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button>Live Site</button>
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <button>GitHub</button>
            </a>
            </div>

          </li>
        ))}
      </ul>

      {selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <p>
              <strong>Technologies used:</strong>{" "}
              {selectedProject.technologies.join(", ")}
            </p>
            <button onClick={handleVideoPlay}>Play Video Demo</button>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}

      {showVideo && selectedProject?.video && (
        <div className="modal">
          <div className="modal-content">
            <video controls autoPlay style={{ width: "100%" }}>
              <source src={selectedProject.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;