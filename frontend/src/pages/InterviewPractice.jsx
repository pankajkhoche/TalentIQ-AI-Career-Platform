import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Layout from "../components/Layout";
import API from "../services/api";

function InterviewPractice() {
    const questions = [
        "Explain FastAPI dependency injection.",
        "How does JWT authentication work?",
        "Difference between SQL and NoSQL databases?",
        "How would you optimize a slow API?",
        "Explain Docker containerization."
    ];

    const [current, setCurrent] = useState(0);
    const [answer, setAnswer] = useState("");
    const [results, setResults] = useState([]);
    const [finalResult, setFinalResult] = useState(null);
    const [timeLeft, setTimeLeft] = useState(60);

    useEffect(() => {
        if (finalResult) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [current, finalResult]);

    const submitAnswer = async () => {
        try {
            if (!answer.trim()) {
                toast.error("Please write an answer");
                return;
            }

            const token = localStorage.getItem("token");

            const response = await API.post(
                "/submit-answer",
                { answer },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const updatedResults = [...results, response.data];

            setResults(updatedResults);
            setAnswer("");
            setTimeLeft(60);

            toast.success("Answer evaluated");

            if (current < questions.length - 1) {
                setCurrent(current + 1);
            } else {
                const average = Math.round(
                    updatedResults.reduce(
                        (sum, item) => sum + item.final_score,
                        0
                    ) / updatedResults.length
                );

                setFinalResult({
                    final_score: average,
                    technical_score: response.data.technical_score,
                    communication_score: response.data.communication_score,
                    confidence_score: response.data.confidence_score,
                    strengths: response.data.strengths,
                    weaknesses: response.data.weaknesses,
                    suggestions: response.data.suggestions
                });
            }

        } catch (error) {
            console.log(error);
            toast.error("Evaluation failed");
        }
    };

    const downloadScorecard = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await API.post(
                "/generate-scorecard",
                finalResult,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    responseType: "blob"
                }
            );

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");

            link.href = url;
            link.setAttribute("download", "TalentIQ_Interview_Scorecard.pdf");

            document.body.appendChild(link);
            link.click();
            link.remove();

            toast.success("Scorecard downloaded");

        } catch (error) {
            console.log(error);
            toast.error("Download failed");
        }
    };

    const progress = ((current + 1) / questions.length) * 100;

    return (
        <Layout>
            <h1>Interview Simulator</h1>

            {!finalResult && (
                <div className="card">
                    <div className="interview-top">
                        <h3>Question {current + 1} of {questions.length}</h3>
                        <span className="timer-badge">{timeLeft}s</span>
                    </div>

                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>

                    <p style={{ marginTop: "20px" }}>
                        {questions[current]}
                    </p>

                    <textarea
                        rows="8"
                        placeholder="Type your answer here..."
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                    />

                    <button className="primary-btn" onClick={submitAnswer}>
                        Submit Answer
                    </button>
                </div>
            )}

            {results.length > 0 && (
                <div className="card" style={{ marginTop: "25px" }}>
                    <h2>Interview Progress</h2>

                    {results.map((item, index) => (
                        <div className="question-card" key={index}>
                            <h4>Question {index + 1}</h4>
                            <p>Final Score: {item.final_score}/10</p>
                            <p>Technical: {item.technical_score}/10</p>
                            <p>Communication: {item.communication_score}/10</p>
                            <p>Confidence: {item.confidence_score}/10</p>
                        </div>
                    ))}
                </div>
            )}

            {finalResult && (
                <div className="card final-report">
                    <h2>Final Interview Report</h2>

                    <div className="cards">
                        <div className="card">
                            <h3>Overall</h3>
                            <p>{finalResult.final_score}/10</p>
                        </div>

                        <div className="card">
                            <h3>Technical</h3>
                            <p>{finalResult.technical_score}/10</p>
                        </div>

                        <div className="card">
                            <h3>Communication</h3>
                            <p>{finalResult.communication_score}/10</p>
                        </div>

                        <div className="card">
                            <h3>Confidence</h3>
                            <p>{finalResult.confidence_score}/10</p>
                        </div>
                    </div>

                    <button
                        className="primary-btn"
                        onClick={downloadScorecard}
                        style={{ marginTop: "25px" }}
                    >
                        Download PDF Scorecard
                    </button>
                </div>
            )}
        </Layout>
    );
}

export default InterviewPractice;