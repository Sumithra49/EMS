import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteEmployee,
  fetchEmployees,
  updateEmployee,
} from "../redux/actions/employeeActions";

import "./styles/EmployeeList.css";

const EmployeeList = () => {
  const dispatch = useDispatch();
  const { loading, employees, error } = useSelector((state) => state.employee);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      dispatch(deleteEmployee(id));
    }
  };

  const handleEdit = (employee) => {
    const newName = prompt("Enter new name:", employee.name);
    const newPosition = prompt("Enter new position:", employee.position);
    const newContact = prompt("Enter new contact:", employee.contact);

    if (newName && newPosition && newContact) {
      const updatedData = {
        name: newName,
        position: newPosition,
        contact: newContact,
      };
      dispatch(updateEmployee(employee._id, updatedData));
    }
  };

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (error) {
    return <p className="error">Error: {error}</p>;
  }

  return (
    <div className="employee-list-container">
      <h2 className="employee-heading">Employee List</h2>
      {Array.isArray(employees) && employees.length === 0 ? (
        <p className="no-employees">No employees found.</p>
      ) : (
        <ul className="employee-list">
          {Array.isArray(employees) &&
            employees.map((employee) => (
              <li className="employee-card" key={employee._id}>
                <img
                  src={
                    employee.profilePic
                      ? employee.profilePic
                      : "https://via.placeholder.com/100"
                  }
                  alt={employee.name}
                  className="employee-image"
                />
                <div className="employee-info">
                  <h3>{employee.name}</h3>
                  <p>{employee.position}</p>
                  <p>{employee.contact}</p>
                </div>
                <div className="employee-actions">
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(employee)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(employee._id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;
