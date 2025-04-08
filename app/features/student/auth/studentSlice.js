import { createSlice } from "@reduxjs/toolkit";
import { getStudentProfile } from "./authService";

// Create student slice
const studentSlice = createSlice({
  name: "student",
  initialState: {
    profile: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStudentProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStudentProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(getStudentProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default studentSlice.reducer;
