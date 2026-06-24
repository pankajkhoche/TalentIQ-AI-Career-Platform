import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <section className="hero-container">

            <div className="hero-badge">
                🚀 AI Powered Career Growth Platform
            </div>

            <h1 className="hero-title">
                Build a Job-Ready Career
                <br />
                With AI Intelligence
            </h1>

            <p className="hero-description">
                Analyze your resume, improve ATS score, identify skill gaps,
                generate personalized roadmaps and prepare for interviews.
            </p>

            <div className="hero-buttons">
                <Link to="/login" className="primary-btn">
                    Get Started
                </Link>

                <Link to="/register" className="secondary-btn">
                    Create Account
                </Link>
            </div>

        </section>
    );
}

export default HeroSection;