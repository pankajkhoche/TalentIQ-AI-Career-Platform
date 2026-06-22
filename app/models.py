from datetime import datetime

from sqlalchemy import Column, Integer, String, DateTime

from app.database import Base


class User(Base):

    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String)

    email = Column(String, unique=True)

    password = Column(String)


class ResumeResult(Base):

    __tablename__ = "resume_results"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(Integer)

    skills = Column(String)

    ats_score = Column(Integer)


class InterviewResult(Base):

    __tablename__ = "interview_results"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(Integer)

    score = Column(Integer)

    feedback = Column(String)


class SkillGapResult(Base):

    __tablename__ = "skill_gap_results"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(Integer)

    missing_skills = Column(String)


class RoadmapResult(Base):

    __tablename__ = "roadmap_results"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(Integer)

    roadmap = Column(String)


class ReadinessResult(Base):

    __tablename__ = "readiness_results"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(Integer)

    readiness_score = Column(Integer)


class ATSHistory(Base):

    __tablename__ = "ats_history"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(Integer)

    ats_score = Column(Integer)

    created_at = Column(DateTime, default=datetime.utcnow)


class ReadinessHistory(Base):

    __tablename__ = "readiness_history"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(Integer)

    readiness_score = Column(Integer)

    created_at = Column(DateTime, default=datetime.utcnow)