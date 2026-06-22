import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <aside className="premium-sidebar">
            <h2 className="sidebar-logo">TalentIQ</h2>

            <Link to="/dashboard">Dashboard</Link>
            <Link to="/resume">Resume Upload</Link>
            <Link to="/skill-gap">Skill Gap</Link>
            <Link to="/roadmap">Roadmap</Link>
            <Link to="/readiness">Readiness</Link>
            <Link to="/interview-practice">Interview</Link>
            <Link to="/resume-history">Resume History</Link>
            <Link to="/interview-history">Interview History</Link>
            <Link to="/resume-compare">Resume Compare</Link>
            <Link to="/career-advisor">Career Advisor</Link>
            <Link to="/job-matcher">Job Matcher</Link>

            <button className="primary-btn" onClick={logout}>
                Logout
            </button>
        </aside>
    );
}

export default Sidebar;