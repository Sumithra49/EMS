import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee, updateEmployee } from "../redux/actions/employeeActions";
import "./styles/EmployeeForm.css"; // Import CSS

const EmployeeForm = ({ employee, onSave }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: employee ? employee.name : "",
    position: employee ? employee.position : "",
    contact: employee ? employee.contact : "",
    profilePic: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("position", formData.position);
    data.append("contact", formData.contact);
    if (formData.profilePic) {
      data.append("profilePic", formData.profilePic);
    }

    try {
      if (employee) {
        // Update existing employee
        await dispatch(updateEmployee(employee.id, data));
      } else {
        // Add new employee
        await dispatch(addEmployee(data));
      }

      // Optional: Reset form after save
      setFormData({
        name: "",
        position: "",
        contact: "",
        profilePic: null,
      });

      // Optional callback
      if (onSave) onSave();
    } catch (error) {
      console.error("Error saving employee data", error);
    }
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <h2>{employee ? "Edit Employee" : "Add Employee"}</h2>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="position"
        value={formData.position}
        onChange={handleChange}
        placeholder="Position"
        required
      />
      <input
        type="text"
        name="contact"
        value={formData.contact}
        onChange={handleChange}
        placeholder="Contact"
        required
      />
      <input type="file" name="profilePic" onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
};

export default EmployeeForm;
