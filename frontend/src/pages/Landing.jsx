import { Link } from "react-router-dom";

function Landing() {
    return (
        <div className="landing-page">
            <nav className="landing-nav">
                <h2 className="brand-animated">TalentIQ</h2>
                <Link to="/login" className="nav-btn">Login</Link>
            </nav>

            <section className="hero-section">
                <h1>AI Career Intelligence Platform</h1>
                <p>
                    Analyze resumes, discover skill gaps, generate career roadmaps,
                    practice interviews, and track job readiness with AI-powered insights.
                </p>

                <Link to="/login" className="hero-btn">
                    Get Started
                </Link>
            </section>

            <section className="feature-grid">
                <div className="card">AI Resume Review</div>
                <div className="card">ATS Score</div>
                <div className="card">Skill Gap Analysis</div>
                <div className="card">Roadmap Generator</div>
                <div className="card">Interview Practice</div>
                <div className="card">Job Readiness Score</div>
            </section>
        </div>
    );
}

export default Landing;