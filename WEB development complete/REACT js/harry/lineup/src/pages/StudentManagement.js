import React, { useState } from "react";

function StudentManagement() {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", grade: "10", class: "A" },
    { id: 2, name: "Jane Smith", grade: "11", class: "B" },
    // Add more student data as needed
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [className, setClassName] = useState("");

  const handleStudentSelect = (student) => {
    setSelectedStudent(student);
    setName(student.name);
    setGrade(student.grade);
    setClassName(student.class);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "grade":
        setGrade(value);
        break;
      case "class":
        setClassName(value);
        break;
      default:
        break;
    }
  };

  const handleUpdateStudent = () => {
    if (!selectedStudent) return;

    const updatedStudent = {
      ...selectedStudent,
      name: name,
      grade: grade,
      class: className,
    };

    const updatedStudents = students.map((student) =>
      student.id === selectedStudent.id ? updatedStudent : student
    );

    setStudents(updatedStudents);

    setSelectedStudent(null);
    setName("");
    setGrade("");
    setClassName("");
  };

  const handleDeleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
    if (selectedStudent && selectedStudent.id === id) {
      setSelectedStudent(null);
      setName("");
      setGrade("");
      setClassName("");
    }
  };

  const handleAddStudent = () => {
    const newStudent = {
      id: students.length + 1,
      name: name,
      grade: grade,
      class: className,
    };

    setStudents([...students, newStudent]);
    setName("");
    setGrade("");
    setClassName("");
  };

  return (
    <div className="vh-100">
      <div className="h-auto d-inline-block w-100 text-center">
        <h1>Student Details</h1>
      </div>
      <div className="h-auto d-inline-block w-100 d-flex align-items-center justify-content-center">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Grade"
            name="grade"
            value={grade}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Class"
            name="class"
            value={className}
            onChange={handleInputChange}
          />
          <button
            className="btn btn-primary mr-2"
            onClick={handleUpdateStudent}
          >
            Update
          </button>
          {selectedStudent && (
            <button
              className="btn btn-danger mr-2"
              onClick={() => handleDeleteStudent(selectedStudent.id)}
            >
              Delete
            </button>
          )}
          <button className="btn btn-success" onClick={handleAddStudent}>
            Add
          </button>
        </div>
      </div>
      <div className="h-50 overflow-y-scroll">
        <table className="table table-light table-striped-columns ">
          <thead>
            <tr>
              <th>Name</th>
              <th>Grade</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr
                key={student.id}
                onClick={() => handleStudentSelect(student)}
                style={{ cursor: "pointer" }}
              >
                <td>{student.name}</td>
                <td>{student.grade}</td>
                <td>{student.class}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentManagement;
