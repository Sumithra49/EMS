// src/redux/actions/authActions.js

import axios from "axios";

// Action Types
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

// LOGIN Action Creator
export const login = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://ems-1-nv8e.onrender.com/auth/login",
      credentials
    );
    const { token, user } = response.data;

    // Store token in local storage
    localStorage.setItem("token", token);

    dispatch({ type: LOGIN_SUCCESS, payload: { token, user } });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response.data.message || "Login failed",
    });
  }
};

// REGISTER Action Creator
export const register = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://ems-1-nv8e.onrender.com/auth/register",
      userData
    );
    dispatch({ type: REGISTER_SUCCESS, payload: response.data });

    // Auto login after registration (optional)
    const { token, user } = response.data;
    localStorage.setItem("token", token);
    dispatch({ type: LOGIN_SUCCESS, payload: { token, user } });
  } catch (error) {
    dispatch({
      type: REGISTER_FAILURE,
      payload: error.response.data.message || "Registration failed",
    });
  }
};

// LOGOUT Action Creator
export const logout = () => {
  localStorage.removeItem("token");
  return { type: LOGOUT };
};
