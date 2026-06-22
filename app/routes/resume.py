from fastapi import APIRouter, UploadFile, Depends
from sqlalchemy.orm import Session

import pdfplumber

from app.database import SessionLocal
from app.models import ResumeResult

from app.services.skill_extractor import extract_skills
from app.services.dependencies import get_current_user
from app.services.ats_engine import calculate_ats
from app.services.question_generator import generate_questions
from app.services.openai_service import ai_resume_review

from app.models import ATSHistory

router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/upload-resume")
async def upload_resume(
    file: UploadFile,
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):

    path = f"app/uploads/{file.filename}"

    content = await file.read()

    with open(path, "wb") as f:
        f.write(content)

    text = ""

    with pdfplumber.open(path) as pdf:
        for page in pdf.pages:
            extracted = page.extract_text()

            if extracted:
                text += extracted

    skills = extract_skills(text)

    ats = calculate_ats(skills)

    questions = generate_questions(skills)

    try:
        ai_review = ai_resume_review(text)

    except Exception as e:
        ai_review = f"AI review failed: {str(e)}"

    resume_record = ResumeResult(
        user_id=user["id"],
        skills=", ".join(skills),
        ats_score=ats
    )

    db.add(resume_record)
    ats_history = ATSHistory(
    user_id=user["id"],
    ats_score=ats
)

    db.add(ats_history)
    db.commit()

    return {
        "skills": skills,
        "ats_score": ats,
        "questions": questions,
        "ai_review": ai_review,
        "message": "Saved Successfully"
    }