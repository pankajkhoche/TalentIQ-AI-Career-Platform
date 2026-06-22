import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ResumeUpload from "./pages/ResumeUpload";
import SkillGap from "./pages/SkillGap";
import Roadmap from "./pages/Roadmap";
import Readiness from "./pages/Readiness";
import InterviewPractice from "./pages/InterviewPractice";
import CareerAdvisor from "./pages/CareerAdvisor";
import JobMatcher from "./pages/JobMatcher";
import ResumeHistory from "./pages/ResumeHistory";
import InterviewHistory from "./pages/InterviewHistory";
import ProfileCompletion from "./pages/ProfileCompletion";
import ResumeCompare from "./pages/ResumeCompare";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <BrowserRouter>
            <Toaster position="top-right" />

            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />

                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/resume" element={<ProtectedRoute><ResumeUpload /></ProtectedRoute>} />
                <Route path="/skill-gap" element={<ProtectedRoute><SkillGap /></ProtectedRoute>} />
                <Route path="/roadmap" element={<ProtectedRoute><Roadmap /></ProtectedRoute>} />
                <Route path="/readiness" element={<ProtectedRoute><Readiness /></ProtectedRoute>} />
                <Route path="/interview-practice" element={<ProtectedRoute><InterviewPractice /></ProtectedRoute>} />
                <Route path="/career-advisor" element={<ProtectedRoute><CareerAdvisor /></ProtectedRoute>} />
                <Route path="/job-matcher" element={<ProtectedRoute><JobMatcher /></ProtectedRoute>} />
                <Route path="/resume-history" element={<ProtectedRoute><ResumeHistory /></ProtectedRoute>} />
                <Route path="/interview-history" element={<ProtectedRoute><InterviewHistory /></ProtectedRoute>} />
                <Route path="/profile-completion" element={<ProtectedRoute><ProfileCompletion /></ProtectedRoute>} />
                <Route path="/resume-compare" element={<ProtectedRoute><ResumeCompare /></ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;