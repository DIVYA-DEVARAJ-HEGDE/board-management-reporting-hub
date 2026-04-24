import { useState } from "react";
import axios from "axios";

export default function CreatePage() {
  const [title, setTitle] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:8081/api/reports", {
        title: title
      });
      alert("Created successfully");
    } catch (err) {
      console.log(err);
      alert("Backend not ready yet");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create Report</h2>

      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}