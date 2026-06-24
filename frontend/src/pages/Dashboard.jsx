import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import AnalyticsChart from "../components/AnalyticsChart";
import API from "../services/api";
import { motion } from "framer-motion";
import {
    FaChartLine,
    FaRocket,
    FaFileAlt,
    FaUserTie,
    FaBrain
} from "react-icons/fa";

import "../styles/Dashboard.css";

function Dashboard() {
    const [data, setData] = useState(null);

    const fetchDashboard = async () => {
        const token = localStorage.getItem("token");

        const response = await API.get("/dashboard", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        setData(response.data);
    };

    useEffect(() => {
        fetchDashboard();
    }, []);

    return (
        <>
            <Sidebar />

            <motion.main
            className="dashboard-main"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >

                {/* HERO */}

                <section className="hero-card">
                    <h1>Career Intelligence Dashboard</h1>

                    <p>
                        Track your ATS performance, interview readiness,
                        resume strength and skill growth in one place.
                    </p>
                </section>

                {data && (
                    <>

                        {/* TOP STATS */}

                        <section className="stats-grid">

                            <div className="stat-card premium-card">
                                <FaChartLine className="dashboard-icon" />
                                <h3>ATS Score</h3>
                                <h1>{data.ats_score}</h1>
                            </div>

                            <div className="stat-card premium-card">
                                <FaRocket className="dashboard-icon" />
                                <h3>Job Readiness</h3>
                                <h1>{data.job_readiness}</h1>
                            </div>

                            <div className="stat-card premium-card">
                                <FaFileAlt className="dashboard-icon" />
                                <h3>Resumes Uploaded</h3>
                                <h1>{data.resume_count}</h1>
                            </div>

                            <div className="stat-card premium-card">
                                <FaUserTie className="dashboard-icon" />
                                <h3>Interviews</h3>
                                <h1>{data.interviews_completed}</h1>
                            </div>

                        </section>

                        {/* READINESS */}

                        <section className="readiness-card">

                            <div className="readiness-circle">
                                {data.job_readiness}
                            </div>

                            <h2>Career Readiness Score</h2>

                            <p>
                                This score reflects your overall
                                preparedness for job opportunities.
                            </p>

                        </section>

                        {/* ANALYTICS */}

                        <section style={{ marginTop: "40px" }}>
                            <AnalyticsChart />
                        </section>

                        <div className="dashboard-grid">

                           <div className="dashboard-widget">
                               <h3>Career Readiness</h3>

                               <div className="mini-progress">
                                    <div
                                        className="mini-progress-fill"
                                        style={{
                                            width: `${data.job_readiness}%`
                                        }}
                                    />
                            </div>

        <p>
            {data.job_readiness}% Ready
        </p>
    </div>

    <div className="dashboard-widget">
        <h3>ATS Performance</h3>

        <div className="mini-progress">
            <div
                className="mini-progress-fill ats-fill"
                style={{
                    width: `${data.ats_score}%`
                }}
            />
        </div>

        <p>
            {data.ats_score}/100 ATS Score
        </p>
    </div>

</div>

                        {/* SKILLS */}

    <div className="stats-grid">

       <div className="stat-card premium-card">
            <h3>ATS Score</h3>
            <h1>{data.ats_score}</h1>
            <span className="card-status success">
                Resume Strength
            </span>
        </div>

        <div className="stat-card premium-card">
            <h3>Job Readiness</h3>
            <h1>{data.job_readiness}</h1>
            <span className="card-status primary">
                Career Ready
            </span>
        </div>

        <div className="stat-card premium-card">
            <h3>Resumes Uploaded</h3>
            <h1>{data.resume_count}</h1>
            <span className="card-status info">
                Portfolio Growth
            </span>
        </div>

        <div className="stat-card premium-card">
            <h3>Interviews</h3>
            <h1>{data.interviews_completed}</h1>
            <span className="card-status warning">
                Practice Progress
            </span>
        </div>
  
    </div>
    
                        {/* ROADMAP */}

                        <section className="roadmap-timeline">

                            <div className="timeline-card">
                                <div className="timeline-dot"></div>

                                <div>
                                    <h3>Improve ATS Score</h3>

                                    <p>
                                        Optimize keywords, formatting,
                                        and role-specific skills.
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-card">
                                <div className="timeline-dot"></div>

                                <div>
                                    <h3>Close Skill Gaps</h3>

                                    <p>
                                        Focus on technologies identified
                                        during analysis.
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-card">
                                <div className="timeline-dot"></div>

                                <div>
                                    <h3>Practice Interviews</h3>

                                    <p>
                                        Complete interview simulations
                                        and improve answer quality.
                                    </p>
                                </div>
                            </div>

                            <section className="activity-section">

                                <h2>Recent Activity</h2>

                                <div className="activity-card">
                                    Resume analyzed successfully
                                </div>

                                <div className="activity-card">
                                    ATS score calculated
                                </div>

                                <div className="activity-card">
                                    Roadmap generated
                                </div>

                                <div className="activity-card">
                                    Readiness score evaluated
                                 </div>

                            </section>

                        </section>

                    </>
                )}
            </motion.main>
        </>
    );
}

export default Dashboard;