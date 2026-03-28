import "./Footer.css";
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <h2 className="footer-name">Abhiram Vaitla</h2>

      <p className="footer-text">
        Software Developer • React • AI/ML
      </p>

      <div className="footer-links">
        <a href="https://github.com/abhi7687" target="_blank" rel="noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/abhiramvaitla" target="_blank" rel="noreferrer">
        <FaLinkedin/> LinkedIn
        </a>
        <a href="mailto:abhiramvaitla7687@gmail.com">
          <FaEnvelope /> Email
        </a>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Abhiram Vaitla. All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;