import { useState } from "react";

function JobMatcher() {

    const [jobs] = useState([

        {
            role: "Python Developer",
            company: "JP Morgan",
            match: "95%"
        },

        {
            role: "Backend Developer",
            company: "Goldman Sachs",
            match: "90%"
        },

        {
            role: "Software Engineer",
            company: "Amazon",
            match: "85%"
        }

    ]);

    return (

        <div className="content">

            <h1>Job Matcher</h1>

            <div className="cards">

                {
                    jobs.map((job, index) => (

                        <div
                            key={index}
                            className="card"
                        >

                            <h3>
                                {job.role}
                            </h3>

                            <p>
                                {job.company}
                            </p>

                            <p>
                                Match:
                                {" "}
                                {job.match}
                            </p>

                        </div>

                    ))
                }

            </div>

        </div>

    );
}

export default JobMatcher;