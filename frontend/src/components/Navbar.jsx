export default function Navbar({ setPage }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px",
      backgroundColor: "#1B4F8A",
      color: "white"
    }}>
      <h2>Reporting Hub</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <button onClick={() => setPage("list")}>List</button>
        <button onClick={() => setPage("create")}>Create</button>
        <button onClick={() => {
          localStorage.removeItem("token");
          setPage("login");
        }}>
          Logout
        </button>
      </div>
    </div>
  );
}