from fastapi import FastAPI, Header
from fastapi.middleware.cors import CORSMiddleware

from app.routes.auth import router as auth_router
from app.routes.resume import router as resume_router
from app.routes.interview import router as interview_router
from app.routes.dashboard import router as dashboard_router
from app.routes.role import router as role_router
from app.routes.skill_gap import router as skill_gap_router
from app.routes.roadmap import router as roadmap_router
from app.routes.readiness import router as readiness_router
from app.routes.analytics import router as analytics_router
from app.routes.scorecard import router as scorecard_router
from app.routes.resume_rewriter import router as resume_rewriter_router
from app.routes.profile import router as profile_router

from app.routes.history import router as history_router

from app.database import engine
from app.models import Base

app = FastAPI(title="TalentIQ")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)


@app.get("/")
def home():
    return {"message": "TalentIQ Running Successfully"}


@app.get("/test-header")
def test_header(authorization: str = Header(None)):
    return {"authorization": authorization}


app.include_router(auth_router)
app.include_router(resume_router)
app.include_router(interview_router)
app.include_router(dashboard_router)
app.include_router(role_router)
app.include_router(skill_gap_router)
app.include_router(roadmap_router)
app.include_router(readiness_router)
app.include_router(analytics_router)
app.include_router(history_router)
app.include_router(scorecard_router)
app.include_router(resume_rewriter_router)
app.include_router(profile_router)