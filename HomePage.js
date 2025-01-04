import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "5px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "50px auto",
        padding: "20px",
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <h1>Telecom Inventory Management System</h1>
      <button
        style={buttonStyle}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
        }
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        onClick={() => handleNavigate("/login")}
      >
        Login
      </button>
      <button
        style={buttonStyle}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
        }
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        onClick={() => handleNavigate("/register")}
      >
        Register
      </button>
      <button
        style={buttonStyle}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
        }
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        onClick={() => handleNavigate("/dashboard")}
      >
        Dashboard
      </button>
    </div>
  );
};

export default HomePage;
