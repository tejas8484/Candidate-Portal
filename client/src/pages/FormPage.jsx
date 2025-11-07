import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function FormPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    position: "",
    currentPosition: "",
    experience: "",
    resume: null,
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleNext = async (e) => {
    e.preventDefault();

    // Validate fields
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.position ||
      !formData.currentPosition ||
      !formData.experience ||
      !formData.resume
    ) {
      setError("All fields are required.");
      return;
    }

    if (
      formData.resume.type !== "application/pdf" ||
      formData.resume.size > 5 * 1024 * 1024
    ) {
      setError("Resume must be a PDF under 5 MB.");
      return;
    }

    try {
      // Prepare FormData for file upload
      const data = new FormData();
      data.append("firstName", formData.firstName);
      data.append("lastName", formData.lastName);
      data.append("position", formData.position);
      data.append("currentPosition", formData.currentPosition);
      data.append("experience", formData.experience);
      data.append("resume", formData.resume);

      // Send to backend
      const res = await axios.post("http://localhost:5000/api/candidate", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("✅ Candidate saved:", res.data);
      localStorage.setItem("candidateInfo", JSON.stringify(res.data));
      navigate("/video");
    } catch (err) {
      console.error("❌ Upload failed:", err);
      setError("Failed to submit form. Please try again.");
    }
  };

  return (
    <Form className="p-4 shadow rounded bg-light" onSubmit={handleNext}>
      {error && <div className="alert alert-danger">{error}</div>}

      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control name="firstName" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control name="lastName" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Position Applied For</Form.Label>
        <Form.Control name="position" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Current Position</Form.Label>
        <Form.Control name="currentPosition" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Experience (Years)</Form.Label>
        <Form.Control type="number" name="experience" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Upload Resume (PDF ≤ 5MB)</Form.Label>
        <Form.Control type="file" name="resume" accept=".pdf" onChange={handleChange} />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        Next ➡️
      </Button>
    </Form>
  );
}

export default FormPage;
