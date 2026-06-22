import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import AnalyticsChart from "../components/AnalyticsChart";
import API from "../services/api";
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

            <main className="dashboard-main">
                <div className="hero-card">
                    <h1>Welcome to TalentIQ</h1>
                    <p>Your AI-powered career readiness command center.</p>
                </div>

                {data && (
                    <>
                        <div className="stats-grid">
                            <div className="stat-card">
                                <h3>ATS Score</h3>
                                <h1>{data.ats_score}</h1>
                            </div>

                            <div className="stat-card">
                                <h3>Readiness</h3>
                                <h1>{data.job_readiness}</h1>
                            </div>

                            <div className="stat-card">
                                <h3>Resumes</h3>
                                <h1>{data.resume_count}</h1>
                            </div>

                            <div className="stat-card">
                                <h3>Interviews</h3>
                                <h1>{data.interviews_completed}</h1>
                            </div>
                        </div>

                        <AnalyticsChart />

                        <div className="stat-card" style={{ marginTop: "30px" }}>
                            <h3>Latest Skills</h3>
                            <p>{data.skills}</p>
                        </div>
                    </>
                )}
            </main>
        </>
    );
}

export default Dashboard;