from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func

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


@router.get("/dashboard")
def dashboard(
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):
    user_id = user["id"]

    resume_count = db.query(ResumeResult).filter(
        ResumeResult.user_id == user_id
    ).count()

    interview_count = db.query(InterviewResult).filter(
        InterviewResult.user_id == user_id
    ).count()

    highest_ats = db.query(func.max(ResumeResult.ats_score)).filter(
        ResumeResult.user_id == user_id
    ).scalar() or 0

    average_interview = db.query(func.avg(InterviewResult.score)).filter(
        InterviewResult.user_id == user_id
    ).scalar() or 0

    latest_resume = db.query(ResumeResult).filter(
        ResumeResult.user_id == user_id
    ).order_by(ResumeResult.id.desc()).first()

    latest_readiness = db.query(ReadinessResult).filter(
        ReadinessResult.user_id == user_id
    ).order_by(ReadinessResult.id.desc()).first()

    return {
        "logged_user": user["email"],
        "resume_count": resume_count,
        "interviews_completed": interview_count,
        "ats_score": highest_ats,
        "average_score": round(float(average_interview), 2),
        "job_readiness": latest_readiness.readiness_score if latest_readiness else highest_ats,
        "skills": latest_resume.skills if latest_resume else "No skills found yet"
    }