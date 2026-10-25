from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class HealthResponse(BaseModel):
    status: str
    service: str


@router.get(
    "/health",
    response_model=HealthResponse,
    summary="Application Health Check",
    description="Returns backend service status and health information.",
)
async def get_health() -> HealthResponse:
    return HealthResponse(status="ok", service="codexk7-backend")
