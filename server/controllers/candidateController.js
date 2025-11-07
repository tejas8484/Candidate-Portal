import Candidate from "../models/candidateModel.js";

export const createCandidate = async (req, res) => {
  try {
    console.log("📥 Received data:", req.body);
    console.log("📎 File info:", req.file);

    const newCandidate = new Candidate({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      position: req.body.position,
      currentPosition: req.body.currentPosition,
      experience: req.body.experience,
      resume: req.file ? req.file.filename : null,
    });

    await newCandidate.save();
    console.log("✅ Candidate saved successfully");
    res.status(201).json(newCandidate);
  } catch (error) {
    console.error("❌ Error saving candidate:", error);
    res.status(500).json({ message: "Error saving candidate" });
  }
};
