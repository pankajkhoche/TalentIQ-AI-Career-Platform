import { useState } from "react";
import Layout from "../components/Layout";

function CareerAdvisor() {
    const [roles] = useState([
        { role: "Python Developer", match: "95%" },
        { role: "Backend Developer", match: "90%" },
        { role: "Data Engineer", match: "75%" },
        { role: "DevOps Engineer", match: "60%" }
    ]);

    return (
        <Layout>
            <h1>Career Advisor</h1>

            <div className="cards">
                {roles.map((item, index) => (
                    <div key={index} className="card">
                        <h3>{item.role}</h3>
                        <p>Match: {item.match}</p>
                    </div>
                ))}
            </div>
        </Layout>
    );
}

export default CareerAdvisor;