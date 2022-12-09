import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./auth.service";

export const userToken = JSON.parse(localStorage.getItem("token"));
export const initialState = {
  userToken: userToken ? userToken : null,
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
  reducers: {
    rememberMe(state, action) {
      state.rememberUser = true;
      state.userToken = action.payload;
    },
    resetInfos(state) {
      state.email = null;
      state.password = null;
      state.firstName = null;
      state.lastName = null;
      state.isLoading = false;
      state.isSuccess = false;
      state.userToken = null;
    },
  },
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
      state.isLoggedIn = false;
    },
  },
});

export const { resetInfos, rememberMe } = authSlice.actions;
export default authSlice.reducer;
