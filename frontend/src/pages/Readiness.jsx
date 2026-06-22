import { useState } from "react";
import toast from "react-hot-toast";
import Layout from "../components/Layout";
import API from "../services/api";

function Readiness() {
    const [ats, setAts] = useState("");
    const [interview, setInterview] = useState("");
    const [gap, setGap] = useState("");
    const [result, setResult] = useState(null);

    const checkReadiness = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await API.post(
                "/readiness",
                {
                    ats_score: Number(ats),
                    interview_score: Number(interview),
                    gap_count: Number(gap)
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setResult(response.data);
            toast.success("Readiness calculated");

        } catch (error) {
            console.log(error);
            toast.error("Readiness Failed");
        }
    };

    return (
        <Layout>
            <h1>Job Readiness</h1>

            <div className="card upload-card">
                <input placeholder="ATS Score" value={ats} onChange={(e) => setAts(e.target.value)} />
                <input placeholder="Interview Score" value={interview} onChange={(e) => setInterview(e.target.value)} />
                <input placeholder="Gap Count" value={gap} onChange={(e) => setGap(e.target.value)} />

                <button className="primary-btn" onClick={checkReadiness}>
                    Calculate Readiness
                </button>
            </div>

            {result && (
                <div className="readiness-card">
                    <div className="readiness-circle">
                        {result.job_readiness}%
                    </div>

                    <h2>{result.status}</h2>
                    <p>Your current career readiness score based on ATS, interview, and skill gap.</p>
                </div>
            )}
        </Layout>
    );
}

export default Readiness;