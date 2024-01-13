import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },

    resetToken(state) {
      state.token = "";
      state.user = null;
    },
  },
});

export const { setToken, resetToken } = authSlice.actions;
export default authSlice;

// export const selectCurrentToken = (state) => state.auth.token;
