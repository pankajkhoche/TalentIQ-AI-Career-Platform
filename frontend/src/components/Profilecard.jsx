function ProfileCard({
    ats = 90,
    readiness = 85
}) {
    return (
        <div className="card">
            <h3>Profile Summary</h3>

            <br />

            <p style={{fontSize:"20px"}}>
                👤 Pankaj
            </p>

            <br />

            <p>Role: Python Developer</p>

            <p>ATS Score: {ats}</p>

            <p>Readiness: {readiness}</p>

            <p style={{color:"#22c55e"}}>
                Ready For Interviews
            </p>
        </div>
    );
}

export default ProfileCard;