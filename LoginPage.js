import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      login(username, password);

      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser.role === "Admin") {
        navigate("/admin");
      } else if (storedUser.role === "Manager") {
        navigate("/manager");
      } else if (storedUser.role === "Staff") {
        navigate("/staff");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </form>
  );
};

export default LoginPage;
