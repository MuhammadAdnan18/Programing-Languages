import React, { useState } from "react";

// Define modern-looking styles
const mystyle = {
  input: {
    marginBottom: "10px",
    padding: "8px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "100%",
    boxSizing: "border-box",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "12px 20px",
    margin: "8px 0",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    width: "100%",
    fontSize: "16px",
  },
};

const ArrivalManagement = () => {
  // State variables for form inputs
  const [busId, setBusId] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [departureTime, setDepartureTime] = useState("");

  // State variable for list of arrivals/departures
  const [arrivalList, setArrivalList] = useState([]);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "busId") setBusId(value);
    else if (name === "arrivalTime") setArrivalTime(value);
    else if (name === "departureTime") setDepartureTime(value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate input fields
    if (!busId || !arrivalTime || !departureTime) {
      // Handle validation error
      return;
    }
    // Add new arrival/departure time entry to the list
    setArrivalList([
      ...arrivalList,
      {
        id: arrivalList.length + 1,
        busId,
        arrivalTime,
        departureTime,
      },
    ]);
    // Clear input fields after submission
    setBusId("");
    setArrivalTime("");
    setDepartureTime("");
  };

  return (
    <div>
      <h2>Arrival Management</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Bus ID:</label>
          <input
            type="text"
            name="busId"
            value={busId}
            onChange={handleInputChange}
            style={mystyle.input}
          />
        </div>
        <div>
          <label>Arrival Time:</label>
          <input
            type="text"
            name="arrivalTime"
            value={arrivalTime}
            onChange={handleInputChange}
            style={mystyle.input}
          />
        </div>
        <div>
          <label>Departure Time:</label>
          <input
            type="text"
            name="departureTime"
            value={departureTime}
            onChange={handleInputChange}
            style={mystyle.input}
          />
        </div>
        <button type="submit" style={mystyle.button}>
          Add Arrival/Departure Time
        </button>
      </form>

      {/* Display existing arrival/departure time entries */}
      <div>
        <h3>Existing Arrival/Departure Times</h3>
        <ul>
          {arrivalList.map((arrival) => (
            <li key={arrival.id}>
              Bus ID: {arrival.busId}, Arrival Time: {arrival.arrivalTime},{" "}
              Departure Time: {arrival.departureTime}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArrivalManagement;
