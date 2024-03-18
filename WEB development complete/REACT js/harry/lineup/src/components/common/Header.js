import React from "react";
import { Link } from "react-router-dom";

const Header = ({ toggleSidebar, title }) => {
  return (
    <header className="header navbar navbar-dark bg-dark">
      <div className="container">
        <div style={{ position: "absolute", left: 1 }}>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleSidebar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <Link className="navbar-brand mx-auto" to="/admin/dashboard">
          {title}
        </Link>
      </div>
    </header>
  );
};

export default Header;
