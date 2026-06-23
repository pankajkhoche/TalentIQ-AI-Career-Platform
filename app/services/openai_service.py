import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

client = None

if OPENAI_API_KEY:
    from openai import OpenAI
    client = OpenAI(api_key=OPENAI_API_KEY)


def ai_resume_review(resume_text):

    prompt = f"""
    Analyze this resume text and return:
    1. Strengths
    2. Weaknesses
    3. Missing skills
    4. Suggested projects
    5. Final improvement advice

    Resume:
    {resume_text}
    """

    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        )

        return response.choices[0].message.content

    except Exception as e:
        return f"""
AI Resume Review - Demo Mode

Strengths:
- Good Python and backend development foundation.
- Resume shows technical project experience.
- FastAPI, PostgreSQL, JWT, and API development are strong points.

Weaknesses:
- Cloud deployment is not clearly visible.
- Docker/CI-CD experience should be demonstrated more.
- Projects need stronger business problem explanation.

Missing Skills:
- Docker
- AWS / Azure
- CI-CD
- Redis
- System Design
- Unit Testing

Suggested Projects:
- AI Career Intelligence Platform
- Log Monitoring System
- Fraud Detection System
- Cloud Deployment Project

Final Advice:
Improve your resume by adding measurable project impact, deployment links, GitHub links, API documentation, and screenshots.

Note:
OpenAI API quota is currently unavailable, so this fallback demo response is shown.

"""