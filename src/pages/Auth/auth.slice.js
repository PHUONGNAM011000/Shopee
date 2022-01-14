import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authApi from "../../api/auth.api";
import LocalStorage from "../../constants/LocalStorage";
import { payloadCreator } from "../../utils/helper";

export const register = createAsyncThunk(
  "auth/register",
  payloadCreator(authApi.register)
);

const auth = createSlice({
  name: "auth",
  initialState: { profiles: localStorage.getItem(LocalStorage.user) || {} },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.profiles = action.payload.data;
      localStorage.setItem(LocalStorage.user, JSON.stringify(state.profiles));
    },
  },
});

const authReducer = auth.reducer;
export default authReducer;
