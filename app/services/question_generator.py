def generate_questions(skills):

    questions = []

    mapping = {

        "Python":
        "Explain Python decorators.",

        "SQL":
        "Difference between JOIN and UNION?",

        "FastAPI":
        "Explain dependency injection.",

        "AWS":
        "What is EC2?",

        "Docker":
        "What is containerization?"
    }

    for skill in skills:

        if skill in mapping:

            questions.append(
                mapping[skill]
            )

    return questions