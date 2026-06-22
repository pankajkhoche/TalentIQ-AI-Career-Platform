from jose import jwt, JWTError
from passlib.context import CryptContext

SECRET_KEY = "talentiq_secret_key"
ALGORITHM = "HS256"

pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)

def hash_password(password):

    return pwd_context.hash(password)

def verify_password(
    plain_password,
    hashed_password
):

    return pwd_context.verify(
        plain_password,
        hashed_password
    )

def create_access_token(data):

    return jwt.encode(
        data,
        SECRET_KEY,
        algorithm=ALGORITHM
    )

from jose import jwt, JWTError

def verify_token(token):

    try:
        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )

        return payload

    except JWTError:
        return None