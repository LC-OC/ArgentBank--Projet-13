/*import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userProfile } from "./user.service";

const userToken = JSON.parse(localStorage.getItem("token"));

const initialState = {
  userToken: userToken ? userToken : null,
  firstName: "",
  lastName: "",
};

export const profileUser = createAsyncThunk(
  "auth/profile",
  async (userProfile, getState, { rejectWithValue }) => {
    try {
      const token = getState().auth.userToken;
      return await userProfile(userProfile, token);
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    extraReducers: {
      [userProfile.fulfilled]: (state, action) => {
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
      },
      [userProfile.rejected]: (state) => {
        state.firstName = null;
        state.lastName = null;
      },
    },
  },
});

export default userSlice.reducer;*/
