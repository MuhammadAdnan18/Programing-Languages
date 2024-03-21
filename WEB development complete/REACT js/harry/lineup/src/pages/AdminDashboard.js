import React from "react";

const mystyle = {
  container: {
    fontFamily: "Roboto, sans-serif",
    display: "flex",
    flexDirection: "column",
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px", // Added border-radius for a softer look
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
  },
  summaryCard: {
    flex: 1,
    margin: "10px",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #ddd", // Added border for separation
  },
  summaryTitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  summaryValue: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
  },
  activityFeed: {
    margin: "10px 0",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  activityItem: {
    marginBottom: "5px",
    color: "#333",
  },
  quickLinks: {
    margin: "10px 0",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  quickLink: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    textDecoration: "none",
    color: "#333",
    padding: "10px", // Added padding for better spacing
    borderLeft: "4px solid #f5f5f5", // Decorative left border
  },
  /* Removed quickLinkIcon styles as they are not used */
};

const AdminDashboard = () => {
  // Mock data (replace with your actual data)
  const summaryData = {
    totalStudents: 100,
    studentsPickedUp: 80,
    totalBuses: 20,
    busesPresent: 18,
    totalArrivals: 50,
  };

  const recentActivity = [
    { type: "Student Picked Up", timestamp: "2024-03-20 10:00:00" },
    { type: "Bus Arrived", timestamp: "2024-03-20 09:30:00" },
    // ... add more activity items
  ];

  const quickLinks = [
    { title: "Manage Students", link: "/manage-students" }, // Removed icon reference
    { title: "View Arrivals", link: "/view-arrivals" }, // Removed icon reference
    // ... add more links
  ];

  return (
    <div style={mystyle.container}>
      {/* Summary Cards */}
      <div style={{ display: "flex" }}>
        <div style={mystyle.summaryCard}>
          <h3>Total Students</h3>
          <p style={mystyle.summaryValue}>{summaryData.totalStudents}</p>
          <p>Students Picked Up: {summaryData.studentsPickedUp}</p>
        </div>
        <div style={mystyle.summaryCard}>
          <h3>Total Buses</h3>
          <p style={mystyle.summaryValue}>{summaryData.totalBuses}</p>
          <p>Buses Present: {summaryData.busesPresent}</p>
        </div>
        <div style={mystyle.summaryCard}>
          <h3>Total Arrivals</h3>
          <p style={mystyle.summaryValue}>{summaryData.totalArrivals}</p>
        </div>
      </div>

      {/* Recent Activity Feed */}
      <div style={mystyle.activityFeed}>
        <h3>Recent Activity Feed</h3>
        {recentActivity.map((activity, index) => (
          <div key={index} style={mystyle.activityItem}>
            <p>
              <strong>{activity.type}</strong> - {activity.timestamp}
            </p>
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <div style={mystyle.quickLinks}>
        <h3>Quick Links</h3>
        {quickLinks.map((link, index) => (
          <a key={index} href={link.link} style={mystyle.quickLink}>
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
