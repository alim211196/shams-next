import axios from "axios";

// API base URL
const API_BASE_URL = process.env.NEXT_PUBLIC_TRAINER_API_URL;

// Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Helper function to handle API requests
const handleRequest = async (apiCall) => {
  try {
    const response = await apiCall();
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Something went wrong",
      status: error.response?.status || 500,
      id: error.response?.data?.id || null,
    };
  }
};

// Register Trainer
export const registerTrainer = async (userData) => {
  return await handleRequest(() => api.post("/auth/register", userData));
};

// Verify OTP
export const verifyTrainerOtp = async (otpData) => {
  return await handleRequest(() => api.post("/auth/verify", otpData));
};

// Resend OTP
export const resendOtp = async (data) => {
  return await handleRequest(() => api.post("/auth/resend-otp", data));
};

// Login Trainer
export const loginTrainer = async (credentials) => {
  return await handleRequest(() => api.post("/auth/login", credentials));
};

// Forgot Password
export const forgotPassword = async (data) => {
  return await handleRequest(() => api.post("/auth/forgot-password", data));
};

// Verify Reset OTP
export const verifyResetOtp = async (data) => {
  return await handleRequest(() => api.post("/auth/verify-reset-otp", data));
};

// Resend OTP for forgot password
export const resendForgotPassOtp = async (data) => {
  return await handleRequest(() => api.post("/auth/send-reset-pass-otp", data));
};

// Reset Password
export const resetPassword = async (data) => {
  return await handleRequest(() => api.post("/auth/reset-password", data));
};

//take teaching details
export const takeTrainerDetails = async (id, data) => {
  return await handleRequest(() =>
    api.patch(`/auth/submit-details/${id}`, data)
  );
};

// Get Trainer Categories
export const getCategories = async () => {
  return await handleRequest(() =>
    axios.get(`${API_BASE_URL}/auth/categories`)
  );
};

//get trainer status
export const getTrainerStatus = async (id) => {
  return await handleRequest(() =>
    axios.get(`${API_BASE_URL}/auth/status/${id}`)
  );
};

// Get Current User (Protected Route)
// export const getProfile = async (token) => {
//   const response = await api.get("auth/profile", {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return response.data;
// };

import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/apiClient";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/login", credentials);
      const { user, token } = response.data;

      localStorage.setItem("token", token);
      return { user, token };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);
