from fastapi import APIRouter
from sqlalchemy.orm import Session
from fastapi import Depends

from app.database import SessionLocal
from app.models import SkillGapResult
from app.services.dependencies import get_current_user

router = APIRouter()

def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()

ROLE_SKILLS = {

    "python developer":[

        "python",
        "fastapi",
        "django",
        "postgresql",
        "mysql",
        "rest api",
        "docker",
        "git"
    ],

    "data engineer":[

        "python",
        "sql",
        "spark",
        "hadoop",
        "airflow",
        "aws"
    ],

    "ai engineer":[

        "python",
        "machine learning",
        "deep learning",
        "tensorflow",
        "pytorch",
        "nlp"
    ]
}


@router.post("/skill-gap")

def skill_gap(
    data: dict,
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):
    

    role = data["role"].lower()

    user_skills = [

        skill.lower()

        for skill in data["skills"]
    ]

    required_skills = ROLE_SKILLS.get(
        role,
        []
    )

    missing_skills = [

        skill

        for skill in required_skills

        if skill not in user_skills
    ]

    record = SkillGapResult(

        user_id=user["id"],

        missing_skills=",".join(
            missing_skills
        )
    )

    db.add(record)
    db.commit()


    return {

        "target_role": role,

        "current_skills": user_skills,

        "missing_skills": missing_skills,

        "gap_count":
        len(missing_skills)
    }