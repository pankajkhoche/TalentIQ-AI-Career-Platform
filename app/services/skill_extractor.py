def extract_skills(text):

    skills_db = [

        "Python",
        "SQL",
        "FastAPI",
        "AWS",
        "Docker",
        "JavaScript",
        "React",
        "MongoDB",
        "PostgreSQL"
    ]

    found = []

    for skill in skills_db:

        if skill.lower() in text.lower():

            found.append(skill)

    return found