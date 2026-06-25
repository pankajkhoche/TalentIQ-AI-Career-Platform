import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import AnalyticsChart from "../components/AnalyticsChart";
import API from "../services/api";
import { motion } from "framer-motion";
import {
  FaChartLine, FaRocket, FaFileAlt, FaUserTie,
  FaCheckCircle, FaClock, FaBolt, FaTrophy
} from "react-icons/fa";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] },
});

const statCards = (data) => [
  { icon: <FaChartLine />, color: "#38bdf8", label: "ATS Score",          value: data.ats_score,             badge: "Resume Strength",    badgeClass: "success" },
  { icon: <FaRocket />,    color: "#a78bfa", label: "Job Readiness",      value: data.job_readiness,         badge: "Career Ready",       badgeClass: "primary" },
  { icon: <FaFileAlt />,   color: "#4ade80", label: "Resumes Uploaded",   value: data.resume_count,          badge: "Portfolio Growth",   badgeClass: "info" },
  { icon: <FaUserTie />,   color: "#fb923c", label: "Interviews Done",    value: data.interviews_completed,  badge: "Practice Progress",  badgeClass: "warning" },
];

const roadmap = [
  { icon: <FaBolt />,        title: "Improve ATS Score",    desc: "Optimize keywords, formatting, and role-specific skills." },
  { icon: <FaCheckCircle />, title: "Close Skill Gaps",     desc: "Focus on technologies identified during your resume analysis." },
  { icon: <FaUserTie />,     title: "Practice Interviews",  desc: "Complete AI interview simulations and improve answer quality." },
  { icon: <FaTrophy />,      title: "Apply with Confidence",desc: "Target the right roles with your optimized profile." },
];

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await API.get("/dashboard", { headers: { Authorization: `Bearer ${token}` } });
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchDashboard();
  }, []);

  return (
    <>
      <Sidebar />
      <motion.main
        className="dashboard-main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>

        {/* HERO CARD */}
        <motion.section className="hero-card" {...fadeUp(0)}>
          <div style={{ position: "relative", zIndex: 1 }}>
            <span style={{
              display: "inline-block", padding: "6px 16px", borderRadius: 99,
              background: "rgba(56,189,248,0.12)", border: "1px solid rgba(56,189,248,0.25)",
              color: "#7dd3fc", fontWeight: 700, fontSize: 12, letterSpacing: "1px",
              textTransform: "uppercase", marginBottom: 16,
            }}>Career Intelligence Dashboard</span>
            <h1 style={{ fontSize: "clamp(24px,3.5vw,44px)", fontWeight: 900, marginBottom: 12 }}>
              Welcome back, let's track your progress
            </h1>
            <p style={{ color: "#cbd5e1", fontSize: 16, lineHeight: 1.8, maxWidth: 560 }}>
              Monitor ATS performance, interview readiness, resume strength,
              and skill growth — all in one place.
            </p>
          </div>
        </motion.section>

        {data ? (
          <>
            {/* STAT CARDS */}
            <div className="stats-grid" style={{ marginTop: 28 }}>
              {statCards(data).map((s, i) => (
                <motion.div key={i} className="stat-card premium-card" {...fadeUp(0.1 + i * 0.07)}>
                  <div style={{ fontSize: 26, color: s.color, marginBottom: 12 }}>{s.icon}</div>
                  <h3 style={{ color: "var(--muted)", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>{s.label}</h3>
                  <motion.h1
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.07, type: "spring", stiffness: 120 }}
                    style={{ fontSize: "clamp(30px,4vw,48px)", fontWeight: 900, color: s.color, margin: "8px 0" }}>
                    {s.value}
                  </motion.h1>
                  <span className={`card-status ${s.badgeClass}`}>{s.badge}</span>
                </motion.div>
              ))}
            </div>

            {/* READINESS + PROGRESS */}
            <div className="dashboard-grid" style={{ marginTop: 28 }}>

              {/* Readiness Circle */}
              <motion.div className="dashboard-widget" {...fadeUp(0.3)}>
                <h3>Career Readiness</h3>
                <div style={{ display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap" }}>
                  <div style={{
                    width: 130, height: 130, borderRadius: "50%", flexShrink: 0,
                    background: `conic-gradient(#7c3aed 0deg, #38bdf8 ${data.job_readiness * 3.6}deg, rgba(255,255,255,0.08) ${data.job_readiness * 3.6}deg)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 0 40px rgba(124,58,237,0.4)",
                  }}>
                    <div style={{ width: 100, height: 100, borderRadius: "50%", background: "var(--bg3)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                      <span style={{ fontSize: 24, fontWeight: 900, color: "#a78bfa" }}>{data.job_readiness}</span>
                      <span style={{ fontSize: 10, color: "var(--muted)", fontWeight: 600 }}>/ 100</span>
                    </div>
                  </div>
                  <div style={{ flex: 1, minWidth: 160 }}>
                    <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Overall Readiness</div>
                    <div className="mini-progress" style={{ marginBottom: 16 }}>
                      <motion.div className="mini-progress-fill" initial={{ width: 0 }} animate={{ width: `${data.job_readiness}%` }} transition={{ duration: 1.2, delay: 0.5 }} />
                    </div>
                    <div style={{ fontSize: 13, color: "var(--muted)" }}>ATS Score</div>
                    <div className="mini-progress">
                      <motion.div className="mini-progress-fill ats-fill" initial={{ width: 0 }} animate={{ width: `${data.ats_score}%` }} transition={{ duration: 1.2, delay: 0.7 }} />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Analytics */}
              <motion.div className="dashboard-widget" {...fadeUp(0.35)}>
                <h3>Performance Analytics</h3>
                <AnalyticsChart />
              </motion.div>
            </div>

            {/* ROADMAP */}
            <motion.div {...fadeUp(0.4)} style={{ marginTop: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 20 }}>Your Action Roadmap</h2>
              <div className="roadmap-timeline">
                {roadmap.map((r, i) => (
                  <motion.div
                    key={i}
                    className="timeline-card"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ x: 8, transition: { duration: 0.2 } }}>
                    <div className="timeline-dot" />
                    <div>
                      <h3 style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ color: "#a78bfa" }}>{r.icon}</span>
                        {r.title}
                      </h3>
                      <p>{r.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RECENT ACTIVITY */}
            <motion.div className="activity-section" {...fadeUp(0.5)}>
              <h2 style={{ fontSize: 22, fontWeight: 800 }}>Recent Activity</h2>
              {[
                { icon: "📄", text: "Resume analyzed successfully", time: "Just now",   status: "success" },
                { icon: "📊", text: "ATS score calculated",          time: "2 min ago", status: "primary" },
                { icon: "🗺️", text: "Career roadmap generated",      time: "5 min ago", status: "info" },
                { icon: "✅", text: "Readiness score evaluated",      time: "8 min ago", status: "warning" },
              ].map((a, i) => (
                <motion.div
                  key={i}
                  className="activity-card"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.07 }}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{ fontSize: 20 }}>{a.icon}</span>
                    <span style={{ fontSize: 14, fontWeight: 500 }}>{a.text}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                    <span style={{ color: "var(--muted)", fontSize: 12 }}>{a.time}</span>
                    <span className={`card-status ${a.status}`}>Done</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "50vh", gap: 20 }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg, #7c3aed, #38bdf8)", animation: "orbPulse 1.5s infinite" }} />
            <p style={{ color: "var(--muted)", fontSize: 16 }}>Loading your dashboard...</p>
          </div>
        )}
      </motion.main>
    </>
  );
}