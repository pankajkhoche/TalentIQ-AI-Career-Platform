import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import API from "../services/api";

function ResumeCompare() {
    const [records, setRecords] = useState([]);

    const fetchCompare = async () => {
        const token = localStorage.getItem("token");

        const response = await API.get("/resume-compare", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        setRecords(response.data);
    };

    useEffect(() => {
        fetchCompare();
    }, []);

    const first = records[0]?.ats_score || 0;
    const latest = records[records.length - 1]?.ats_score || 0;
    const improvement = latest - first;

    return (
        <Layout>
            <h1>Resume Compare</h1>

            <div className="cards">
                <div className="card premium-card">
                    <h3>First ATS</h3>
                    <p>{first}</p>
                </div>

                <div className="card premium-card">
                    <h3>Latest ATS</h3>
                    <p>{latest}</p>
                </div>

                <div className="card premium-card">
                    <h3>Improvement</h3>
                    <p>{improvement >= 0 ? `+${improvement}` : improvement}</p>
                </div>
            </div>

            <div className="card skills-card">
                <h3>Resume Versions</h3>

                {records.map((item, index) => (
                    <div className="question-card" key={index}>
                        <h3>{item.version}</h3>
                        <p>ATS Score: {item.ats_score}</p>
                        <p className="skills-text">{item.skills}</p>
                    </div>
                ))}
            </div>
        </Layout>
    );
}

export default ResumeCompare;