import { useState } from "react";
import API from "../services/api";

function Roadmap() {
    const [skills, setSkills] = useState("");
    const [result, setResult] = useState(null);

    const generateRoadmap = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await API.post(
                "/roadmap",
                {
                    missing_skills: skills
                        .split(",")
                        .map((s) => s.trim())
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setResult(response.data);

        } catch (error) {
            console.log(error);
            alert("Roadmap Failed");
        }
    };

    return (
        <div className="content">
            <h1>Learning Roadmap</h1>

            <div className="card upload-card">
                <h2>Missing Skills</h2>

                <input
                    placeholder="Example: docker,aws,redis"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                />

                <button className="primary-btn" onClick={generateRoadmap}>
                    Generate Roadmap
                </button>
            </div>

            {result && (
                <div className="roadmap-timeline">
                    {Object.entries(result.roadmap).map(([week, task], index) => (
                        <div className="timeline-card" key={index}>
                            <div className="timeline-dot"></div>

                            <div>
                                <h3>{week}</h3>
                                <p>{task}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Roadmap;