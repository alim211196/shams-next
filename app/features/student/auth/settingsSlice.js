import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    authPages: {}, // Stores authentication-related settings
    globalSettings: [], // Stores global settings for the app
  },
  reducers: {
    setAuthPages: (state, action) => {
      state.authPages = action.payload; // Update only authPages
    },
    setGlobalSettings: (state, action) => {
      state.globalSettings = action.payload; // Update only globalSettings
    },
  },
});

export const { setAuthPages, setGlobalSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
