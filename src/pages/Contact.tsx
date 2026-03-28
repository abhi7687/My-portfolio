import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const name = (form[0] as HTMLInputElement).value;
        const email = (form[1] as HTMLInputElement).value;
        const message = (form[2] as HTMLTextAreaElement).value;

        setStatus("Sending...");

        try {
            const res = await fetch("http://localhost:5000/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (res.ok) {
                setStatus("Message Sent Sucessfull ✅");
                form.reset();
            } else {
                setStatus("Failed to send ❌");
            }
        } catch (err) {
            setStatus("Server error ❌");
        }
    }
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
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" rows={5} required></textarea>

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