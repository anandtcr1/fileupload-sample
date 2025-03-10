import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define API endpoint
const API_URL = "https://localhost:7209/api/Customer";

// Async thunk for form submission
export const submitForm = createAsyncThunk(
  "form/submitForm",
  async (formData, { rejectWithValue }) => {
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("gender", formData.gender);
      data.append("country", formData.country);
      data.append("comments", formData.comments);
      data.append("file", formData.file);

      const response = await axios.post(API_URL, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data; // Return the API response data
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to submit form");
    }
  }
);

const initialState = {
  name: "",
  gender: "",
  country: "",
  comments: "",
  file: null,
  status: "idle", // idle | loading | succeeded | failed
  error: null,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    setFile: (state, action) => {
      state.file = action.payload;
    },
    resetForm: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.status = "loading";
      })
      .addCase(submitForm.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log("Form submitted successfully:", action.payload);
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { updateField, setFile, resetForm } = formSlice.actions;
export default formSlice.reducer;
