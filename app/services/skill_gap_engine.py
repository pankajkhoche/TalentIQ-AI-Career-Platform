from app.services.role_engine import get_role_skills


def analyze_skill_gap(user_skills, role):

    required_skills = get_role_skills(role)

    missing_skills = []

    for skill in required_skills:

        if skill not in user_skills:

            missing_skills.append(skill)

    match_percentage = (
        (len(required_skills) - len(missing_skills))
        / len(required_skills)
    ) * 100

    return {

        "role": role,

        "required_skills": required_skills,

        "user_skills": user_skills,

        "missing_skills": missing_skills,

        "match_percentage": round(match_percentage, 2)
    }