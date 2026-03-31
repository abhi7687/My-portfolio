import { motion } from "framer-motion";
import "./About.css";

const About = () => {
    const username = "abhiram7687"
    return (
        <div className="about">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="premium-title"
            >
                The Bio
            </motion.h1>
            <p className="about-summary">
                Entry-level Software Developer with strong foundations in Python,
                JavaScript, Machine Learning, and the Software Development Life Cycle.
                Passionate about building scalable applications and solving real-world
                problems using AI and full-stack technologies.
            </p>

            <div className="about-grid">
                {/* Skills Section */}
                <div className="about-card">
                    <h3>Skills</h3>
                    <ul>
                        <li>Python, JavaScript, SQL</li>
                        <li>React.js, React Native, Node js</li>
                        <li>Machine Learning, Deep Learning (FNN)</li>
                        <li>Basic NLP, Scikit-learn, EDA</li>
                        <li>Git, Jira</li>
                    </ul>
                </div>
                {/* Conceptual Strengths Section */}
                <div className="about-card">
                    <h3>Conceptual Strengths</h3>
                    <ul>
                        <li>Data Structures & Algorithms</li>
                        <li>Software Development Life Cycle (SDLC)</li>
                        <li>ETL Pipelines</li>
                        <li>Debugging & Testing</li>
                        <li>Optimization Techniques</li>
                        <li>OS</li>
                        <li>Computer Network</li>
                    </ul>
                </div>
                {/* Education Section */}
                <div className="about-card">
                    <h3>Education</h3>
                    <p>
                        B.Tech in Computer Science and Engineering <br />
                        Malla Reddy University (2021 – 2025)
                    </p>
                </div>

            </div>
            <div className="leetcode-full">
                <h3>LeetCode Practice</h3>

                <p className="about-summary">
                    I actively solve Data Structures and Algorithms problems on LeetCode
                    to strengthen my problem-solving and analytical skills.
                </p>

                <img
                    src={`https://leetcard.jacoblin.cool/${username}?theme=dark&font=Karma`}
                    alt="LeetCode Stats"
                    className="leetcode-card"
                />

                <div className="leetcode-btn-container">
                    <a
                        href={`https://leetcode.com/${username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="leetcode-btn"
                    >
                        🔗 View Profile
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About