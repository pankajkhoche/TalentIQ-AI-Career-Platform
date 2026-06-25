import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash, FaArrowRight, FaBrain } from "react-icons/fa";
import API from "../services/api";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const registerUser = async () => {
    if (!form.name || !form.email || !form.password) { toast.error("Please fill all fields"); return; }
    setLoading(true);
    try {
      await API.post("/register", form);
      toast.success("Account created! Please login.");
      setTimeout(() => navigate("/login"), 900);
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      padding: "24px", gap: "clamp(40px,8vw,120px)", flexWrap: "wrap",
      background: "radial-gradient(ellipse 70% 50% at 90% 0%, rgba(56,189,248,0.16), transparent), radial-gradient(ellipse 50% 40% at 10% 100%, rgba(124,58,237,0.18), transparent), var(--bg)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: "15%", right: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.1), transparent 70%)", pointerEvents: "none" }} />

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          width: "min(440px, 100%)", padding: "48px",
          borderRadius: 28, zIndex: 1,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid var(--border2)",
          backdropFilter: "blur(32px)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(56,189,248,0.1)",
        }}>

        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
          <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg, #7c3aed, #38bdf8)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <FaBrain color="#fff" size={17} />
          </div>
          <span style={{ fontSize: 20, fontWeight: 900, background: "var(--grad2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>TalentIQ</span>
        </div>

        <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 6 }}>Create your account</h2>
        <p style={{ color: "var(--muted)", marginBottom: 32, fontSize: 15 }}>Start your AI-powered career journey today</p>

        {[
          { label: "FULL NAME", name: "name", type: "text", placeholder: "Pankaj Khoche" },
          { label: "EMAIL ADDRESS", name: "email", type: "email", placeholder: "you@example.com" },
        ].map(f => (
          <div key={f.name}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--muted)", marginBottom: 8, letterSpacing: "0.3px" }}>{f.label}</label>
            <input type={f.type} name={f.name} placeholder={f.placeholder} value={form[f.name]} onChange={onChange} />
          </div>
        ))}

        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--muted)", marginBottom: 8, letterSpacing: "0.3px" }}>PASSWORD</label>
        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Create a strong password"
            value={form.password}
            onChange={onChange}
          />
          <span onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: 16, top: 14, cursor: "pointer", color: "var(--muted)", fontSize: 16 }}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <motion.button
          className="primary-btn"
          style={{ width: "100%", padding: "15px", fontSize: 16, marginTop: 8, opacity: loading ? 0.7 : 1 }}
          onClick={registerUser}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={loading}>
          {loading ? "Creating account..." : <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>Create Account <FaArrowRight size={14} /></span>}
        </motion.button>

        <p style={{ marginTop: 24, textAlign: "center", color: "var(--muted)", fontSize: 14 }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#a78bfa", fontWeight: 700, textDecoration: "none" }}>Sign in</Link>
        </p>
      </motion.div>

      {/* RIGHT — INFO */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{ maxWidth: 420, zIndex: 1 }}>

        <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 900, letterSpacing: "-1px", marginBottom: 24, lineHeight: 1.2 }}>
          Everything you need<br />
          <span style={{ background: "var(--grad2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>to land your next role</span>
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {[
            { emoji: "📄", title: "ATS Resume Scoring", desc: "Know exactly how recruiters see your resume" },
            { emoji: "🎯", title: "Skill Gap Analysis", desc: "Find what's missing between you and your dream role" },
            { emoji: "🤖", title: "AI Mock Interviews", desc: "Practice with questions built from your own resume" },
            { emoji: "🗺️", title: "Personalized Roadmap", desc: "A week-by-week plan to close every skill gap" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--surface)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                {item.emoji}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{item.title}</div>
                <div style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}