import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Welcome, {user?.username}</h2>
      <p>Role: {user?.role}</p>
      <nav>
        {user.role === "Admin" && <Link to="/admin">Admin Panel</Link>}
        {user.role === "Manager" && <Link to="/manager">Manager Panel</Link>}
        {user.role === "Staff" && <Link to="/staff">Staff Panel</Link>}
      </nav>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
