# CODEXK7 Backend Handoff Specification

This document provides explicit details for the future backend engineering team to integrate APIs, databases, and AI services with the completed CODEXK7 frontend.

---

## 1. Contact Form API

### Endpoint Specification

- **HTTP Method:** `POST`
- **Route:** `/api/contact`
- **Authentication Required:** No (Public endpoint with rate-limiting recommended)

### Request Payload Schema

```json
{
  "name": "Jane Doe",
  "email": "jane@company.com",
  "company": "Acme Corp",
  "projectType": "Agentic AI",
  "budget": "$15,000 - $50,000",
  "message": "We need an autonomous multi-agent workflow for invoice parsing and vector search."
}
```

### Expected Response

- **Status Code:** `200 OK`
```json
{
  "success": true,
  "message": "Inquiry received successfully.",
  "inquiryId": "inq_987654321"
}
```

### Validation & Error Handling

- **Status Code:** `400 Bad Request`
```json
{
  "success": false,
  "error": "Invalid email address format."
}
```

---

## 2. Future Backend Integration Points

| Feature | Frontend Location | Expected API Route | Request Schema | Response Schema | Auth Required? | Database Required? | Current Mock Implementation |
|---|---|---|---|---|---|---|---|
| Contact Form Submission | `components/Contact.tsx` | `POST /api/contact` | `{ name, email, company, projectType, budget, message }` | `{ success: true, inquiryId: string }` | No | Yes (PostgreSQL / Supabase) | Local React state timeout simulation |
| Live Agent Playground | `components/AgentDemo.tsx` | `POST /api/agent/demo` | `{ prompt: string, mode: string }` | `{ steps: string[], result: string, durationMs: number }` | No (Rate-limited) | No | Static step array interval loop |
| Product Access Request | `components/ProductShowcase.tsx` | `POST /api/products/access` | `{ email: string, productId: string }` | `{ success: true }` | No | Yes | Anchor redirect to `#contact` |

---

## 3. Recommended Backend Architecture

- **Runtime:** Python (FastAPI / LangGraph) or Next.js API Routes (Node.js).
- **Database:** PostgreSQL (with Row Level Security & pgvector).
- **Email Service:** Resend / SendGrid API integration for contact notifications.
- **AI Model Router:** OpenAI / Anthropic / Groq API keys managed exclusively via server-side environment variables (`.env`).
