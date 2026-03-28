import { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
    const heroRef = useRef<HTMLElement>(null);
    const gitHub = "https://github.com/abhi7687";
    const linkedIn = "https://www.linkedin.com/in/abhiramvaitla";

    useEffect(() => {
        const handleMouseMove = (e: any) => {
            if (heroRef.current) {
                const { left, top } = heroRef.current.getBoundingClientRect();
                const x = e.clientX - left;
                const y = e.clientY - top;
                heroRef.current.style.setProperty('--mouse-x', `${x}px`);
                heroRef.current.style.setProperty('--mouse-y', `${y}px`);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="hero" ref={heroRef}>
            <div className="hero-container">
                {/* Left Side: Content */}
                <div className="hero-content">
                    <p className="hero-greeting">Hi, I’m <span className="name-gradient">Abhiram</span></p>
                    <h1 className="hero-role">
                        Full Stack Developer <br />
                        <span className="role-highlight">& Machine Learning Engineer</span>
                    </h1>
                    <p className="hero-desc">
                        Aspiring Software Developer specializing in <strong>AI/ML</strong> and scalable web systems.
                        I build data-driven applications with a focus on performance and clean, production-quality code.
                    </p>
                    <div className="hero-buttons">
                        <a href="/Vaitla-Abhiram.pdf" target="_blank" className="btn primary">
                            View Resume
                        </a>
                        <div className="social-links">
                            <a href={gitHub} target="_blank" rel="noreferrer" className="btn-icon">
                                <i className="fab fa-github"></i> GitHub
                            </a>
                            <a href={linkedIn} target="_blank" rel="noreferrer" className="btn-icon">
                                <i className="fab fa-linkedin"></i> LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side: Visuals */}
                <div className="hero-visual">
                    <div className="img-background">
                        <div className="hero-image">
                            {/* You can place an actual Profile Image here or keep it as a Glass Orb */}
                            <div className="glass-inner"></div>
                            <span className="bubble bubble1"></span>
                            <span className="bubble bubble2"></span>
                            <span className="bubble bubble3"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;