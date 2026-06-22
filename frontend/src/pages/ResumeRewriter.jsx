import { useState } from "react";
import Layout from "../components/Layout";
import API from "../services/api";

function ResumeRewriter() {

    const [resumeText, setResumeText] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [result, setResult] = useState("");

    const rewriteResume = async () => {

        const response = await API.post(
            "/rewrite-resume",
            {
                resume_text: resumeText,
                job_description: jobDescription
            }
        );

        setResult(
            response.data.rewritten_resume
        );
    };

    return (
        <Layout>

            <h1>AI Resume Rewriter</h1>

            <div className="card">

                <textarea
                    rows="10"
                    placeholder="Paste Resume Text"
                    value={resumeText}
                    onChange={(e) =>
                        setResumeText(e.target.value)
                    }
                />

                <br /><br />

                <textarea
                    rows="10"
                    placeholder="Paste Job Description"
                    value={jobDescription}
                    onChange={(e) =>
                        setJobDescription(e.target.value)
                    }
                />

                <br /><br />

                <button
                    className="primary-btn"
                    onClick={rewriteResume}
                >
                    Rewrite Resume
                </button>

            </div>

            {
                result &&

                <div
                    className="card"
                    style={{
                        marginTop:"30px"
                    }}
                >
                    <pre>
                        {result}
                    </pre>
                </div>
            }

        </Layout>
    );
}

export default ResumeRewriter;