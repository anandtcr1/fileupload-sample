// excelSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
};

const excelSlice = createSlice({
  name: "excel",
  initialState,
  reducers: {
    setExcelData: (state, action) => {
      console.log(action.payload);
      state.employees = action.payload;
    },
    clearExcelData: (state) => {
      state.employees = [];
    },
  },
});

export const { setExcelData, clearExcelData } = excelSlice.actions;
export default excelSlice.reducer;
