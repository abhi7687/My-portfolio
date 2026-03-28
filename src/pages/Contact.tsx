import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
const Contact = () => {
    const email = "abhiramvaitla7687@gmail.com"
    const linkedIn = "https://www.linkedin.com/in/abhiramvaitla"
    const gitHub = "https://github.com/abhi7687"

    const [status, setStatus] = useState("");

    useEffect(() => {
        if (!status || status === "Sending...") return;

        const timer = setTimeout(() => {
            setStatus("");
        }, 3000);

        return () => clearTimeout(timer);
    }, [status]);


    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const form = e.target;

        setStatus("Sending...");

        try {
            await emailjs.sendForm(
                "service_ae6eivp",
                "template_7rktwvq",
                form,
                "2D9IUX4N6ggsXrSpm"
            );

            setStatus("Message Sent Successfully ✅");
            form.reset();

        } catch (error) {
            console.log(error);
            setStatus("Failed to send ❌");
        }
    };
    return (
        <div className="contact">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="premium-title"
            >
                Drop a Line
            </motion.h1>
            <p className="contact-subtitle">
                I’m open to opportunities in Software Development, Full Stack, and AI/ML roles.
            </p>
            <div className="contact-container">
                {/* Left Side - Info */}
                <div className="contact-info">
                    <h3>Get in touch</h3>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>LinkedIn:</strong>{" "}
                        <a href={linkedIn} target="_blank" rel="noreferrer">
                            View Profile
                        </a>
                    </p>
                    <p><strong>GitHub:</strong>{" "}
                        <a href={gitHub} target="_blank" rel="noreferrer">
                            View Projects
                        </a>
                    </p>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Your Name"
                            required
                        />

                        <input
                            type="email"
                            name="from_email"
                            placeholder="Your Email"
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows={5}
                            required
                        ></textarea>

                        <button type="submit" disabled={status === "Sending..."}>
                            {status === "Sending..." ? "Sending..." : "Send Message"}
                        </button>

                        {status && <p className="form-status">{status}</p>}
                    </form>
                </div>

                {/* Right Side - Animation + Form */}
                <div className="right-side-wrapper">
                    <div className="contact-animation">
                        <Player
                            autoplay
                            loop
                            src="https://assets9.lottiefiles.com/packages/lf20_u25cckyh.json"
                            style={{ height: "250px", width: "250px" }}
                        />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Contact