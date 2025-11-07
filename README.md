 <!-- 🧑‍💻 Candidate Portal – MERN Stack App -->

A simple full-stack web application for submitting candidate information and resumes, built using **React**, **Node.js**, **Express**, and **MongoDB**.

---

 <!-- 🚀 Features -->
- Candidate registration form
- Resume upload (PDF)
- Data stored in MongoDB
- File upload using Multer
- Clean Bootstrap UI

---

 <!-- 🧠 Tech Stack -->
**Frontend:** React, React Bootstrap, Axios  
**Backend:** Node.js, Express, Multer  
**Database:** MongoDB Atlas or local MongoDB  

---

 <!-- ⚙️ Installation -->

<!-- 1️⃣ Clone the repository -->
```bash
git clone https://github.com/tejas8484/Candidate-Portal.git
cd candidate-portal


# install dependecies
cd client && npm install
cd ../server && npm install

# setup environment variable
MONGO_URI=your_mongodb_connection_string
PORT=5000

# run backend and frontend
cd server
npm start

cd server
npm start


# folder structure
candidate-portal/
├── client/          # React frontend
├── server/          # Node.js backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── uploads/
│   └── server.js
└── README.md
