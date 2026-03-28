import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react"; // Added useRef
import "./Navbar.css";

const Navbar = () => {
    const [theme, setTheme] = useState("dark");
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    
    const navRef = useRef<HTMLDivElement>(null); // Create a reference to the navbar

    // 1. Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            // If menu is open AND the click is NOT inside the navRef element
            if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [menuOpen]);

    // Load theme
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
            document.body.setAttribute("data-theme", savedTheme);
        }
    }, []);

    // Scroll active section + shrink navbar
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "experience", "projects", "achievements", "certificates", "contact"];
            let current = "home";

            for (let section of sections) {
                const el = document.getElementById(section);
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2) {
                    current = section;
                }
            }

            setActive(current);
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        document.body.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        /* Added ref={navRef} here */
        <div ref={navRef} className={`navbar ${scrolled ? "scrolled" : ""}`}>

            {/* HAMBURGER */}
            <div className="hamburger" onClick={toggleMenu}>
                {menuOpen ? "✕" : "☰"}
            </div>

            {/* LINKS */}
            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                <a href="#home" className={active === "home" ? "active" : ""} onClick={closeMenu}>Home</a>
                <a href="#about" className={active === "about" ? "active" : ""} onClick={closeMenu}>Bio</a>
                <a href="#experience" className={active === "experience" ? "active" : ""} onClick={closeMenu}>Experience</a>
                <a href="#projects" className={active === "projects" ? "active" : ""} onClick={closeMenu}>Works</a>
                <a href="#achievements" className={active === "achievements" ? "active" : ""} onClick={closeMenu}>Achievements</a>
                <a href="#certificates" className={active === "certificates" ? "active" : ""} onClick={closeMenu}>Certificates</a>
                <a href="#contact" className={active === "contact" ? "active" : ""} onClick={closeMenu}>Connect</a>
            </div>

            <div className="nav-right">
                <div className="custom-toggle" onClick={toggleTheme}>
                    <motion.div
                        className="toggle-handle"
                        animate={{
                            x: theme === "light" ? 28 : 0,
                            scaleX: [1, 1.4, 1],
                        }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    >
                        {theme === "light" ? "🔆" : "🌙"}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;