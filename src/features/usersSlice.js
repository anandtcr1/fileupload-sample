// userSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "https://localhost:7209/api/Customer";

const initialState = {
  users: [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" },
  ],
  employees: [
    { id: 1, name: "Alice Johnson", position: "Developer" },
    { id: 2, name: "Bob Smith", position: "Designer" },
  ],
};

export const saveUser = createAsyncThunk(
  "user/saveUser",
  async (user, { rejectedWithValue }) => {
    try {
      const response = await axios.post(API_URL, user);
    } catch (error) {
      return rejectedWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(saveUser.pending, (state) => {
  //       state.status = "loading";
  //     })
  //     .addCase(saveUser.fulfilled, (state, action));
  // },
});

export const { setUsers, setEmployees } = userSlice.actions;
export default userSlice.reducer;
