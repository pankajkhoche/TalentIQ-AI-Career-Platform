from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models import ResumeResult, InterviewResult, ReadinessResult
from app.services.dependencies import get_current_user

router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/analytics")
def analytics(
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):
    user_id = user["id"]

    latest_resume = db.query(ResumeResult).filter(
        ResumeResult.user_id == user_id
    ).order_by(ResumeResult.id.desc()).first()

    latest_interview = db.query(InterviewResult).filter(
        InterviewResult.user_id == user_id
    ).order_by(InterviewResult.id.desc()).first()

    latest_readiness = db.query(ReadinessResult).filter(
        ReadinessResult.user_id == user_id
    ).order_by(ReadinessResult.id.desc()).first()

    return [
        {
            "name": "ATS",
            "score": latest_resume.ats_score if latest_resume else 0
        },
        {
            "name": "Interview",
            "score": latest_interview.score * 10 if latest_interview else 0
        },
        {
            "name": "Readiness",
            "score": latest_readiness.readiness_score if latest_readiness else 0
        }
    ]


@router.get("/resume-compare")
def resume_compare(
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):
    records = db.query(ResumeResult).filter(
        ResumeResult.user_id == user["id"]
    ).order_by(ResumeResult.id.asc()).all()

    return [
        {
            "version": f"Resume V{index + 1}",
            "ats_score": item.ats_score,
            "skills": item.skills
        }
        for index, item in enumerate(records)
    ]