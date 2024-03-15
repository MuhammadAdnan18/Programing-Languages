import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ show }) => {
  return (
    <aside className={`sidebar ${show ? "show" : "hide"}`}>
      <div className="list-group">
        <Link
          style={mystyle}
          to="/admin/dashboard"
          className="list-group-item list-group-item-action"
        >
          Dashboard
        </Link>
        <Link
          style={mystyle}
          to="/admin/students"
          className="list-group-item list-group-item-action"
        >
          Students
        </Link>
        <Link
          style={mystyle}
          to="/admin/buses"
          className="list-group-item list-group-item-action"
        >
          Buses
        </Link>
        <Link
          style={mystyle}
          to="/admin/arrivals"
          className="list-group-item list-group-item-action"
        >
          Arrivals
        </Link>
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
