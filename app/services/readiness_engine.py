def calculate_readiness(
    ats_score,
    match_percentage,
    interview_score
):

    readiness = (
        ats_score +
        match_percentage +
        interview_score
    ) / 3

    return round(readiness, 2)