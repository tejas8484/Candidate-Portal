import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    position: String,
    currentPosition: String,
    experience: Number,
    resume: String, // store filename only
  },
  { timestamps: true }
);

export default mongoose.model("Candidate", candidateSchema);
