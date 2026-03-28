import { motion } from "framer-motion";
import { useState } from "react";
import "./Certificates.css";

const Certificates = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const certificates = [
        {
            title: "Programming for Everybody (Getting Started withPython)",
            issuer: "University of Michigan",
            image: "/certificates/Coursera_1_page-0001.jpg",
            link: "https://coursera.org/verify/QMACPVA34LYH",
        },
        {
            title: "Introduction to HTML5",
            issuer: "University of Michigan",
            image: "/certificates/Coursera_3_page-0001.jpg",
            link: "https://coursera.org/verify/LHPJT8YUCV24",
        },
        {
            title: "Introduction to CSS3",
            issuer: "University of Michigan",
            image: "/certificates/Coursera_2_page-0001.jpg",
            link: "https://coursera.org/verify/WXXHBMABEBZ5",
        },
        {
            title: "Python Project for Data Science",
            issuer: "IBM",
            image: "/certificates/Coursera_4_page-0001.jpg",
            link: "https://coursera.org/verify/UYPVMAWFTSA4",
        },
        {
            title: "Databases and SQL for Data Science with Python",
            issuer: "IBM",
            image: "/certificates/Coursera_5_page-0001.jpg",
            link: "https://coursera.org/verify/ZHLCK3KMNM6F",
        },
        {
            title: "Introduction to R: Basic R syntax",
            issuer: "Coursera",
            image: "/certificates/Coursera_6_page-0001.jpg",
            link: "https://coursera.org/verify/XMKLB7CEWFQE",
        },
        {
            title: "Software	Engineering	Virtual	Experience Program",
            issuer: "Goldman Sachs",
            image: "/certificates/goldman certif_page-0001.jpg",
            link: "https://drive.google.com/file/d/1s87NmYcL4xBO8aLHJZKn9NshJNX44Zd-/view?usp=drive_link",
        },
        {
            title: "Artificial Intelligence & Machine Learning",
            issuer: "Techgyan Technologies",
            image: "/certificates/iisc_techgyan_participation_page-0001.jpg",
            link: "https://drive.google.com/file/d/1QLn-d6SrTDrEeg21hRethoecbUrm3oDg/view?usp=drive_link",
        },
    ];

    return (
        <div id="certificates" className="certificates">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="premium-title"
            >
                Professional Validations
            </motion.h1>
            <div className="slider-container">
                <div className="slider-track">
                    {certificates.map((cert, index) => {
                        // Logic to determine position relative to active index
                        const position = index === activeIndex ? "active" :
                            index < activeIndex ? "prev" : "next";

                        return (
                            <div
                                className={`certificate-card ${position}`}
                                key={index}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className="cert-preview">
                                    <img src={cert.image} alt={cert.title} />
                                    {index === activeIndex && (
                                        <a href={cert.link} target="_blank" className="view-btn">
                                            Verify Credential
                                        </a>
                                    )}
                                </div>
                                <div className="cert-info">
                                    <h3>{cert.title}</h3>
                                    <p>{cert.issuer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Navigation Dots */}
                <div className="slider-dots">
                    {certificates.map((_, i) => (
                        <span
                            key={i}
                            className={i === activeIndex ? "dot active" : "dot"}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certificates;