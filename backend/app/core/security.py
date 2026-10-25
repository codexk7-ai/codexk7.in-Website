"""
Security utilities and helper functions for CODEXK7 Backend.
"""

def mask_sensitive_data(data: dict) -> dict:
    """
    Sanitize dictionary payloads before logging to prevent leaking sensitive fields.
    """
    sensitive_keys = {"password", "token", "secret", "api_key", "authorization", "credit_card"}
    sanitized = {}
    for key, value in data.items():
        if any(s in key.lower() for s in sensitive_keys):
            sanitized[key] = "********"
        else:
            sanitized[key] = value
    return sanitized
