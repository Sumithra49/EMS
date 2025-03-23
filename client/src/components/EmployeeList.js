import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../redux/actions/employeeActions";

import "./styles/EmployeeList.css";

const EmployeeList = () => {
  const dispatch = useDispatch();
  const { loading, employees, error } = useSelector((state) => state.employee);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

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
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;
