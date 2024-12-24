import React from "react";
import "./Skills.css";
import frontendIcon from "../assets/images/frontend-icon.png";
import backendIcon from "../assets/images/backend-icon.png";
import softSkillsIcon from "../assets/images/soft-skills-icon.png";
import educationIcon from "../assets/images/education-icon.png";

const Skills = () => {
  const skills = [
    {
      category: "frontend",
      icon: frontendIcon,
      title: "Frontend Skills",
      items: [
        "HTML",
        "CSS",
        "TypeScript",
        "JavaScript",
        "React",
        "UI/UX",
        "Web Design",
        "Search Engine Optimization",
      ],
    },
    {
      category: "backend",
      icon: backendIcon,
      title: "Backend Skills",
      items: ["Django Framework", "Flask Framework", "Database - PostgreSQL"],
    },
    {
      category: "soft-skills",
      icon: softSkillsIcon,
      title: "Soft Skills and Education",
      items: [
        "Effective Communication",
        "Teamwork",
        "Problem solving",
        "Adaptability",
      ],
    },
  ];
  return (
    <section className="skills">
      <h2 className="sub-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className={`skill-category ${skill.category}`}>
            <img src={skill.icon} alt={`${skill.title} Icon`} />
            <h2>{skill.title}</h2>
            <ul>
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
