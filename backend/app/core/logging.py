import logging
import sys
from app.core.config import settings


def setup_logging() -> logging.Logger:
    log_level = logging.DEBUG if settings.ENVIRONMENT == "development" else logging.INFO

    formatter = logging.Formatter(
        "[%(asctime)s] [%(process)d] [%(levelname)s] [%(name)s]: %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
    )

    handler = logging.StreamHandler(sys.stdout)
    handler.setFormatter(formatter)

    logger = logging.getLogger("codexk7")
    logger.setLevel(log_level)
    
    # Avoid duplicated handlers if called multiple times
    if not logger.handlers:
        logger.addHandler(handler)

    # Configure uvicorn loggers
    logging.getLogger("uvicorn.access").handlers = [handler]
    logging.getLogger("uvicorn.error").handlers = [handler]

    return logger


logger = setup_logging()
