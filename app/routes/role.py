from fastapi import APIRouter

router = APIRouter()

@router.post("/roles")
def recommend_roles(data: dict):

    skills = [

        skill.lower()

        for skill in data["skills"]
    ]

    roles = []

    if "python" in skills:

        roles.append(
            "Python Developer"
        )

    if "sql" in skills:

        roles.append(
            "Data Engineer"
        )

    if "machine learning" in skills:

        roles.append(
            "AI Engineer"
        )

    if "django" in skills:

        roles.append(
            "Backend Developer"
        )

    return {

        "recommended_roles":
        roles
    }