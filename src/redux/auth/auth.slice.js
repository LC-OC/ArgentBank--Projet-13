import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./auth.service";

export const userToken = JSON.parse(localStorage.getItem("token"));
export const initialState = {
  userToken: userToken ? userToken : null,
  email: null,
  password: null,
  firstName: null,
  lastName: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
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

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async ({ rejectWithValue }) => {
    try {
      return authService.logout();
    } catch (err) {
      console.log("erreur du côté de la déconnexion");
      return rejectWithValue([], err);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
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
  },
});

export const { resetInfos } = authSlice.actions;
export default authSlice.reducer;
