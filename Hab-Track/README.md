# MERN Starter – Full Stack Boilerplate (Beginner Friendly)

This repository is a **ready-to-use MERN stack starter** with a clean separation of **Backend (Node.js + Express + MongoDB)** and **Frontend (React + Vite)**.

It is designed so that:
- You can **reuse it for multiple projects**
- A **beginner can run it without confusion**
- Setup is **step-by-step and predictable**
- Environment variables and secrets are handled correctly

---

## 📦 What This Repo Contains

### Backend
- Node.js + Express server
- MongoDB connection using Mongoose
- Proper async startup (server waits for DB)
- CORS enabled for frontend communication
- Environment-based configuration

### Frontend
- React app using Vite
- Simple API connectivity setup
- Environment-based API URL
- Minimal, clean structure (no styling framework forced)

---

## 🧱 Tech Stack

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- cors

**Frontend**
- React
- Vite
- JavaScript (ES Modules)

---

## 📁 Folder Structure (IMPORTANT)

Mern_Starter/
│
├── Backend/
│   ├── src/
│   │   ├── db/
│   │   │   └── index.js        # MongoDB connection logic
│   │   └── index.js            # Express server entry point
│   ├── .env.example            # Backend environment variables template
│   ├── .gitignore
│   └── package.json
│
├── Hab-Track/                  # Frontend (React + Vite)
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js        # API helper (optional)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env.example            # Frontend environment variables template
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── README.md



---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Ankurrr27/Mern_Starter.git
cd Mern_Starter
