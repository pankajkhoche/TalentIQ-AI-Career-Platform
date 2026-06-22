from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models import RoadmapResult

from app.services.dependencies import get_current_user

router = APIRouter()


def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


@router.post("/roadmap")
def roadmap(
    data: dict,
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):

    missing_skills = data["missing_skills"]

    roadmap_data = {}

    week = 1

    for skill in missing_skills:

        roadmap_data[f"Week {week}"] = f"Learn {skill}"

        week += 1

    record = RoadmapResult(

        user_id=user["id"],

        roadmap=str(roadmap_data)
    )

    db.add(record)

    db.commit()

    return {

        "logged_user": user["email"],

        "roadmap": roadmap_data
    }