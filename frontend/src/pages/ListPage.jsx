import { useEffect, useState } from "react";
import { getReports } from "../services/api";

export default function ListPage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    getReports()
      .then(res => setData(res.data))
      .catch(() => {});
  }, []);

  // frontend filtering (works even without backend)
  const filteredData = data.filter(item => {
    return (
      item.title?.toLowerCase().includes(search.toLowerCase()) &&
      (status === "" || item.status === status)
    );
  });

  return (
    <div>
      <h2>Reports</h2>

      {/* 🔍 Search + Filter */}
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Search by title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{ padding: "8px" }}
        >
          <option value="">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* 📄 Data */}
      {filteredData.length === 0 ? (
        <p>No data available</p>
      ) : (
        filteredData.map(item => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px"
            }}
          >
            <b>{item.title}</b> <br />
            <small>Status: {item.status || "N/A"}</small>
          </div>
        ))
      )}
    </div>
  );
}