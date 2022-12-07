import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./auth.service";

const userToken = JSON.parse(localStorage.getItem("token"));
const initialState = {
  userToken: userToken ? userToken : null,
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  isLoading: "",
  isSuccess: "",
  isError: "",
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userToken, { rejectWithValue }) => {
    try {
      return await authService.login(userToken);
    } catch (err) {}
  }
);

export const userProfile = createAsyncThunk(
  "auth/profile",
  async (rejectWithValue) => {
    try {
      return await (
        await authService.getUserProfile()
      ).data.body;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      state.userToken = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.rejected]: (state) => {
      state.userToken = null;
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    },
    [userProfile.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    [userProfile.pending]: (state) => {
      state.isLoading = true;
    },
    [userProfile.rejected]: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    },
  },
});

export default authSlice.reducer;
