import { createSlice } from "@reduxjs/toolkit";
import { SliceNames } from "../../../utils/const";

const authSlice = createSlice({
  name: SliceNames.AUTH.toString(),
  initialState: {
    accessToken: localStorage.getItem("accessToken") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
    isAuthenticated: localStorage.getItem("accessToken") ? true : false,
    error: null,
  },
  reducers: {
    loginSuccessful: (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.isAuthenticated = true;
      if (state.accessToken && state.refreshToken) {
        localStorage.setItem("accessToken", state.accessToken);
        localStorage.setItem("refreshToken", state.refreshToken);
      }
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
    getUserDetails: (state, { payload }) => {
      state.isAuthenticated = true;
      console.log(payload);
    },
  },
});

export const { loginSuccessful, setError, getUserDetails } = authSlice.actions;
export default authSlice.reducer;
