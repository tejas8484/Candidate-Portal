import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function VideoPage() {
  const [recording, setRecording] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  return (
    <Container className="p-4 text-center">
      <h2 className="mb-4">🎥 Record Your Introduction</h2>
      <video ref={videoRef} className="border rounded w-75" autoPlay muted />
      <div className="mt-4">
        <Button
          variant={recording ? "danger" : "primary"}
          onClick={() => setRecording(!recording)}
          className="me-3"
        >
          {recording ? "Stop Recording" : "Start Recording"}
        </Button>
        <Button
          variant="success"
          onClick={() => navigate("/review")}
          disabled={recording}
        >
          Submit
        </Button>
      </div>
    </Container>
  );
}

export default VideoPage;
