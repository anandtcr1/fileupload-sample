// store.js
import { configureStore } from "@reduxjs/toolkit";
import excelReducer from "../features/excelSlice";
import userReducer from "../features/usersSlice";
import formReducer from "../features/formSlice";

const store = configureStore({
  reducer: {
    excel: excelReducer,
    user: userReducer,
    form: formReducer,
  },
});

export default store;
