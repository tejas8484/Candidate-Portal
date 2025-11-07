import express from "express";
import multer from "multer";
import { createCandidate } from "../controllers/candidateController.js";

const router = express.Router();

// store files in 'uploads/' folder
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("resume"), createCandidate);

export default router;
