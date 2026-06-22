import AnimatedLogo from "../components/AnimatedLogo";
import HeroSection from "../components/HeroSection";
import "../styles/Landing.css";

function Landing() {
    return (
        <div className="landing-page-premium">
            <AnimatedLogo />
            <HeroSection />

            <section id="features" className="feature-grid">
                <div className="card">AI Resume Review</div>
                <div className="card">ATS Score</div>
                <div className="card">Skill Gap Analysis</div>
                <div className="card">Roadmap Generator</div>
                <div className="card">Interview Simulator</div>
                <div className="card">Readiness Score</div>
            </section>
        </div>
    );
}

export default Landing;