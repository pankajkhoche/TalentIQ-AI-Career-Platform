import { useState } from "react";
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

    const submitAnswer = async () => {
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

        setResults([...results, response.data]);
        setAnswer("");

        if (current < questions.length - 1) {
            setCurrent(current + 1);
        }
    };

    const averageScore =
        results.length > 0
            ? Math.round(
                results.reduce((sum, item) => sum + item.final_score, 0) /
                results.length
            )
            : 0;

    return (
        <div className="content">
            <h1>Interview Simulator</h1>

            {current < questions.length && (
                <div className="card">
                    <h3>
                        Question {current + 1} of {questions.length}
                    </h3>

                    <p>{questions[current]}</p>

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
                    <p>Questions Answered: {results.length}</p>
                    <p>Average Score: {averageScore}/10</p>

                    {results.map((item, index) => (
                        <div className="question-card" key={index}>
                            <h4>Question {index + 1}</h4>
                            <p>Final Score: {item.final_score}/10</p>
                            <p>Technical: {item.technical_score}</p>
                            <p>Communication: {item.communication_score}</p>
                            <p>Confidence: {item.confidence_score}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default InterviewPractice;