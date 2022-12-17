import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./auth.service";

export const userToken = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;
export const initialState = {
  userToken,
  email: null,
  password: null,
  isLoggedIn: false,
  isLoading: false,
  isSuccess: false,
  isError: false,
  isEditUserName: false,
  rememberUser: false,
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userToken, { rejectWithValue }) => {
    try {
      return await authService.login(userToken);
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  return authService.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      state.userToken = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isSuccess = true;
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.rejected]: (state) => {
      state.userToken = null;
      state.isError = true;
    },
    [logoutUser.fulfilled]: (state) => {
      localStorage.removeItem("token");
      localStorage.clear();
      state.userToken = null;
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.rememberUser = false;
    },
  },
});

export default authSlice.reducer;
