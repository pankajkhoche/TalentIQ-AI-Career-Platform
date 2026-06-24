import { Link, useNavigate } from "react-router-dom";
import {
    FaChartPie,
    FaFileUpload,
    FaRoute,
    FaBrain,
    FaBriefcase,
    FaSignOutAlt,
    FaHistory,
    FaBalanceScale
} from "react-icons/fa";

function Sidebar() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <aside className="premium-sidebar">
            <h2 className="sidebar-logo">TalentIQ</h2>

            <p className="sidebar-section-title">Main</p>
            <Link to="/dashboard"><FaChartPie /> Dashboard</Link>
            <Link to="/resume"><FaFileUpload /> Resume Upload</Link>

            <p className="sidebar-section-title">Career Tools</p>
            <Link to="/skill-gap"><FaBrain /> Skill Gap</Link>
            <Link to="/roadmap"><FaRoute /> Roadmap</Link>
            <Link to="/readiness"><FaBriefcase /> Readiness</Link>
            <Link to="/interview-practice"><FaBriefcase /> Interview</Link>

            <p className="sidebar-section-title">Records</p>
            <Link to="/resume-history"><FaHistory /> Resume History</Link>
            <Link to="/interview-history"><FaHistory /> Interview History</Link>
            <Link to="/resume-compare"><FaBalanceScale /> Resume Compare</Link>

            <button className="primary-btn logout-btn" onClick={logout}>
                <FaSignOutAlt /> Logout
            </button>
        </aside>
    );
}

export default Sidebar;