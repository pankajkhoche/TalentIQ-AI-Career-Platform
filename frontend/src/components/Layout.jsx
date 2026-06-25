import HeroSection from "../components/HeroSection";
import CountUp from "react-countup";
import {
  FaFileAlt,
  FaChartLine,
  FaBrain,
  FaRoute,
  FaRobot,
  FaBriefcase,
  FaCheckCircle,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";
import "../styles/Landing.css";

function Landing() {
  return (
    <div className="landing-v2">
      <div className="animated-bg">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className="v2-navbar">
        <div className="v2-logo">
          Talent<span>IQ</span>
          <small>AI Career Platform</small>
        </div>

        <div className="v2-nav-links">
          <a href="#features">Features</a>
          <a href="#workflow">Workflow</a>
          <a href="#preview">Preview</a>
          <a href="#cta">Start</a>
        </div>
      </nav>

      <HeroSection />

      <section className="v2-stats">
        <div>
          <h2><CountUp end={500} duration={3} />+</h2>
          <p>Resumes Analyzed</p>
        </div>
        <div>
          <h2><CountUp end={95} duration={3} />%</h2>
          <p>ATS Accuracy</p>
        </div>
        <div>
          <h2><CountUp end={100} duration={3} />+</h2>
          <p>Roadmaps Generated</p>
        </div>
        <div>
          <h2><CountUp end={1000} duration={3} />+</h2>
          <p>Interview Questions</p>
        </div>
      </section>

      <section id="features" className="v2-section">
        <h2>Everything You Need To Get Hired</h2>

        <div className="v2-feature-grid">
          <Feature icon={<FaFileAlt />} title="AI Resume Review" text="Get detailed resume analysis with actionable improvements." />
          <Feature icon={<FaChartLine />} title="ATS Score" text="Check how well your resume performs against ATS systems." />
          <Feature icon={<FaBrain />} title="Skill Gap Analysis" text="Find missing skills for Python, Backend and Software roles." />
          <Feature icon={<FaRoute />} title="Career Roadmap" text="Generate weekly learning plans based on your gaps." />
          <Feature icon={<FaRobot />} title="Interview Practice" text="Practice technical interviews with AI-generated questions." />
          <Feature icon={<FaBriefcase />} title="Readiness Score" text="Measure whether you are ready for real job opportunities." />
        </div>
      </section>

      <section id="workflow" className="v2-workflow">
        <h2>How TalentIQ Works</h2>

        <div className="workflow-line">
          {["Upload Resume", "Analyze Skills", "Find Gaps", "Generate Roadmap", "Become Job Ready"].map((step, i) => (
            <div className="workflow-step" key={step}>
              <span>{i + 1}</span>
              <h3>{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="preview" className="dashboard-preview">
        <div className="preview-left">
          <h2>Recruiter-Ready Career Dashboard</h2>
          <p>
            Track ATS score, readiness, interview progress, skill gaps and
            roadmap completion from one intelligent dashboard.
          </p>

          <ul>
            <li><FaCheckCircle /> Real-time ATS score</li>
            <li><FaCheckCircle /> Personalized skill recommendations</li>
            <li><FaCheckCircle /> Job-readiness evaluation</li>
          </ul>
        </div>

        <div className="preview-card-3d">
          <div className="preview-top"></div>
          <div className="preview-grid">
            <span></span><span></span><span></span><span></span>
          </div>
          <div className="preview-chart"></div>
        </div>
      </section>

      <section id="cta" className="v2-cta">
        <h2>Ready To Build Your Career Intelligence?</h2>
        <p>Start analyzing your resume and become job-ready with AI.</p>
        <a href="/register" className="v2-primary-btn">Create Free Account</a>
      </section>

      <footer className="v2-footer">
        <div>© 2026 TalentIQ. All Rights Reserved.</div>
        <div>
          <FaGithub />
          <FaLinkedin />
        </div>
      </footer>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="v2-feature-card">
      <div className="feature-orb">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Landing;