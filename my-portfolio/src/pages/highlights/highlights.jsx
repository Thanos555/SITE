import React from "react";
import "./highlights.css";

const highlights = [
    {
        title: "Extracurricular 1",
        description:
            "Tacoroot is a food recipes website that helps users discover, cook, and share delicious taco-inspired dishes easily."
    },
    {
        title: "Extracurricular 2",
        description:
            "Completed a 3-month internship at the British Council’s Business School, gaining hands-on experience in business operations and project management."
    },
    {
        title: "Extracurricular 3",
        description:
            "Completed a 6-month internship at Software Village as a Junior Front-End Developer, building and maintaining responsive web applications."
    },
    {
        title: "Extracurricular 4",
        description:
            "Completed a 3-month volunteer internship at Taskool startup, assisting with course management and supporting students in their learning journey."
    }
];

function Highlights() {
    return (
        <section id="highlights" className="highlights-section">
            <h2>Project Highlights</h2>
            <p>Here are some notable projects and achievements I’m proud of:</p>
            <div className="highlights-list">
                {highlights.map((item, index) => (
                    <div key={index} className="highlight-item">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Highlights;
