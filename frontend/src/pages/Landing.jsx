import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaRobot, FaFileAlt, FaChartLine, FaRoad,
  FaBriefcase, FaBullseye, FaArrowRight, FaPlay
} from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] },
});

const features = [
  { icon: <FaFileAlt />, title: "AI Resume Review", desc: "Deep analysis of your resume with specific, actionable improvement suggestions.", color: "#38bdf8" },
  { icon: <FaChartLine />, title: "ATS Score", desc: "Know exactly how your resume performs against recruiter ATS filters.", color: "#a78bfa" },
  { icon: <FaBullseye />, title: "Skill Gap Analysis", desc: "Pinpoint the exact skills missing between you and your target role.", color: "#f472b6" },
  { icon: <FaRoad />, title: "Roadmap Generator", desc: "Get a personalized week-by-week learning plan to close your gaps.", color: "#4ade80" },
  { icon: <FaRobot />, title: "AI Mock Interview", desc: "Practice with AI that generates questions from your own resume.", color: "#fb923c" },
  { icon: <FaBriefcase />, title: "Job Readiness Score", desc: "A single score showing how ready you are for your target role right now.", color: "#38bdf8" },
];

const steps = [
  { n: "01", title: "Upload Resume", desc: "Drop your PDF and TalentIQ reads it instantly." },
  { n: "02", title: "Get AI Analysis", desc: "ATS score, skill gaps, and domain fit in seconds." },
  { n: "03", title: "Close the Gaps", desc: "Follow your personalized roadmap to learn what matters." },
  { n: "04", title: "Practice Interviews", desc: "AI interviews tailored to your profile and target role." },
  { n: "05", title: "Land the Job", desc: "Apply with confidence — fully prepared." },
];

const stats = [
  { end: 500, suffix: "+", label: "Resumes Analyzed" },
  { end: 98, suffix: "%", label: "ATS Accuracy" },
  { end: 200, suffix: "+", label: "Career Roadmaps" },
  { end: 5000, suffix: "+", label: "Interview Questions" },
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", overflowX: "hidden", position: "relative" }}>
      <ParticlesBackground />

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "0 6%", height: "66px",
        background: "rgba(7,8,15,0.85)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
      }}>
        <span style={{ fontSize: "22px", fontWeight: 900, background: "var(--grad2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          TalentIQ
        </span>
        <div style={{ display: "flex", gap: 12 }}>
          <button className="secondary-btn" style={{ padding: "9px 20px", fontSize: "14px" }} onClick={() => navigate("/login")}>Sign In</button>
          <button className="primary-btn" style={{ padding: "9px 20px", fontSize: "14px" }} onClick={() => navigate("/register")}>Get Started <FaArrowRight size={12} /></button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "100px 6% 60px", position: "relative", zIndex: 1 }}>

        {/* Glow blobs */}
        <div style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: 700, height: 500, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />

        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span style={{
            display: "inline-block", padding: "9px 22px", borderRadius: 99,
            background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.3)",
            color: "#c4b5fd", fontWeight: 700, fontSize: 13, marginBottom: 32, letterSpacing: "0.3px"
          }}>
            🚀 AI-Powered Career Intelligence Platform
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: "clamp(44px, 8vw, 88px)", fontWeight: 900,
            lineHeight: 1.04, letterSpacing: "-3px", maxWidth: 960,
            background: "linear-gradient(135deg, #f1f5f9 30%, #a78bfa 60%, #38bdf8)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 28,
          }}>
          Your Career,<br />Supercharged by AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ maxWidth: 620, color: "var(--muted)", fontSize: "clamp(16px,2vw,20px)", lineHeight: 1.8, marginBottom: 44 }}>
          Upload your resume. Get ATS score, skill gaps, and a learning roadmap in seconds.
          Then practice with AI interviews built from your own profile.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
          <button className="primary-btn" style={{ padding: "15px 34px", fontSize: 16 }} onClick={() => navigate("/register")}>
            Analyze My Resume Free <FaArrowRight size={14} />
          </button>
          <button className="secondary-btn" style={{ padding: "15px 28px", fontSize: 16 }} onClick={() => navigate("/login")}>
            <FaPlay size={12} /> See Demo
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}
          style={{ display: "flex", gap: "clamp(28px,6vw,72px)", marginTop: 72, flexWrap: "wrap", justifyContent: "center" }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, background: "var(--grad2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                <CountUp end={s.end} duration={2.5} delay={0.8} />{s.suffix}
              </div>
              <div style={{ color: "var(--muted)", fontSize: 13, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ padding: "80px 6%", maxWidth: 1140, margin: "0 auto" }}>
        <motion.div {...fadeUp()} style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ color: "var(--a2)", fontWeight: 700, fontSize: 12, letterSpacing: "2px", textTransform: "uppercase" }}>Features</span>
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, letterSpacing: "-1px", marginTop: 12 }}>
            Everything you need to land the job
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: 20 }}>
          {features.map((f, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.07)}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              style={{
                padding: "32px", borderRadius: 22,
                background: "var(--surface)", border: "1px solid var(--border)",
                cursor: "default", position: "relative", overflow: "hidden",
              }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: `${f.color}20`, border: `1px solid ${f.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: f.color, marginBottom: 18 }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{f.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--muted)" }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "80px 6%", maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
        <motion.div {...fadeUp()}>
          <span style={{ color: "var(--a2)", fontWeight: 700, fontSize: 12, letterSpacing: "2px", textTransform: "uppercase" }}>Process</span>
          <h2 style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 900, letterSpacing: "-1px", marginTop: 12, marginBottom: 52 }}>
            From upload to offer letter
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, textAlign: "left" }}>
          {steps.map((s, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.08)}
              whileHover={{ x: 8, transition: { duration: 0.2 } }}
              style={{
                display: "flex", gap: 24, alignItems: "flex-start",
                padding: "26px 32px", borderRadius: 20,
                background: "var(--surface)", border: "1px solid var(--border)",
              }}>
              <div style={{
                minWidth: 48, height: 48, borderRadius: 12, flexShrink: 0,
                background: "linear-gradient(135deg, var(--p1), var(--a1))",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, fontWeight: 900, color: "#fff", letterSpacing: "1px",
              }}>{s.n}</div>
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 6 }}>{s.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "80px 6% 120px", textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
        <motion.div
          {...fadeUp()}
          style={{
            padding: "60px 40px", borderRadius: 28,
            background: "linear-gradient(135deg, rgba(124,58,237,0.18), rgba(56,189,248,0.1))",
            border: "1px solid rgba(124,58,237,0.25)",
            boxShadow: "0 0 80px rgba(124,58,237,0.15)",
          }}>
          <h2 style={{ fontSize: "clamp(26px,4vw,42px)", fontWeight: 900, letterSpacing: "-1px", marginBottom: 16 }}>
            Ready to sync your career?
          </h2>
          <p style={{ color: "var(--muted)", fontSize: 17, marginBottom: 34, lineHeight: 1.7 }}>
            Join free. No credit card. Get your ATS score in 60 seconds.
          </p>
          <button className="primary-btn" style={{ padding: "15px 36px", fontSize: 16 }} onClick={() => navigate("/register")}>
            Get Started Free <FaArrowRight size={14} />
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid var(--border)", padding: "28px 6%",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12,
      }}>
        <span style={{ fontSize: 16, fontWeight: 900, background: "var(--grad2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>TalentIQ</span>
        <span style={{ color: "var(--muted)", fontSize: 13 }}>Built by Pankaj Khoche · khochepankaj@gmail.com</span>
        <span style={{ color: "var(--muted)", fontSize: 13 }}>© 2026 TalentIQ</span>
      </footer>
    </div>
  );
}