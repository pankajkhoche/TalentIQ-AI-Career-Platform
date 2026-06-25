import { Link } from "react-router-dom";
import { FaRocket, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="v2-hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-badge">
          <FaRocket /> AI Career Intelligence Platform
        </div>

        <h1>
          Build a Job-Ready Career
          <span> With TalentIQ AI</span>
        </h1>

        <p>
          Analyze resumes, improve ATS score, detect skill gaps, generate
          roadmaps, practice interviews and measure job readiness.
        </p>

        <div className="hero-actions">
          <Link to="/register" className="v2-primary-btn">
            Get Started
          </Link>

          <Link to="/login" className="v2-secondary-btn">
            <FaPlay /> Login
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="hero-3d-card"
        initial={{ opacity: 0, rotateY: -25, x: 80 }}
        animate={{ opacity: 1, rotateY: 0, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="score-circle">92%</div>
        <h3>AI Readiness Score</h3>
        <p>Resume optimized for Python Backend roles</p>

        <div className="mini-bars">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;