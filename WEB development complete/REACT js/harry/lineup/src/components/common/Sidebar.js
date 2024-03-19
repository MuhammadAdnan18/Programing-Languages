import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext"; // Assuming the AuthContext is defined in this file

const Sidebar = ({ show, onPageChange }) => {
  const { user } = useContext(AuthContext);

  const handleItemClick = (page) => {
    onPageChange(page);
  };

  return (
    <aside className={`sidebar ${show ? "show" : "hide"}`}>
      <div className="list-group">
        <div onClick={() => handleItemClick("Admin Panel")}>
          <Link
            style={mystyle}
            to="/admin/dashboard"
            className="list-group-item list-group-item-action"
          >
            Dashboard
          </Link>
        </div>
        {user.role === "Admin" && (
          <>
            <div onClick={() => handleItemClick("Student Management")}>
              <Link
                style={mystyle}
                to="/admin/students"
                className="list-group-item list-group-item-action"
              >
                Students
              </Link>
            </div>
            <div onClick={() => handleItemClick("Bus Management")}>
              <Link
                style={mystyle}
                to="/admin/buses"
                className="list-group-item list-group-item-action"
              >
                Buses
              </Link>
            </div>
          </>
        )}
        <div onClick={() => handleItemClick("Arival Management")}>
          <Link
            style={mystyle}
            to="/admin/arrivals"
            className="list-group-item list-group-item-action"
          >
            Arrivals
          </Link>
        </div>
        {/* Add additional sidebar links here */}
      </div>
    </aside>
  );
};

const mystyle = {
  color: "white",
  backgroundColor: "#1B1E25",
  fontFamily: "Arial",
  border: "0.5px solid gray",
};
export default Sidebar;
