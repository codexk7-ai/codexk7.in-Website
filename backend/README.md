# CODEXK7 Backend API

Production-ready FastAPI backend for CODEXK7 AI Engineering & Product Studio.

## Architecture Stack

- **Language:** Python 3.10+
- **Framework:** FastAPI
- **Validation:** Pydantic v2
- **Settings:** Pydantic-Settings (`.env`)
- **Server:** Uvicorn

---

## Local Development Setup

### 1. Environment & Virtualenv Setup

From the root directory or `backend/` directory:

```bash
# Create virtual environment (if not existing)
python -m venv .venv

# Activate virtual environment
# Windows (PowerShell):
.venv\Scripts\Activate.ps1
# Linux/macOS:
source .venv/bin/activate
```

### 2. Install Dependencies

```bash
pip install -r backend/requirements.txt
```

### 3. Environment Configuration

Copy `.env.example` to `.env`:

```bash
cp backend/.env.example backend/.env
```

---

## Running the Application

Start Uvicorn server in reload mode:

```bash
cd backend
uvicorn app.main:app --reload --port 8000
```

---

## Key API Endpoints

- **Health Check:** `http://localhost:8000/api/v1/health`
- **Swagger OpenAPI Docs:** `http://localhost:8000/api/v1/docs`
- **ReDoc API Docs:** `http://localhost:8000/api/v1/redoc`
- **OpenAPI Schema:** `http://localhost:8000/api/v1/openapi.json`
