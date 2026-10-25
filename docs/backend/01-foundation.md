# Phase 01 — Backend Foundation

## Objective

Establish a modular, production-ready Python FastAPI backend foundation under `backend/` separate from the Next.js frontend. Configure settings management, structured logging, CORS protection, health check endpoint (`GET /api/v1/health`), environment variable handling, and local development documentation.

## Files Created

- `backend/requirements.txt`
- `backend/.env.example`
- `backend/.env`
- `backend/app/__init__.py`
- `backend/app/core/__init__.py`
- `backend/app/core/config.py`
- `backend/app/core/logging.py`
- `backend/app/core/security.py`
- `backend/app/api/__init__.py`
- `backend/app/api/routes/__init__.py`
- `backend/app/api/routes/health.py`
- `backend/app/main.py`
- `backend/README.md`
- `docs/backend/01-foundation.md`

## Files Modified

None (Frontend code remains untouched in `frontend/`).

## Architecture Decisions

- **Framework**: FastAPI with Pydantic v2 and `pydantic-settings` for type-safe environment configuration.
- **Directory Isolation**: Dedicated `backend/` application root preventing mixing of Python backend and Next.js frontend codebases.
- **CORS Protection**: Origin validation enforcing `CORS_ORIGINS` setting (`http://localhost:3000`, `https://codexk7.in`).
- **Structured Logging**: Centralized logger in `app/core/logging.py` formatting console logs without exposing sensitive parameters or passwords.
- **Unified Error Protocol**: Standardized JSON error response schema (`{ "success": false, "error": { "code": "...", "message": "..." } }`).

## API Endpoints

- `GET /api/v1/health`
  - Response:
    ```json
    {
      "status": "ok",
      "service": "codexk7-backend"
    }
    ```
- `GET /api/v1/docs` (Swagger UI, development mode only)
- `GET /api/v1/redoc` (ReDoc UI, development mode only)
- `GET /api/v1/openapi.json` (OpenAPI schema specification)

## Database Changes

None in Phase 01 (PostgreSQL database models & Alembic migrations scheduled for Phase 02).

## Dependencies

Added to `backend/requirements.txt`:
- `fastapi>=0.110.0`
- `uvicorn[standard]>=0.28.0`
- `pydantic>=2.6.0`
- `pydantic-settings>=2.2.0`
- `python-dotenv>=1.0.0`
- `httpx>=0.27.0`

## Tests

- Execution of FastAPI server instance and HTTP GET request to `/api/v1/health` verifying 200 OK status.
- Verification of OpenAPI documentation generation.

## Security Considerations

- Environment variable secrets separation (`.env.example` vs `.env`).
- Sanitization helper (`mask_sensitive_data`) in `app/core/security.py`.
- Non-wildcard CORS default settings.

## Problems Found

- None.

## Problems Fixed

- N/A.

## Remaining Work

- Phase 02: PostgreSQL database setup with SQLAlchemy 2.x async, Alembic migrations, and `ContactSubmission` model.
- Phase 03: Contact API (`POST /api/v1/contact`).
- Phase 04: Test suite setup with pytest.
- Phase 05: Frontend contact form integration (`NEXT_PUBLIC_API_URL`).
