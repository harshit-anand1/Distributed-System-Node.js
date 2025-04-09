# Distributed-System-Node.js

# NodeQ - Minimal Job Queue System in Node.js

🚀 A lightweight job queue system with retry logic, logging, and (coming soon) dashboard support.

## Features
- Enqueue jobs via API
- Background job processor
- Retry on failure with exponential backoff
- Logs and optional UI dashboard (WIP)

Visit `http://localhost:3000/` to see the server running.

---

## 🎯 Vision for NodeQ

NodeQ is designed to simulate the kind of internal infrastructure tools used in large-scale systems. It offers backend developers and systems engineers a way to showcase practical skills in async programming, distributed task management, and backend architecture.

### 🧱 Core Modules (Final System Goals):
- **API Server**: REST endpoints to enqueue jobs and check status.
- **Job Store**: Start with in-memory → move to MongoDB or Redis.
- **Worker Engine**: Polls queue and processes jobs in the background.
- **Retry Logic**: Handles job failure with exponential backoff.
- **Logging System**: Tracks job status transitions and errors.
- **Multiple Job Types**: e.g. email, image resize, webhook handler.
- **Dashboard (React)**: Visual UI showing job stats and status.
- **Dockerized Setup**: Containerize the system for easy deployment.

### 📊 Example Use Cases:
- Email queue system for notifications
- Background image processing (resize, watermark)
- Periodic clean-up jobs
- Webhook/event handling system


---
