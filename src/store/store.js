// store.js
import { configureStore } from "@reduxjs/toolkit";
import excelReducer from "../features/excelSlice";
import userReducer from "../features/usersSlice";

const store = configureStore({
  reducer: {
    excel: excelReducer,
    user: userReducer,
  },
});

export default store;
