import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/apiClient";
import Cookies from "js-cookie";
import { handleRequest } from "@/app/utils/requestHelper";

const API_BASE_URL = process.env.NEXT_PUBLIC_STUDENT_API_URL;

// Register Student
export const registerStudent = async (userData) => {
  return await handleRequest(() =>
    axios.post(`${API_BASE_URL}/auth/register`, userData)
  );
};

// Verify OTP
export const verifyStudentOtp = async (otpData) => {
  return await handleRequest(() =>
    axios.post(`${API_BASE_URL}/auth/verify`, otpData)
  );
};

// Resend OTP
export const resendOtp = async (data) => {
  return await handleRequest(() =>
    axios.post(`${API_BASE_URL}/auth/resend-otp`, data)
  );
};

// Login Student
export const loginStudent = async (credentials) => {
  return await handleRequest(() =>
    axios.post(`${API_BASE_URL}/auth/login`, credentials)
  );
};

// Forgot Password
export const forgotPassword = async (data) => {
  return await handleRequest(() =>
    axios.post(`${API_BASE_URL}/auth/forgot-password`, data)
  );
};

// Verify Reset OTP
export const verifyResetOtp = async (data) => {
  return await handleRequest(() =>
    axios.post(`${API_BASE_URL}/auth/verify-reset-otp`, data)
  );
};

// Resend OTP for Forgot Password
export const resendForgotPassOtp = async (data) => {
  return await handleRequest(() =>
    axios.post(`${API_BASE_URL}/auth/send-reset-pass-otp`, data)
  );
};

// Reset Password
export const resetPassword = async (data) => {
  return await handleRequest(() =>
    axios.post(`${API_BASE_URL}/auth/reset-password`, data)
  );
};

// Get Student Questions
export const getQuestions = async () => {
  return await handleRequest(() =>
    axios.get(`${API_BASE_URL}/auth/question/all`)
  );
};

// Submit Student Answer
export const submitAnswerStudent = async (userData) => {
  return await handleRequest(() =>
    axios.post(`${API_BASE_URL}/auth/answer/submit`, userData)
  );
};

// Get Student AuthPage
export const getStudentAuthPages = async (lang) => {
  return await handleRequest(() =>
    axios.get(
      `${API_BASE_URL}/auth/pages?page_keys=student,trainer&lang=${lang}`
    )
  );
};

export const getStudentProfile = createAsyncThunk(
  "student/getProfile",
  async (_, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token");
      const id = decodeToken(token);

      if (!token || !id) {
        return rejectWithValue("Token or user ID is missing");
      }

      const response = await handleRequest(() =>
        axios.get(`auth/profile/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
      );
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch student profile"
      );
    }
  }
);

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
