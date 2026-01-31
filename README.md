📝 Task Management System

A full-stack Task Management Web Application that allows users to register, log in, and manage their personal tasks with filtering and pagination.

🚀 Live Features

🔐 User Authentication (Register, Login, Logout)

📝 Create Tasks

📋 View Tasks

✏ Update Tasks

❌ Delete Tasks

🎯 Task Status Filter

📄 Pagination

🛡 Protected Routes

🎨 Responsive Dashboard UI

🛠 Tech Stack
Frontend

React (Vite)

Axios

React Router

Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

JWT Authentication

bcryptjs

📂 Project Structure
root/
 ├── backend/
 └── frontend/

⚙ Backend Setup
cd backend
npm install
npm run dev

Create .env inside backend:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

🎨 Frontend Setup
cd frontend
npm install
npm run dev


🔗 API Endpoints
Auth
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user
POST	/api/auth/logout	Logout user
Tasks
Method	Endpoint	Description
POST	/api/tasks	Create task
GET	/api/tasks	Get tasks (pagination, filter)
PUT	/api/tasks/:id	Update task
DELETE	/api/tasks/:id	Delete task
📊 Pagination Example
GET /api/tasks?page=2&limit=5

🔎 Filter Example
GET /api/tasks?status=completed

🔐 Authentication

All task routes require a JWT token in the header:

Authorization: Bearer <token>

🧠 What This Project Demonstrates

Full-stack development

REST API design

Authentication & Authorization

Database relationships

Pagination & Filtering

Clean UI architecture

👨‍💻 Author

Rohit Pathak
