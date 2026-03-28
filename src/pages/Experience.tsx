import { motion } from "framer-motion";
import { useRef } from "react";
// 🔥 Import the Lottie Player
import { Player } from "@lottiefiles/react-lottie-player";
import "./Experience.css";

const Experience = () => {
    const rubis_cert = "https://drive.google.com/file/d/1OvZQ_G3QCdDgpo_v3RH6FwBV1nGc9BQR/view?usp=drive_link";
    const shopTalk_cert = "https://drive.google.com/file/d/1bJtLgSRp2lSxs-FrIrad5lC2zg1YPmnE/view?usp=drive_link";

    const ref = useRef(null);

    // 🔥 URL for a premium 3D "Liquid Glass" animation
    const lottieUrl = "https://lottie.host/3d79aa8b-1175-4ce3-a3dd-243380b650d4/23nOCwucPE.json";

    // Framer Motion Variants for Staggered Entry
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { type: "spring" as const, stiffness: 100, damping: 20 }
        },
    };

    // 3D Tilt Hover logic (unchanged)
    const handleMouseMove = (e: any) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const centerX = rect.width / 2; const centerY = rect.height / 2;
        const rotateX = (e.clientY - rect.top - centerY) / 10;
        const rotateY = (centerX - (e.clientX - rect.left)) / 10;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };

    const handleMouseLeave = (e: any) => { e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`; };

    return (
        <div className="experience" ref={ref}>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="premium-title"
            >
                Professional Milestones
            </motion.h1>

            <motion.div 
                className="experience-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="timeline-line"></div>

                {/* --- RUBIS (LEFT) --- */}
                <div className="experience-row row-left">
                    <motion.div 
                        className="experience-card glass-card"
                        variants={cardVariants}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <h3>Mobile Application Developer Intern</h3>
                        <h4>Rubis Software Solutions</h4>
                        <p className="exp-duration">June 2025 - Dec 2025</p>
                        <ul>
                            <li>Implemented core features for React Native Android app.</li>
                            <li>Centralized data into a React.js admin panel.</li>
                        </ul>
                        <div className="exp-actions">
                            <a href={rubis_cert} target="_blank" className="cert-btn">View Certificate</a>
                        </div>
                    </motion.div>
                    
                    {/* 🔥 PREMIUM ANIMATION (RIGHT SPACE) */}
                    <div className="experience-visual empty-right">
                        <div className="lottie-container lottie-right">
                            <Player
                                autoplay
                                loop
                                src={lottieUrl}
                                style={{ height: '250px', width: '250px' }}
                                speed={1.2} // Faster
                            />
                        </div>
                    </div>
                </div>

                {/* --- INFRABIM (RIGHT) --- */}
                <div className="experience-row row-right">
                    {/* 🔥 PREMIUM ANIMATION (LEFT SPACE) */}
                    <div className="experience-visual empty-left">
                        <div className="lottie-container lottie-left">
                            <Player
                                autoplay
                                loop
                                src={lottieUrl}
                                style={{ height: '300px', width: '300px' }}
                                speed={0.8} // Slower
                            />
                        </div>
                    </div>

                    <motion.div 
                        className="experience-card glass-card"
                        variants={cardVariants}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <h3>Testing Intern</h3>
                        <h4>InfraBIM Techno Solutions</h4>
                        <p className="exp-duration">Feb 2024 - Feb 2024</p>
                        <ul>
                            <li>Tested data analytics mobile app, prepared functional test cases.</li>
                        </ul>
                        <div className="exp-actions">
                            <a href={shopTalk_cert} target="_blank" className="cert-btn">View Certificate</a>
                        </div>
                    </motion.div>
                </div>

            </motion.div>
        </div>
    );
};

export default Experience;