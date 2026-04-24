import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function Dashboard() {

  // dummy data (until backend ready)
  const data = [
    { name: "Total", value: 10 },
    { name: "Completed", value: 6 },
    { name: "Pending", value: 4 }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>

      {/* KPI Cards */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <div style={{ border: "1px solid gray", padding: "10px" }}>
          <h4>Total Reports</h4>
          <p>10</p>
        </div>

        <div style={{ border: "1px solid gray", padding: "10px" }}>
          <h4>Completed</h4>
          <p>6</p>
        </div>

        <div style={{ border: "1px solid gray", padding: "10px" }}>
          <h4>Pending</h4>
          <p>4</p>
        </div>
      </div>

      {/* Chart */}
      <BarChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" />
      </BarChart>

    </div>
  );
}