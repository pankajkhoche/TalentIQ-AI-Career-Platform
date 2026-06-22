import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import API from "../services/api";

function ProfileCompletion() {

    const [data, setData] = useState(null);

    useEffect(() => {

        const loadData = async () => {

            const response =
                await API.get("/profile-score");

            setData(response.data);
        };

        loadData();

    }, []);

    return (
        <Layout>

            <h1>Profile Completion</h1>

            {
                data &&

                <>
                    <div className="readiness-card">

                        <div className="readiness-circle">
                            {data.profile_score}%
                        </div>

                        <h2>
                            Profile Strength
                        </h2>

                    </div>

                    <div
                        className="card"
                        style={{
                            marginTop:"30px"
                        }}
                    >
                        <h3>
                            Missing Items
                        </h3>

                        {
                            data.missing_items.map(
                                (item,index)=>(
                                    <p key={index}>
                                        • {item}
                                    </p>
                                )
                            )
                        }

                    </div>

                </>
            }

        </Layout>
    );
}

export default ProfileCompletion;