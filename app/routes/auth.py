from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models import User

from app.services.auth_service import (
    create_access_token,
    hash_password,
    verify_password
)


from app.services.auth_service import create_access_token

router = APIRouter()

def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


@router.post("/register")
def register(
    user: dict,
    db: Session = Depends(get_db)
):

    new_user = User(

        name=user["name"],

        email=user["email"],

        password=hash_password(
            user["password"]
        )
    )

    db.add(new_user)

    db.commit()

    return {
        "message":
        "User Registered Successfully"
    }


@router.post("/login")
def login(
    user: dict,
    db: Session = Depends(get_db)
):

    existing_user = (
        db.query(User)
        .filter(
            User.email ==
            user["email"]
        )
        .first()
    )

    if not existing_user:

        return {
            "message":
            "User Not Found"
        }

    if not verify_password(
        user["password"],
        existing_user.password
    ):

        return {
            "message":
            "Invalid Password"
        }

    token = create_access_token({

    "id":
    existing_user.id,

    "email":
    existing_user.email
})

    return {

        "message":
        "Login Successful",

        "access_token":
        token
    }


