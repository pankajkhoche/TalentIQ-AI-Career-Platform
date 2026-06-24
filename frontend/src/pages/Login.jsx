import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../services/api";
import toast from "react-hot-toast";


function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const loginUser = async () => {
        try {
            const response = await API.post("/login", {
                email,
                password
            });

            localStorage.setItem("token", response.data.access_token);
            toast.success("Login Successful");

            setTimeout(() => {
                navigate("/dashboard");
            }, 1000);

        } catch (error) {
            console.log(error);
            toast.error("Invalid Email or Password");
        }
    };

    return (
        <div className="login-page">
            <div className="login-left">
                <h1 className="brand-animated">TalentIQ</h1>

                <h2>AI Career Intelligence Platform</h2>

                <p>
                    Analyze resumes, discover skill gaps, generate roadmaps,
                    measure job readiness, and accelerate your career with
                    AI-powered intelligence.
                </p>
            </div>

            <div className="login-card">
                <h2>Welcome Back</h2>

                <p className="login-subtitle">
                    Login to continue your career journey
                </p>

                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <div className="password-box">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <span onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? "🙈" : "👁️"}
                    </span>
                </div>

                <button className="primary-btn" onClick={loginUser}>
                    Login
                </button>

                <p style={{ marginTop: "18px", color: "#cbd5e1" }}>
                    New user?{" "}
                    <Link to="/register" style={{ color: "#38bdf8" }}>
                        Create account
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;