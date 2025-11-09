from fastapi import FastAPI, status
from pydantic import BaseModel
from typing import Optional
import wikipediaapi

app = FastAPI()
wiki_wiki = wikipediaapi.Wikipedia(user_agent='MyProjectName (merlin@example.com)', language='en')

class QueryRequest(BaseModel):
    query: str


class QueryResponse(BaseModel):
    page_exists: bool
    full_text: str
    summary: str

@app.post("/query/")
async def query_endpoint(request: QueryRequest):
    # Process the query here
    query = request.query
    page_py = wiki_wiki.page(query)
    if not page_py.exists():
        status_code = status.HTTP_404_NOT_FOUND
    
    return QueryResponse(
        page_exists=page_py.exists(),
        full_text=page_py.text,
        summary=page_py.summary
    )
