import { useState } from "react";
import { createReport } from "../services/api";

export default function CreatePage() {
  const [title, setTitle] = useState("");

  const handleSubmit = async () => {
    try {
      await createReport({ title });
      alert("Created successfully");
    } catch (err) {
      alert("Backend not ready yet");
    }
  };

  return (
    <div>
      <h2>Create Report</h2>

      <input
        style={{ padding: "8px", marginRight: "10px" }}
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        style={{ padding: "8px", backgroundColor: "#1B4F8A", color: "white" }}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}