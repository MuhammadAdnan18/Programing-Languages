import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Sidebar from "./components/common/Sidebar";
import AdminDashboard from "./pages/AdminDashboard";
import StudentManagement from "./pages/StudentManagement";
import BusManagement from "./pages/BusManagement";
import ArrivalManagement from "./pages/ArrivalManagement";
import { useState } from "react";
import "./App.css";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Router>
      <div className="app">
        <Header toggleSidebar={toggleSidebar} />
        <div className="main-content">
          <Sidebar show={showSidebar} />
          <Routes>
            <Route
              exact
              path="/admin/dashboard"
              element={<AdminDashboard />}
            ></Route>
            <Route
              exact
              path="/admin/students"
              element={<StudentManagement />}
            />
            <Route exact path="/admin/buses" element={<BusManagement />} />
            <Route
              exact
              path="/admin/arrivals"
              element={<ArrivalManagement />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
