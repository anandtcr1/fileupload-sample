// excelSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  excelData: [],
};

const excelSlice = createSlice({
  name: "excel",
  initialState,
  reducers: {
    setExcelData: (state, action) => {
      state.excelData = action.payload;
    },
    clearExcelData: (state) => {
      state.excelData = [];
    },
  },
});

export const { setExcelData, clearExcelData } = excelSlice.actions;
export default excelSlice.reducer;
