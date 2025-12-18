import React from "react";
import "./index.css";

export default function Home() {
    return (
        <div>
            <section className="hero">
                <h1>Hello, My name is Kanan Guliyev.</h1>
                <p>Welcome to my portfolio website.</p>
                <div className="socials">
                    <a
                        href="https://github.com/Thanos555/SITE"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i> GitHub Repository
                    </a>
                    <a
                        href="https://github.com/Thanos555"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i> GitHub Account
                    </a>
                    <a
                        href="https://www.codecademy.com/profiles/thanoskanan"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Codecademy
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kenan-quliyev-836936323/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                </div>
            </section>
            <br />
            <br />
            <br />
            <section id="experience" className="experience">
                <div className="container">
                    <h2>Experience & Participation</h2>
                    <br />
                    <div className="experience-cards">
                        <div className="card">
                            <img src="/img/parkcinemalogo.jpg" alt="Park Cinema" />
                            <h3>Park Cinema</h3>
                        </div>
                        <div className="card">
                            <img src="/img/cop29logo.webp" alt="COP29" />
                            <h3>COP29</h3>
                        </div>
                        <div className="card">
                            <img src="/img/ecotechlogo.jpg" alt="Baku Eco Tech 2023" />
                            <h3>Baku Eco Tech 2023</h3>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <section id="my-site" className="my-site">
                <div className="container">
                    <h2>My WebSite</h2>
                    <div className="site-card">
                        <img src="/img/tacorootlogo2.png" alt="tacoroot" />
                        <h3>Tacoroot</h3>
                        <br />
                        <a
                            href="https://finalproject-one-gamma.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-visit"
                        >
                            Visit Site
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
