import { useEffect, useState } from "react";

function ReviewPage() {
  const [data, setData] = useState({});
  const [video, setVideo] = useState("");

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("candidateInfo"));
    setData(info);
    setVideo(localStorage.getItem("recordedVideo"));
  }, []);

  return (
    <div className="p-4 shadow rounded bg-light">
      <h4 className="text-center text-primary mb-4">Review Your Information</h4>

      <ul className="list-group mb-3">
        <li className="list-group-item">First Name: {data.firstName}</li>
        <li className="list-group-item">Last Name: {data.lastName}</li>
        <li className="list-group-item">Position Applied: {data.position}</li>
        <li className="list-group-item">Current Position: {data.currentPosition}</li>
        <li className="list-group-item">Experience: {data.experience} years</li>
      </ul>

      <div className="mb-3">
        <h6>Resume:</h6>
        {data.resume && <p className="text-muted">📄 {data.resume.name}</p>}
      </div>

      <div>
        <h6>Recorded Video:</h6>
        {video ? <video src={video} controls className="w-100 rounded border" /> : <p>No video recorded.</p>}
      </div>
    </div>
  );
}

export default ReviewPage;
