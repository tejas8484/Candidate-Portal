import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import candidateRoutes from "./routes/candidateRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/candidatePortal", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Error:", err));

app.use("/api/candidate", candidateRoutes);

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
