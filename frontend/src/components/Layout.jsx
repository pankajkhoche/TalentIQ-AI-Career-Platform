import { Link } from "react-router-dom";

function Layout({ children }) {

    return (
        <div className="layout">

            <aside className="sidebar">

                <h2>TalentIQ</h2>

                <Link to="/dashboard">
                    Dashboard
                </Link>

                <Link to="/resume">
                    Resume
                </Link>

                <Link to="/skill-gap">
                    Skill Gap
                </Link>

                <Link to="/roadmap">
                    Roadmap
                </Link>

                <Link to="/readiness">
                    Readiness
                </Link>

                <Link to="/interview-practice">
                    Interview Practice
                </Link>

                <Link to="/career-advisor">
                    Career Advisor
                </Link>

                <Link to="/job-matcher">
                    Job Matcher
                </Link>

            </aside>

            <main className="content">
                {children}
            </main>

        </div>
    );
}

export default Layout;