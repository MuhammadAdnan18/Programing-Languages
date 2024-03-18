import React, { useState } from "react";

function BusManagement() {
  const [selectedBus, setSelectedBus] = useState(null);
  const [vanNo, setVanNo] = useState("");
  const [vanReg, setVanReg] = useState("");
  const [driverName, setDriverName] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [buses, setBuses] = useState([
    {
      id: 1,
      vanNo: "1",
      vanReg: "KGH 8903",
      driverName: "M.Raza",
      departureTime: "1:40PM",
    },
    {
      id: 2,
      vanNo: "2",
      vanReg: "ABC 1234",
      driverName: "John Doe",
      departureTime: "2:00PM",
    },
    // Add more bus data as needed
  ]);

  // Function to handle bus selection
  const handleBusSelect = (bus) => {
    setSelectedBus(bus);
    setVanNo(bus.vanNo);
    setVanReg(bus.vanReg);
    setDriverName(bus.driverName);
    setDepartureTime(bus.departureTime);
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "vanNo":
        setVanNo(value);
        break;
      case "vanReg":
        setVanReg(value);
        break;
      case "driverName":
        setDriverName(value);
        break;
      case "departureTime":
        setDepartureTime(value);
        break;
      default:
        break;
    }
  };

  // Function to handle updating bus details
  const handleUpdateBus = () => {
    if (!selectedBus) return; // No bus selected

    // Update the selected bus with the new details
    const updatedBus = {
      ...selectedBus,
      vanNo: vanNo,
      vanReg: vanReg,
      driverName: driverName,
      departureTime: departureTime,
    };

    // Find the index of the selected bus in the buses array
    const busIndex = buses.findIndex((bus) => bus.id === selectedBus.id);

    // Create a new array with the updated bus
    const updatedBuses = [...buses];
    updatedBuses[busIndex] = updatedBus;

    // Update the state with the new buses array
    setBuses(updatedBuses);

    // Optionally, you can reset the input fields and selected bus state after updating
    setSelectedBus(null);
    setVanNo("");
    setVanReg("");
    setDriverName("");
    setDepartureTime("");
  };

  // Function to handle deleting a bus
  const handleDeleteBus = (id) => {
    const updatedBuses = buses.filter((bus) => bus.id !== id);
    setBuses(updatedBuses);
    // Reset selectedBus state if the deleted bus was selected
    if (selectedBus && selectedBus.id === id) {
      setSelectedBus(null);
      setVanNo("");
      setVanReg("");
      setDriverName("");
      setDepartureTime("");
    }
  };

  // Function to add a new bus
  const handleAddBus = () => {
    const newBus = {
      id: buses.length + 1,
      vanNo: vanNo,
      vanReg: vanReg,
      driverName: driverName,
      departureTime: departureTime,
    };

    setBuses([...buses, newBus]);
    setVanNo("");
    setVanReg("");
    setDriverName("");
    setDepartureTime("");
  };

  return (
    <div className="vh-100">
      <div className="h-auto d-inline-block w-100 text-center">
        <h1>VAN Details</h1>
      </div>
      <div className="h-auto d-inline-block w-100 d-flex align-items-center justify-content-center">
        {/* Inputs for editing bus information */}
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Van No"
            name="vanNo"
            value={vanNo}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Van Reg"
            name="vanReg"
            value={vanReg}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Driver Name"
            name="driverName"
            value={driverName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Departure Time"
            name="departureTime"
            value={departureTime}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary mr-2" onClick={handleUpdateBus}>
            Update
          </button>
          {selectedBus && (
            <button
              className="btn btn-danger mr-2"
              onClick={() => handleDeleteBus(selectedBus.id)}
            >
              Delete
            </button>
          )}
          <button className="btn btn-success" onClick={handleAddBus}>
            Add
          </button>
        </div>
      </div>
      <div className="h-50 overflow-y-scroll">
        <table className="table table-light table-striped-columns ">
          <thead>
            <tr>
              <th>VAN NO</th>
              <th>VAN REG</th>
              <th>DRIVER NAME</th>
              <th>DEPARTURE TIME</th>
            </tr>
          </thead>
          <tbody>
            {buses.map((bus) => (
              <tr
                key={bus.id}
                onClick={() => handleBusSelect(bus)}
                style={{ cursor: "pointer" }}
              >
                <td>{bus.vanNo}</td>
                <td>{bus.vanReg}</td>
                <td>{bus.driverName}</td>
                <td>{bus.departureTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BusManagement;
