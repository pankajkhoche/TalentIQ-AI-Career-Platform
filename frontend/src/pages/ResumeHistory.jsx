import { useEffect, useState } from "react";
import API from "../services/api";

function ResumeHistory() {
    const [records, setRecords] = useState([]);

    const fetchHistory = async () => {
        const token = localStorage.getItem("token");

        const response = await API.get("/resume-history", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        setRecords(response.data);
    };

    useEffect(() => {
        fetchHistory();
    }, []);

    return (
        <div className="content">
            <h1>Resume History</h1>

            <div className="cards">
                {records.map((item, index) => (
                    <div className="card" key={item.id}>
                        <h3>Resume Version {index + 1}</h3>
                        <p>ATS Score: {item.ats_score}</p>
                        <p className="skills-text">{item.skills}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ResumeHistory;