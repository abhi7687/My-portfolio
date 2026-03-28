import { useEffect, useState } from "react";
import "./BackToTop.css";

const BackToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far the user has scrolled
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Show button after 300px
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Calculate the stroke-dashoffset for the SVG circle
  // Circumference of a circle with radius 22 is ~138
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div 
      className={`back-to-top-wrapper ${visible ? "show" : ""}`} 
      onClick={scrollToTop}
    >
      <svg className="progress-circle" width="55" height="55">
        <circle
          className="progress-circle-bg"
          cx="27.5" cy="27.5" r={radius}
        />
        <circle
          className="progress-circle-bar"
          cx="27.5" cy="27.5" r={radius}
          style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
        />
      </svg>
      <div className="back-to-top-btn">
        <span className="arrow">↑</span>
      </div>
    </div>
  );
};

export default BackToTop;