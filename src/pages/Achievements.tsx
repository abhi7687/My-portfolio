import { motion } from "framer-motion";
import "./Achievements.css";
import { useState } from "react";

const Achievements = () => {
    const hackathon_certificate =
        "https://drive.google.com/file/d/1csiqpuuBUavuRU6O7fLnPfZYhRL41teW/view?usp=drive_link";

    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: any) => {
        const { width, height, left, top } =
            e.currentTarget.getBoundingClientRect();

        const x = (e.clientX - left - width / 2) / 25;
        const y = (e.clientY - top - height / 2) / 25;

        setRotate({ x: -y, y: x });
    };

    return (
        <div className="achievements">
            <div className="achievements-container">
                <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="premium-title"
            >
                Proud Moments
            </motion.h1>

                <div className="achievements-grid">
                    <div
                        className="achievement-card"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => setRotate({ x: 0, y: 0 })}
                        style={{
                            transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
                        }}
                    >
                        {/* LEFT */}
                        <div className="cert-preview">
                            <a href={hackathon_certificate} target="_blank" rel="noopener noreferrer">
                                <img src="/IISC_hackathon.jpg" alt="Certificate" />
                            </a>
                        </div>

                        {/* RIGHT */}
                        <div className="cert-details">
                            <span className="badge">Hackathon</span>
                            <h3>🥇 IISc Bangalore Hackathon</h3>
                            <p>Secured 1st place among 15+ teams</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;