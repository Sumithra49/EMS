import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import EmployeePage from "./pages/EmployeePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/employees" element={<EmployeePage />} />
        <Route path="employeeslist" element={<EmployeePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
