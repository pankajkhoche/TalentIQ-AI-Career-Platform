from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models import ResumeResult, InterviewResult
from app.services.dependencies import get_current_user

router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/resume-history")
def resume_history(
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):
    records = (
        db.query(ResumeResult)
        .filter(ResumeResult.user_id == user["id"])
        .order_by(ResumeResult.id.desc())
        .all()
    )

    return [
        {
            "id": item.id,
            "skills": item.skills,
            "ats_score": item.ats_score
        }
        for item in records
    ]


@router.get("/interview-history")
def interview_history(
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):
    records = (
        db.query(InterviewResult)
        .filter(InterviewResult.user_id == user["id"])
        .order_by(InterviewResult.id.desc())
        .all()
    )

    return [
        {
            "id": item.id,
            "score": item.score,
            "feedback": item.feedback
        }
        for item in records
    ]