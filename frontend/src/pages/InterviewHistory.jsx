import { useEffect, useState } from "react";
import API from "../services/api";

function InterviewHistory() {
    const [records, setRecords] = useState([]);

    const fetchHistory = async () => {
        const token = localStorage.getItem("token");

        const response = await API.get("/interview-history", {
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
            <h1>Interview History</h1>

            <div className="cards">
                {records.map((item) => (
                    <div className="card" key={item.id}>
                        <h3>Score: {item.score}/10</h3>
                        <p className="skills-text">{item.feedback}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InterviewHistory;