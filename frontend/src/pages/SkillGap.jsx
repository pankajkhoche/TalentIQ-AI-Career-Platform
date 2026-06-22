import { useState } from "react";
import API from "../services/api";

function SkillGap() {
    const [role, setRole] = useState("");
    const [skills, setSkills] = useState("");
    const [result, setResult] = useState(null);

    const analyzeSkillGap = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await API.post(
                "/skill-gap",
                {
                    role,
                    skills: skills.split(",").map((s) => s.trim())
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
            alert("Skill Gap Analysis Failed");
        }
    };

    return (
        <div className="content">
            <h1>Skill Gap Analysis</h1>

            <div className="card upload-card">
                <h2>Target Role</h2>

                <input
                    placeholder="Example: python developer"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />

                <h2>Your Skills</h2>

                <input
                    placeholder="Example: python,mysql,git"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                />

                <button className="primary-btn" onClick={analyzeSkillGap}>
                    Analyze Skill Gap
                </button>
            </div>

            {result && (
                <>
                    <div className="cards" style={{ marginTop: "30px" }}>
                        <div className="card premium-card">
                            <h3>Target Role</h3>
                            <p style={{ fontSize: "22px" }}>
                                {result.target_role}
                            </p>
                        </div>

                        <div className="card premium-card">
                            <h3>Gap Count</h3>
                            <p>{result.gap_count}</p>
                        </div>

                        <div className="card premium-card">
                            <h3>Current Skills</h3>
                            <p>{result.current_skills.length}</p>
                        </div>
                    </div>

                    <div className="card skills-card">
                        <h3>Current Skills</h3>

                        <div className="badge-wrap">
                            {result.current_skills.map((skill, index) => (
                                <span className="skill-badge" key={index}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="card skills-card">
                        <h3>Missing Skills</h3>

                        <div className="badge-wrap">
                            {result.missing_skills.map((skill, index) => (
                                <span className="missing-badge" key={index}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default SkillGap;