// Timeline.jsx
import React from "react";
import "./Timeline.css";
import WorkOutlinedIcon from "@mui/icons-material/WorkOutlined";
const experiences = [
  {
    title: "Web Developer",
    company: "Swinburne Leadership Hub",
    date: "December 2021 – December 2022",
    description:
      "Analyzed the club website for design, functionality, and UX improvements. Optimized website performance by 20% through code and image optimizations. Developed new features using Next.js and Tailwind. Used Git and agile methodologies to manage projects and meet deadlines.",
  },
  {
    title: "React JS Intern",
    company: "Tidbeat",
    date: "August 2021 - November 2021",
    description:
      "Implemented responsive design with React JS and Sass for smooth UX across devices. Improved web app performance by 40% with code refactoring. Integrated Auth0 for secure user authentication. Collaborated effectively with cross-functional teams.",
  },
  {
    title: "Web Developer Intern",
    company: "Carikture",
    date: "November 2021 – December 2021",
    description:
      "Communicated with multiple clients to gather and clarify requirements. Explained technical proposals in simple terms for non-technical clients. Built frontend solutions using HTML, CSS, JavaScript, and PHP to meet client business needs.",
  },
  {
    title: "Customer Service Representative",
    company: "Coles",
    date: "August 2022 – September 2022",
    description:
      "Delivered friendly and efficient customer service, resolved inquiries, maintained store cleanliness, and ensured product availability.",
  },
];

const Timeline = () => {
  return (
    <div className="timeline-container">
      <div className="timeline-line" />
      <div className="timeline-items">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            {/* DATE on opposite side */}
            <div
              className={`timeline-date-container ${
                index % 2 === 0 ? "right" : "left"
              }`}
            >
              <span className="timeline-date">{exp.date}</span>
            </div>

            {/* CONTENT CARD */}
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
            </div>

            {/* ICON DOT */}
            <WorkOutlinedIcon className="timeline-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
