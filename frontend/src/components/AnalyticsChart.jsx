import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";

import { useEffect, useState } from "react";
import API from "../services/api";

function AnalyticsChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");

        API.get("/analytics", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => setData(res.data))
            .catch(console.log);
    }, []);

    return (
        <div className="card" style={{ height: "400px", marginTop: "30px" }}>
            <h3>Real Performance Analytics</h3>

            <ResponsiveContainer width="100%" height="90%">
                <BarChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Bar dataKey="score" radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default AnalyticsChart;