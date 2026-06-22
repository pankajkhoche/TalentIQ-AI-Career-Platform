from fastapi import APIRouter

from app.services.resume_rewriter import rewrite_resume

router = APIRouter()


@router.post("/rewrite-resume")
def rewrite(data: dict):

    result = rewrite_resume(
        data["resume_text"],
        data["job_description"]
    )

    return {
        "rewritten_resume": result
    }