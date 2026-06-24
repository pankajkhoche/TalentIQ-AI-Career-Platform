import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../services/api";

function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const registerUser = async () => {
        try {
            await API.post("/register", {
                name,
                email,
                password
            });

            toast.success("Account Created Successfully");

            setTimeout(() => {
                navigate("/login");
            }, 700);

        } catch (error) {
            console.log(error);
            toast.error("Registration Failed");
        }
    };

    return (
        <div className="login-page">
            <div className="login-left">
                <h1 className="brand-animated">TalentIQ</h1>
                <h2>Create Your Account</h2>
                <p>
                    Start your AI-powered career journey with resume analysis,
                    skill gap insights, interview practice, and readiness tracking.
                </p>
            </div>

            <div className="login-card">
                <h2>Register</h2>
                <p className="login-subtitle">Create your TalentIQ account</p>

                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

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

                <button className="primary-btn" onClick={registerUser}>
                    Register
                </button>

                <p style={{ marginTop: "18px", color: "#cbd5e1" }}>
                    Already have an account?{" "}
                    <Link to="/login" style={{ color: "#38bdf8" }}>
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;