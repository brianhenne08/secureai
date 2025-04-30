# 🚀 SecureAI Platform

SecureAI is an AI-powered physical security platform for designing, deploying, and managing integrated systems (CCTV, Access Control, etc).

## 🧱 Features
- AI-driven floorplan analysis
- Secure project uploads & version tracking
- Install tagging & activity timeline
- Admin dashboard with user role management
- Email notifications for critical events
- Fully containerized with Docker

## 📦 Project Structure

```
secureai/
├── backend/                 # FastAPI server & AI engine
├── frontend/                # Next.js frontend
├── docker-compose.yml       # Dev container orchestration
```

## ✅ Quick Start

### 1. Prerequisites
- Docker & Docker Compose installed
- Git (optional if not using GitHub)

### 2. Running the App
```bash
docker-compose up --build
```

### 3. Access the UI
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:8000/docs](http://localhost:8000/docs)

### 4. Register and Login
- Visit `/register` and create a user
- Promote to admin via `/admin` if needed

## 🔐 Email Setup
Configure SMTP settings in `backend/email_utils.py`:
```python
sender_email = "your_email@gmail.com"
sender_password = "your_app_password"
```

## 🗂 Deploy to GitHub
Use the provided script or manually initialize a repository (see below).
