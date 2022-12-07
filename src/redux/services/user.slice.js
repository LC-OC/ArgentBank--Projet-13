import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./user.service";
import { initialState } from "./auth.slice";

export const userProfile = createAsyncThunk(
  "auth/profile",
  async (rejectWithValue) => {
    try {
      return await (
        await userService.getUserProfile()
      ).data.body;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,

  extraReducers: {
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

export default userSlice.reducer;
