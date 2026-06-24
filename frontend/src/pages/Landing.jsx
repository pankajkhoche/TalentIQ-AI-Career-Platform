import AnimatedLogo from "../components/AnimatedLogo";
import HeroSection from "../components/HeroSection";
import { FaRobot, FaFileAlt, FaChartLine, FaRoad, FaBriefcase, FaBullseye } from "react-icons/fa";
import "../styles/Landing.css";
import ParticlesBackground from "../components/ParticlesBackground";
import CountUp from "react-countup";

function Landing() {
  return (
    <div className="landing-page-premium">

      <ParticlesBackground />

      <AnimatedLogo />

      <HeroSection />

      {/* STATS */}

      <section className="stats-section">
        <div className="stat-box">
          <h2><CountUp end={500} duration={3} />+</h2>
          <p>Resumes Analyzed</p>
        </div>

        <div className="stat-box">
          <h2><CountUp end={95} duration={3} />+</h2>
          <p>ATS Accuracy</p>
        </div>

        <div className="stat-box">
          <h2><CountUp end={100} duration={3} />+</h2>
          <p>Career Roadmaps</p>
        </div>

        <div className="stat-box">
          <h2><CountUp end={1000} duration={3} />+</h2>
          <p>Interview Questions</p>
        </div>
      </section>

      {/* FEATURES */}

      <section id="features" className="feature-grid">

        <div className="card premium-feature">
          <FaFileAlt className="feature-icon" />
          <h3>AI Resume Review</h3>
          <p>Analyze resumes and get detailed improvement suggestions.</p>
        </div>

        <div className="card premium-feature">
          <FaChartLine className="feature-icon" />
          <h3>ATS Score</h3>
          <p>Measure resume compatibility with recruiter ATS systems.</p>
        </div>

        <div className="card premium-feature">
          <FaBullseye className="feature-icon" />
          <h3>Skill Gap Analysis</h3>
          <p>Discover missing skills required for target roles.</p>
        </div>

        <div className="card premium-feature">
          <FaRoad className="feature-icon" />
          <h3>Roadmap Generator</h3>
          <p>Generate personalized learning plans automatically.</p>
        </div>

        <div className="card premium-feature">
          <FaRobot className="feature-icon" />
          <h3>Interview Simulator</h3>
          <p>Practice technical interviews with AI generated questions.</p>
        </div>

        <div className="card premium-feature">
          <FaBriefcase className="feature-icon" />
          <h3>Readiness Score</h3>
          <p>Track how prepared you are for real job opportunities.</p>
        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="how-section">
        <h2>How TalentIQ Works</h2>

        <div className="steps-grid">

          <div className="step-card">
            <span>01</span>
            <h3>Upload Resume</h3>
          </div>

          <div className="step-card">
            <span>02</span>
            <h3>Analyze Skills</h3>
          </div>

          <div className="step-card">
            <span>03</span>
            <h3>Find Skill Gaps</h3>
          </div>

          <div className="step-card">
            <span>04</span>
            <h3>Generate Roadmap</h3>
          </div>

          <div className="step-card">
            <span>05</span>
            <h3>Become Job Ready</h3>
          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="cta-section">
        <h2>Ready To Accelerate Your Career?</h2>

        <p>
          Join TalentIQ and discover the skills employers are looking for.
        </p>

        <button className="primary-btn">
          Get Started Now
        </button>
      </section>

    </div>
  );
}

export default Landing;