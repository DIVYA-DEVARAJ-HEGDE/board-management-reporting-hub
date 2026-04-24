import { useState } from "react";
import ListPage from "./pages/ListPage";
import CreatePage from "./pages/CreatePage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [page, setPage] = useState("login");

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center py-4">
        Board Management Reporting Hub
      </h1>

      <div className="flex justify-center gap-4 mb-4">
        <button onClick={() => setPage("login")}>Login</button>
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <button onClick={() => setPage("list")}>List</button>
        <button onClick={() => setPage("create")}>Create</button>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-5 shadow rounded">
        {page === "login" && <LoginPage setPage={setPage} />}
        {page === "dashboard" && isLoggedIn && <Dashboard />}
        {page === "list" && <ListPage />}
        {page === "create" && <CreatePage />}
      </div>
    </div>
  );
}