import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash, FaArrowRight, FaBrain } from "react-icons/fa";
import API from "../services/api";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const loginUser = async () => {
    if (!email || !password) { toast.error("Please fill all fields"); return; }
    setLoading(true);
    try {
      const response = await API.post("/login", { email, password });
      localStorage.setItem("token", response.data.access_token);
      toast.success("Welcome back!");
      setTimeout(() => navigate("/dashboard"), 800);
    } catch {
      toast.error("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => { if (e.key === "Enter") loginUser(); };

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      padding: "24px", gap: "clamp(40px,8vw,120px)", flexWrap: "wrap",
      background: "radial-gradient(ellipse 70% 50% at 10% 0%, rgba(124,58,237,0.22), transparent), radial-gradient(ellipse 50% 40% at 90% 100%, rgba(56,189,248,0.14), transparent), var(--bg)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Glow blobs */}
      <div style={{ position: "absolute", top: "20%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.14), transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.1), transparent 70%)", pointerEvents: "none" }} />

      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        style={{ maxWidth: 480, zIndex: 1 }}>

        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg, #7c3aed, #38bdf8)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <FaBrain color="#fff" size={20} />
          </div>
          <span style={{ fontSize: 24, fontWeight: 900, background: "var(--grad2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>TalentIQ</span>
        </div>

        <motion.h1
          className="brand-animated"
          style={{ fontSize: "clamp(48px,7vw,80px)", marginBottom: 20 }}>
          Your Career,<br />Powered by AI
        </motion.h1>

        <p style={{ color: "var(--muted)", fontSize: 17, lineHeight: 1.8, marginBottom: 36 }}>
          Analyze resumes, discover skill gaps, generate roadmaps,
          and practice interviews — all in one platform.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {["ATS Resume Score", "AI Mock Interviews", "Skill Gap Analysis", "Personalized Roadmap"].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--muted)", fontSize: 15 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "linear-gradient(135deg, #7c3aed, #38bdf8)", flexShrink: 0 }} />
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT — CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{
          width: "min(420px, 100%)", padding: "44px",
          borderRadius: 28, zIndex: 1,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid var(--border2)",
          backdropFilter: "blur(32px)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(124,58,237,0.1)",
        }}>

        <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 6 }}>Welcome back</h2>
        <p style={{ color: "var(--muted)", marginBottom: 32, fontSize: 15 }}>Login to continue your career journey</p>

        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--muted)", marginBottom: 8, letterSpacing: "0.3px" }}>EMAIL ADDRESS</label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={onKeyDown}
        />

        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--muted)", marginBottom: 8, letterSpacing: "0.3px" }}>PASSWORD</label>
        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <span onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: 16, top: 14, cursor: "pointer", color: "var(--muted)", fontSize: 16 }}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <motion.button
          className="primary-btn"
          style={{ width: "100%", padding: "15px", fontSize: 16, marginTop: 8, opacity: loading ? 0.7 : 1 }}
          onClick={loginUser}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={loading}>
          {loading ? "Logging in..." : <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>Login <FaArrowRight size={14} /></span>}
        </motion.button>

        <p style={{ marginTop: 24, textAlign: "center", color: "var(--muted)", fontSize: 14 }}>
          New here?{" "}
          <Link to="/register" style={{ color: "#a78bfa", fontWeight: 700, textDecoration: "none" }}>
            Create free account
          </Link>
        </p>
      </motion.div>
    </div>
  );
}