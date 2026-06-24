import { useState } from "react";
import toast from "react-hot-toast";
import Layout from "../components/Layout";
import API from "../services/api";

function ResumeUpload() {
    const [file, setFile] = useState(null);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const uploadResume = async () => {
        try {
            if (!file) {
                toast.error("Please select a resume");
                return;
            }

            const formData = new FormData();
            formData.append("file", file);

            const token = localStorage.getItem("token");

            const response = await API.post("/upload-resume", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setResult(response.data);
            setLoading(false);
            toast.success("Resume analyzed successfully");

        } catch (error) {
            console.log(error);
            toast.error("Resume Upload Failed");
        }
    };

    return (
        <Layout>
            <h1>Resume Intelligence</h1>

            <div className="card upload-card">
                <h2>Upload Resume</h2>

                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                />

                <button
                    className="primary-btn"
                    onClick={uploadResume}
                    disabled={loading}
                >
                    {loading ? "Analyzing Resume..." : "Upload Resume"}
                </button>
            </div>

            {result && (
                <>
                    <div className="cards" style={{ marginTop: "30px" }}>
                        <div className="card premium-card">
                            <h3>ATS Score</h3>
                            <p>{result.ats_score}</p>
                        </div>

                        <div className="card premium-card">
                            <h3>Skills Found</h3>
                            <p>{result.skills.length}</p>
                        </div>

                        <div className="card premium-card">
                            <h3>Questions</h3>
                            <p>{result.questions.length}</p>
                        </div>
                    </div>

                    <div className="card skills-card">
                        <h3>Extracted Skills</h3>
                        <div className="badge-wrap">
                            {result.skills.map((skill, index) => (
                                <span className="skill-badge" key={index}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="card skills-card">
                        <h3>Interview Questions</h3>
                        {result.questions.map((q, index) => (
                            <div className="question-card" key={index}>
                                <strong>Q{index + 1}.</strong> {q}
                            </div>
                        ))}
                    </div>

                    <div className="card skills-card">
                        <h3>AI Resume Review</h3>
                        <pre className="ai-review">{result.ai_review}</pre>
                    </div>
                </>
            )}
        </Layout>
    );
}

export default ResumeUpload;