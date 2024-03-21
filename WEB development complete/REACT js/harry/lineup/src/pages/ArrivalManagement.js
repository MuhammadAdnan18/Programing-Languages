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
  select: {
    padding: "12px",
    margin: "8px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "100%",
    boxSizing: "border-box",
    appearance: "none",
    fontSize: "16px",
    backgroundColor: "#f8f8f8",
  },
  column: {
    width: "50%",
    float: "left",
  },
};

const ArrivalManagement = () => {
  // State variables for form inputs
  const [option, setOption] = useState("bus");
  const [busId, setBusId] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [parentName, setParentName] = useState("");

  // State variable for list of arrivals/departures
  const [arrivalList, setArrivalList] = useState([]);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "busId") setBusId(value);
    else if (name === "arrivalTime") setArrivalTime(value);
    else if (name === "departureTime") setDepartureTime(value);
    else if (name === "parentName") setParentName(value);
  };

  // Function to handle option change
  const handleOptionChange = (e) => {
    setOption(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate input fields
    if (
      (option === "bus" && (!busId || !arrivalTime || !departureTime)) ||
      (option === "parent" && (!parentName || !arrivalTime || !departureTime))
    ) {
      // Handle validation error
      return;
    }
    // Add new arrival/departure time entry to the list
    setArrivalList([
      ...arrivalList,
      {
        id: arrivalList.length + 1,
        type: option,
        busId,
        arrivalTime,
        departureTime,
        parentName,
      },
    ]);
    // Clear input fields after submission
    setBusId("");
    setArrivalTime("");
    setDepartureTime("");
    setParentName("");
  };

  // Filter bus arrivals
  const busArrivals = arrivalList.filter((arrival) => arrival.type === "bus");
  // Filter parent arrivals
  const parentArrivals = arrivalList.filter(
    (arrival) => arrival.type === "parent"
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <select
            style={mystyle.select}
            value={option}
            onChange={handleOptionChange}
          >
            <option value="bus">Bus</option>
            <option value="parent">Parent</option>
          </select>
        </div>
        <div>
          <label>{option === "bus" ? "Bus ID:" : "Parent Name:"}</label>
          <input
            type="text"
            name={option === "bus" ? "busId" : "parentName"}
            value={option === "bus" ? busId : parentName}
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
      <div style={mystyle.column}>
        <h3>Bus Arrivals</h3>
        <ul>
          {busArrivals.map((arrival) => (
            <li key={arrival.id}>
              Bus ID: {arrival.busId}, Arrival Time: {arrival.arrivalTime},
              Departure Time: {arrival.departureTime}
            </li>
          ))}
        </ul>
      </div>
      <div style={mystyle.column}>
        <h3>Parent Arrivals</h3>
        <ul>
          {parentArrivals.map((arrival) => (
            <li key={arrival.id}>
              Parent Name: {arrival.parentName}, Arrival Time:{" "}
              {arrival.arrivalTime}, Departure Time: {arrival.departureTime}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArrivalManagement;
