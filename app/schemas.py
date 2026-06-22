from pydantic import BaseModel

class UserCreate(BaseModel):

    name:str

    email:str

    password:str


class AnswerRequest(BaseModel):

    answer:str