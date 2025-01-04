import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import RegistrationPage from "./components/RegistrationPage";
import LoginPage from "./components/LoginPage";
import AdminPanel from "./components/AdminPanel";
import ManagerPanel from "./components/ManagerPanel";
import StaffPanel from "./components/StaffPanel";

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/manager" element={<ManagerPanel />} />
        <Route path="/staff" element={<StaffPanel />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
