def evaluate_answer(answer):

    answer_lower = answer.lower()

    word_count = len(answer.split())

    technical_score = min(
        max(int(word_count / 10), 1),
        10
    )

    communication_score = min(
        max(int(word_count / 12), 1),
        10
    )

    confidence_score = min(
        max(int(word_count / 15), 1),
        10
    )

    strengths = []
    weaknesses = []
    suggestions = []

    keywords = [
        "fastapi",
        "python",
        "sql",
        "postgresql",
        "database",
        "docker",
        "aws",
        "jwt",
        "api"
    ]

    found_keywords = []

    for keyword in keywords:

        if keyword in answer_lower:

            found_keywords.append(keyword)

    if len(found_keywords) >= 3:

        strengths.append(
            "Good use of technical terminology"
        )

    if "fastapi" in answer_lower:

        strengths.append(
            "Explained FastAPI concepts"
        )

    if "database" in answer_lower:

        strengths.append(
            "Included database knowledge"
        )

    if word_count < 50:

        weaknesses.append(
            "Answer lacks sufficient detail"
        )

        suggestions.append(
            "Provide more explanation and examples"
        )

    if len(found_keywords) < 2:

        weaknesses.append(
            "Limited technical depth"
        )

        suggestions.append(
            "Use more technical concepts and examples"
        )

    if len(strengths) == 0:

        strengths.append(
            "Basic answer structure present"
        )

    return {

        "technical_score":
        technical_score,

        "communication_score":
        communication_score,

        "confidence_score":
        confidence_score,

        "strengths":
        strengths,

        "weaknesses":
        weaknesses,

        "suggestions":
        suggestions
    }