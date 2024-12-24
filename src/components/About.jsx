import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hi, I’m Daudi Mwanzia, a full-stack developer passionate about
              solving problems with digital solutions. I specialize in designing
              user-friendly systems and bridging the gap between the backend and
              frontend using technologies like React, Django, Flask, and more.
            </p>
            <p>
              Beyond coding, I enjoy writing beginner-friendly technical blogs,
              exploring scenic routes on my motorcycle, and indulging in
              comedies or action-packed games.
            </p>
            <h3>Technologies I’ve been working with recently:</h3>
            <ul className="about-tech-list">
              <li>React.js</li>
              <li>Node.js</li>
              <li>Python (Django, Flask)</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML & CSS</li>
            </ul>
          </div>
          <div className="about-photo">
            <img
              src="https://unsplash.it/600/400"
              alt="Profile"
              className="profile-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
