import { useState } from "react";
import Home from "./pages/Home/index.jsx";
import About from "./pages/About/aboutpage.jsx";
import Adaprojects from "./pages/Adaprojects/ada-projects.jsx";
import "./pages/Home/index.css";
import "./pages/About/aboutpage.css";
import "./pages/Adaprojects/adaprojects.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./App.css"


function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [page, setPage] = useState("home");

    const handleNavClick = (selectedPage) => {
        setPage(selectedPage);
        setMenuOpen(false);          // close hamburger
        window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
    };

    return (
        <div className="App">
            {/* NAVBAR */}
            <header>
                <nav className="navbar">
                    <a className="logo" href="#">MyPortfolio</a>

                    <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
                        <li
                            className={page === "home" ? "active" : ""}
                            onClick={() => handleNavClick("home")}
                        >
                            Home
                        </li>
                        <li
                            className={page === "about" ? "active" : ""}
                            onClick={() => handleNavClick("about")}
                        >
                            About
                        </li>
                        <li
                            className={page === "projects" ? "active" : ""}
                            onClick={() => handleNavClick("projects")}
                        >
                            SITE Projects
                        </li>
                    </ul>

                    <button
                        className="hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>
                </nav>
            </header>

            {/* PAGE CONTENT */}
            <main>
                {page === "home" && <Home />}
                {page === "about" && <About />}
                {page === "projects" && <Adaprojects />}
            </main>
            <footer>
                &copy; 2025 Kanan Guliyev |{" "}
                <button className="back-to-home" onClick={() => {
                    setPage("home");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}>
                    Back to Main Page
                </button>
            </footer>


        </div>
    );
}

export default App;
