import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTab: 'mission',
  formData: {},
};

export const courseFormSlice = createSlice({
  name: 'courseForm',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetForm: (state) => {
      state.activeTab = 'mission';
      state.formData = {};
    },
  },
});

export const { setActiveTab, updateFormData, resetForm } = courseFormSlice.actions;
export default courseFormSlice.reducer;