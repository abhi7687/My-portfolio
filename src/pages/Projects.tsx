import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";

const Projects = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const projects = [
        {
            id: 1,
            title: "Healthcare Chatbot",
            tag: "AI • HealthTech",
            description: "AI chatbot that predicts disease based on symptoms.",
            details: "Built with FastAPI and Deep Learning to provide instant guidance.",
            tech: ["React", "FastAPI", "Scikit-Learn"],
            github: "https://github.com/abhi7687/Helth_care_chatbot_using_FNN"
        },
        {
            id: 2,
            title: "Ads Classification",
            tag: "ML • Analytics",
            description: "Classifies social media ads based on user behavior.",
            details: "Targeting the right audience using demographic behavioral ETL pipelines.",
            tech: ["Python", "Angular", "ML"],
            github: "https://github.com/abhi7687/social_media_ads"
        },
        {
            id: 3,
            title: "Task Tracker CLI",
            tag: "Node.js • CLI Tool",
            description: "A custom CLI tool to efficiently manage tasks directly from the terminal.",
            details: "Developed a fully functional command-line application with modular architecture and JSON-based storage. Implemented features like task creation, updates, deletion, status tracking, and filtering. Converted the project into a global CLI tool using npm link for real-world usability.",
            tech: ["Node.js", "JavaScript", "CLI", "File System"],
            github: "https://github.com/abhi7687/task-tracker-cli"
        },
        {
            id: 4,
            title: "Smart Weather App",
            tag: "Full Stack • Real-time",
            description: "A full-stack weather application that provides real-time weather updates using geolocation, dynamic video backgrounds, and interactive 7-day forecasts.",
            details: "Built with a focus on user experience, the app automatically detects user location, handles API latency with intelligent loading states, and dynamically updates UI with weather-based animations. Optimized for performance and deployed using modern cloud platforms.",
            tech: ["React", "Node.js", "Express", "REST API", "Vercel", "Render"],
            github: "https://github.com/abhi7687/weather-app",
            link: "https://weather-app-pkf8.vercel.app/"
        }
    ];

    return (
        <section className="projects-section">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="premium-title"
            >
                Featured Works
            </motion.h1>

            <div className="bento-grid">
                {projects.map((project) => (
                    <motion.div
                        layoutId={`card-${project.id}`}
                        key={project.id}
                        className="premium-card"
                        onClick={() => setSelectedId(project.id)}
                        whileHover={{ y: -10 }}
                    >
                        <div className="card-glass">
                            <span className="project-tag">{project.tag}</span>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            <div className="tech-pills">
                                {project.tech.map(t => <span key={t}>{t}</span>)}
                            </div>

                            <div className="card-footer">
                                <span>View Case Study</span>
                                <div className="arrow-icon">→</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* FULL SCREEN PREVIEW MODAL */}
            <AnimatePresence>
                {selectedId && (
                    <>
                        <motion.div
                            className="premium-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                        />
                        <motion.div
                            layoutId={`card-${selectedId}`}
                            className="premium-modal"
                        >
                            <button className="close-premium" onClick={() => setSelectedId(null)}>✕</button>

                            <div className="modal-inner">
                                {(() => {
                                    const project = projects.find(p => p.id === selectedId);
                                    return project ? (
                                        <>
                                            <span className="project-tag">{project.tag}</span>
                                            <h2>{project.title}</h2>
                                            <p className="large-desc">{project.details}</p>

                                            <div className="modal-actions">
                                                <a href={project.github} target="_blank" className="cta-button">
                                                    Source Code
                                                </a>
                                                {project.link && (
                                                    <a href={project.link} target="_blank" className="cta-button">
                                                        Live Demo
                                                    </a>
                                                )}
                                            </div>
                                        </>
                                    ) : null;
                                })()}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;