import asyncio
import sys
from pathlib import Path

# Ensure backend root is in sys.path
sys.path.insert(0, str(Path(__file__).parent.parent))

from httpx import AsyncClient, ASGITransport
from app.main import app


async def main():
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as client:
        # Test health endpoint
        res = await client.get("/api/v1/health")
        print("HEALTH STATUS CODE:", res.status_code)
        print("HEALTH RESPONSE PAYLOAD:", res.json())
        assert res.status_code == 200
        assert res.json() == {"status": "ok", "service": "codexk7-backend"}

        # Test OpenAPI spec endpoint
        docs_res = await client.get("/api/v1/openapi.json")
        print("OPENAPI STATUS CODE:", docs_res.status_code)
        assert docs_res.status_code == 200

    print("ALL HEALTH & OPENAPI CHECKS PASSED SUCCESSFULLY!")


if __name__ == "__main__":
    asyncio.run(main())
