import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "./pages/FormPage";
import VideoPage from "./pages/VideoPage";
import ReviewPage from "./pages/ReviewPage";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <h2 className="text-center mb-4 text-primary fw-bold">
          Candidate Submission Portal
        </h2>

        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/review" element={<ReviewPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
