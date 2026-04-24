import { useState } from "react";
import ListPage from "./pages/ListPage";
import CreatePage from "./pages/CreatePage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

export default function App() {
  const [page, setPage] = useState("login");
  const isLoggedIn = localStorage.getItem("token");

  if (!isLoggedIn && page !== "login") {
    setPage("login");
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Board Management Reporting Hub
      </h1>

      {isLoggedIn && <Navbar setPage={setPage} />}

      <div style={{ padding: "20px" }}>
        {page === "login" && <LoginPage setPage={setPage} />}
        {page === "dashboard" && isLoggedIn && <Dashboard />}
        {page === "list" && isLoggedIn && <ListPage />}
        {page === "create" && isLoggedIn && <CreatePage />}
      </div>
    </div>
  );
}