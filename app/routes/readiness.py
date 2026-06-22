from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models import ReadinessResult

from app.services.dependencies import get_current_user

from app.models import ReadinessHistory

router = APIRouter()


def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


@router.post("/readiness")
def readiness(
    data: dict,
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):

    ats_score = data["ats_score"]

    interview_score = data["interview_score"]

    gap_count = data["gap_count"]

    readiness_score = (

        ats_score * 0.4 +

        interview_score * 10 * 0.4 +

        max(
            0,
            100 - (gap_count * 10)
        ) * 0.2
    )

    if readiness_score >= 80:

        status = "Ready For Interviews"

    elif readiness_score >= 60:

        status = "Need More Preparation"

    else:

        status = "Not Ready Yet"

    record = ReadinessResult(

        user_id=user["id"],

        readiness_score=int(readiness_score)
    )

    db.add(record)

    db.commit()

    history = ReadinessHistory(
    user_id=user["id"],
    readiness_score=readiness_score
)

    db.add(history)

    return {

        "logged_user": user["email"],

        "job_readiness": round(readiness_score, 2),

        "status": status
    }