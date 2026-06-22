def rewrite_resume(resume_text, job_description):

    return f"""
=== TALENTIQ AI RESUME REWRITE ===

Target Job:

{job_description[:500]}

------------------------------------

Optimized Resume Summary

Experienced Software Developer with strong expertise in
Python, FastAPI, PostgreSQL, REST APIs, JWT Authentication,
Cloud Technologies, Docker, and scalable backend systems.

Key Improvements:
- Added ATS keywords
- Improved role alignment
- Enhanced project descriptions
- Optimized recruiter readability

------------------------------------

Original Resume Skills

{resume_text[:1000]}
"""