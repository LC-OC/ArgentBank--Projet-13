import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./user.service";
import { initialState } from "../auth/auth.slice";

export const userProfile = createAsyncThunk(
  "user/profile",
  async (rejectWithValue) => {
    try {
      const res = await userService.getUserProfile();
      return res.data.body;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const userNameEdit = createAsyncThunk(
  "user/editNameUser",
  async (userToken, rejectWithValue) => {
    try {
      return await userService.updateUserName(userToken);
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userNameSave: (state) => {
      state.isEditUserName = true;
    },
    userNameCancel: (state) => {
      state.isEditUserName = false;
    },
  },
  extraReducers: {
    [userProfile.fulfilled]: (state, action) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.isLoading = false;
      state.isSuccess = true;
    },
    [userProfile.pending]: (state) => {
      state.isLoading = true;
    },
    [userProfile.rejected]: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    },
    [userNameEdit.fulfilled]: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.isSuccess = true;
    },
    [userNameEdit.rejected]: (state) => {
      state.isError = true;
    },
  },
});

export const { userNameSave, userNameCancel } = userSlice.actions;
export default userSlice.reducer;
