import React from "react";
import "./aboutpage.css";

const About = () => {
  return (
    <div>
      <div id="about" className="about">
        <img
          className="portrait"
          src={process.env.PUBLIC_URL + "/img/kananguliyev.jpg"}
          alt="Portrait"
        />
        <p>
          I am a Junior Front-End Developer and a Computer Science major at ADA University.
          Alongside my studies, I am also the co-founder of Study AI, a startup focused on helping students
          find universities, scholarships, and application requirements through an AI-powered platform.
          I worked at Park Cinema as a cinema technician, where I gained valuable hands-on experience in technical operations.
          My goal is to grow as a developer, contribute to meaningful projects, and create tools that make people’s lives easier.
        </p>
      </div>
      <br />
      <br />
      <br />
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>If you'd like to get in touch, feel free to reach out via the following:</p>
        <div className="contact-card">
          <div className="contact-item">
            <strong>Phone:</strong> <a href="tel:+994997757000">+994 99 775 70 00</a>
          </div>
          <div className="contact-item">
            <strong>Email:</strong> <a href="mailto:kguliyev24465@ada.edu.az">kguliyev24465@ada.edu.az</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
