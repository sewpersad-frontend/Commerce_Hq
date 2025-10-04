📖 About this project

This project is a full-stack web application built with a modern development stack:
Frontend: React + Vite + TypeScript + Tailwind CSS
Backend: Node.js + Express + MongoDB (Atlas)
Authentication: Secure user registration & login with hashed passwords (bcrypt) and JWT tokens
Security: Helmet, CORS, rate limiting, environment variables (.env)
Proxy setup: API requests (/api/...) are automatically proxied from the frontend (port 8080) to the backend (port 4000)

🔎 Features
🔐 User registration and login system
✅ Passwords stored securely using bcrypt hashing
🔑 JWT-based authentication for protected routes
🌍 MongoDB Atlas database connection with environment-based configuration
⚡ Fast development experience using Vite and hot-reload
🛡️ API security with Helmet, CORS and rate limiting

🚀 How it works

Start the backend with:
npm run server:dev

Start the frontend with:
npm run dev

Or run both together with:
npm run fullstack

Visit http://localhost:8080
for the frontend.

## 📄 License
This project is private and intended for learning and development purposes.



API available at http://localhost:4000/api
.
