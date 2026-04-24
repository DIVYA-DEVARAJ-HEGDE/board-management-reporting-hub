import { useEffect, useState } from "react";
import axios from "axios";

export default function ListPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/api/reports")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Reports</h2>

      {data.length === 0 ? (
        <p>No data available</p>
      ) : (
        data.map(item => (
          <div key={item.id}>
            {item.title}
          </div>
        ))
      )}
    </div>
  );
}