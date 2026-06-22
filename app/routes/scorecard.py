from fastapi import APIRouter, Depends
from fastapi.responses import FileResponse

from app.services.dependencies import get_current_user
from app.services.pdf_scorecard import generate_scorecard_pdf

router = APIRouter()


@router.post("/generate-scorecard")
def generate_scorecard(
    data: dict,
    user=Depends(get_current_user)
):

    pdf_path = generate_scorecard_pdf(
        data,
        user["email"]
    )

    return FileResponse(
        pdf_path,
        media_type="application/pdf",
        filename="TalentIQ_Interview_Scorecard.pdf"
    )