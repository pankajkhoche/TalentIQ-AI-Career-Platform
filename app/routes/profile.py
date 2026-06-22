from fastapi import APIRouter

router = APIRouter()


@router.get("/profile-score")
def profile_score():

    score = 78

    missing = [
        "Add LinkedIn Profile",
        "Add GitHub Repository",
        "Upload Profile Photo",
        "Add Certifications"
    ]

    return {
        "profile_score": score,
        "missing_items": missing
    }