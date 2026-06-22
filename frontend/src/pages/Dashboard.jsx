import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import AnalyticsChart from "../components/AnalyticsChart";
import {
    FaChartLine,
    FaFileUpload,
    FaBrain,
    FaRoute,
    FaClipboardCheck,
    FaSignOutAlt,
    FaBullseye,
    FaUserTie,
    FaStar
} from "react-icons/fa";

import API from "../services/api";

function Dashboard() {
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    const fetchDashboard = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await API.get("/dashboard", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setData(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    useEffect(() => {
        fetchDashboard();
    }, []);

    return (
        <div className="layout">
            <aside className="sidebar">
                <h2>TalentIQ</h2>

                <Link to="/dashboard"><FaChartLine /> Dashboard</Link>
                <Link to="/resume"><FaFileUpload /> Upload Resume</Link>
                <Link to="/skill-gap"><FaBrain /> Skill Gap</Link>
                <Link to="/roadmap"><FaRoute /> Roadmap</Link>
                <Link to="/readiness"><FaClipboardCheck /> Readiness</Link>
                <Link to="/interview-practice">Interview Practice</Link>
                <Link to="/career-advisor">Career Advisor</Link>
                <Link to="/job-matcher">Job Matcher</Link>
                <Link to="/resume-history">Resume History</Link>
                <Link to="/interview-history">Interview History</Link>
                <Link to="/profile-completion">Profile Completion</Link>
                <Link to="/resume-compare">Resume Compare</Link>

                <button onClick={logout}>
                    <FaSignOutAlt /> Logout
                </button>
            </aside>

            <main className="content">
                <div className="page-header">
                    <div>
                        <h1>Dashboard</h1>
                        <p>Track your career readiness and resume intelligence.</p>
                    </div>
                </div>

                {data && (
                    <>
                        <div className="cards">
                            <div className="card premium-card">
                                <FaBullseye className="card-icon" />
                                <h3>ATS Score</h3>
                                <p>{data.ats_score}</p>
                            </div>

                            <div className="card premium-card">
                                <FaStar className="card-icon" />
                                <h3>Readiness</h3>
                                <p>{data.job_readiness}</p>
                            </div>

                            <div className="card premium-card">
                                <FaUserTie className="card-icon" />
                                <h3>Interviews</h3>
                                <p>{data.interviews_completed}</p>
                            </div>

                            <div className="card premium-card">
                                <FaChartLine className="card-icon" />
                                <h3>Average Score</h3>
                                <p>{data.average_score}</p>
                            </div>
                        </div>

                        <div
                            style={{
                               display:"grid",
                               gridTemplateColumns:"2fr 1fr",
                               gap:"20px"
                            }}
                        >

<div>
    existing cards
</div>

<ProfileCard />

</div>

<AnalyticsChart />

                        <div className="card skills-card">
                            <h3>Skills Found</h3>
                            <p className="skills-text">{data.skills}</p>
                        </div>
                    </>
                )}
            </main>
        </div>
    );
}

export default Dashboard;