import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <section className="hero-container">

            <div className="hero-badge">
                🚀 AI Powered Career Growth Platform
            </div>

            <h1 className="hero-title">
                Transform Your Career
                <br />
                With AI Intelligence
            </h1>

            <p className="hero-description">
                Resume Analysis, ATS Optimization,
                Interview Practice, Roadmap Generation,
                Skill Gap Detection and Career Readiness.
            </p>

            <div className="hero-buttons">
                <Link to="/login" className="primary-btn">
                    Get Started
                </Link>
            </div>

        </section>
    );
}

export default HeroSection;