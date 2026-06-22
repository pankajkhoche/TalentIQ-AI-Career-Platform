ROLES = {

    "Python Backend Developer": [
        "Python",
        "SQL",
        "FastAPI",
        "Docker",
        "AWS",
        "Redis"
    ],

    "Data Engineer": [
        "Python",
        "SQL",
        "Spark",
        "Airflow",
        "AWS"
    ],

    "Full Stack Developer": [
        "Python",
        "React",
        "JavaScript",
        "SQL",
        "Docker"
    ]
}


def get_role_skills(role):

    return ROLES.get(role, [])