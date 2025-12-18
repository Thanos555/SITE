import React from "react";
import "./adaprojects.css";

const Adaprojects = () => {
  return (
    <div>
      <section className="site">
        <h1>SITE Projects</h1>
      </section>

      <div className="projects">
        <div className="project-card">
          <h2>Project 1</h2>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/HtYE4XnlqNw"
              title="Project 1 Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="project-description">
            This video demonstrates how to build basic logic gates (AND, OR, NOT) using transistors.
          </p>
        </div>

        <div className="project-card">
          <h2>Project 2</h2>
          <div className="video-container">
            <h3>Coming Soon....</h3>
          </div>
          <p className="project-description">
            An Hour of Code / AI activity introducing students to basic coding and AI.
          </p>
        </div>

        <div className="project-card">
          <h2>Project 3</h2>
          <div className="video-container">
            <h3>Coming Soon....</h3>
          </div>
          <p className="project-description">
            A personal portfolio website fully designed and developed by me to showcase my projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Adaprojects;
