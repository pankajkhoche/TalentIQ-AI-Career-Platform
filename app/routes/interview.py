from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models import InterviewResult

from app.services.evaluation_engine import evaluate_answer
from app.services.dependencies import get_current_user

router = APIRouter()


def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


@router.post("/submit-answer")
def submit_answer(
    data: dict,
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):

    answer = data["answer"]

    result = evaluate_answer(answer)

    final_score = int(

        (
            result["technical_score"]
            +
            result["communication_score"]
            +
            result["confidence_score"]

        ) / 3

    )

    interview_record = InterviewResult(

        user_id=user["id"],

        score=final_score,

        feedback=str(result)

    )

    db.add(interview_record)

    db.commit()

    return {

        "message":
        "Interview Evaluation Complete",

        "final_score":
        final_score,

        "technical_score":
        result["technical_score"],

        "communication_score":
        result["communication_score"],

        "confidence_score":
        result["confidence_score"],

        "strengths":
        result["strengths"],

        "weaknesses":
        result["weaknesses"],

        "suggestions":
        result["suggestions"]
    }