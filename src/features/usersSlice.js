// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

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
});

export const { setUsers, setEmployees } = userSlice.actions;
export default userSlice.reducer;
