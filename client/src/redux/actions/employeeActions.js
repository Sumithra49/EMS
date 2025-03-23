import axios from "axios";

// Action Types
export const FETCH_EMPLOYEES_REQUEST = "FETCH_EMPLOYEES_REQUEST";
export const FETCH_EMPLOYEES_SUCCESS = "FETCH_EMPLOYEES_SUCCESS";
export const FETCH_EMPLOYEES_FAILURE = "FETCH_EMPLOYEES_FAILURE";

export const ADD_EMPLOYEE_SUCCESS = "ADD_EMPLOYEE_SUCCESS";
export const ADD_EMPLOYEE_FAILURE = "ADD_EMPLOYEE_FAILURE";

export const UPDATE_EMPLOYEE_SUCCESS = "UPDATE_EMPLOYEE_SUCCESS";
export const UPDATE_EMPLOYEE_FAILURE = "UPDATE_EMPLOYEE_FAILURE";

export const DELETE_EMPLOYEE_SUCCESS = "DELETE_EMPLOYEE_SUCCESS";
export const DELETE_EMPLOYEE_FAILURE = "DELETE_EMPLOYEE_FAILURE";

// Fetch Employees
export const fetchEmployees = () => async (dispatch) => {
  dispatch({ type: FETCH_EMPLOYEES_REQUEST });
  const token = localStorage.getItem("token");
  try {
    if (!token) {
      dispatch({ type: FETCH_EMPLOYEES_FAILURE, payload: "No token found" });
      return;
    }
    const response = await axios.get(
      "https://ems-1-nv8e.onrender.com/employees/",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("Fetched Data:", response.data);

    dispatch({
      type: FETCH_EMPLOYEES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_EMPLOYEES_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Add Employee
export const addEmployee = (employeeData) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      "https://ems-1-nv8e.onrender.com/employees/",
      employeeData,
      config
    );
    dispatch({ type: ADD_EMPLOYEE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ADD_EMPLOYEE_FAILURE, payload: error.message });
  }
};

// Update Employee
export const updateEmployee = (id, updatedData) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.put(
      `https://ems-1-nv8e.onrender.com/employees/${id}`,
      updatedData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    dispatch({ type: UPDATE_EMPLOYEE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: UPDATE_EMPLOYEE_FAILURE, payload: error.message });
  }
};

// Delete Employee
export const deleteEmployee = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    await axios.delete(`https://ems-1-nv8e.onrender.com/employees/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: DELETE_EMPLOYEE_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: DELETE_EMPLOYEE_FAILURE, payload: error.message });
  }
};
