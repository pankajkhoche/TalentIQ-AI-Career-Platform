import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaTachometerAlt, FaFileAlt, FaChartBar, FaRoad,
  FaBolt, FaRobot, FaBriefcase, FaHistory,
  FaClipboardList, FaCopy, FaMagic, FaSignOutAlt,
  FaBrain, FaUser
} from "react-icons/fa";

const navSections = [
  {
    title: "Overview",
    links: [
      { to: "/dashboard", icon: <FaTachometerAlt />, label: "Dashboard" },
    ]
  },
  {
    title: "Resume",
    links: [
      { to: "/resume",         icon: <FaFileAlt />,      label: "Upload Resume" },
      { to: "/resume-history", icon: <FaHistory />,      label: "Resume History" },
      { to: "/resume-compare", icon: <FaCopy />,         label: "Compare Resumes" },
    ]
  },
  {
    title: "Career Intel",
    links: [
      { to: "/skill-gap",    icon: <FaChartBar />,       label: "Skill Gap" },
      { to: "/roadmap",      icon: <FaRoad />,           label: "Roadmap" },
      { to: "/readiness",    icon: <FaBolt />,           label: "Job Readiness" },
      { to: "/career-advisor",icon: <FaBrain />,         label: "Career Advisor" },
    ]
  },
  {
    title: "Interview",
    links: [
      { to: "/interview-practice", icon: <FaRobot />,        label: "Mock Interview" },
      { to: "/interview-history",  icon: <FaClipboardList />, label: "Interview History" },
    ]
  },
  {
    title: "Tools",
    links: [
      { to: "/job-matcher",        icon: <FaBriefcase />,  label: "Job Matcher" },
      { to: "/profile-completion", icon: <FaUser />,       label: "Profile" },
    ]
  },
];

export default function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <motion.aside
      className="premium-sidebar"
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}>

      {/* LOGO */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "4px 10px", marginBottom: 32 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: "linear-gradient(135deg, #7c3aed, #38bdf8)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <FaBrain color="#fff" size={16} />
        </div>
        <span className="sidebar-logo" style={{ margin: 0, fontSize: 20 }}>TalentIQ</span>
      </div>

      {/* NAV */}
      <nav style={{ flex: 1 }}>
        {navSections.map((section, si) => (
          <div key={si}>
            <div className="sidebar-section-title">{section.title}</div>
            {section.links.map((link, li) => (
              <NavLink
                key={li}
                to={link.to}
                className={({ isActive }) => isActive ? "active" : ""}
                style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 14, opacity: 0.8 }}>{link.icon}</span>
                <span style={{ fontSize: 14 }}>{link.label}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </nav>

      {/* LOGOUT */}
      <motion.button
        className="logout-btn"
        onClick={logout}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        style={{ marginTop: 24 }}>
        <FaSignOutAlt size={14} />
        Sign Out
      </motion.button>
    </motion.aside>
  );
}