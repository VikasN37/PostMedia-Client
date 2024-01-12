import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: "" },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },

    resetToken(state) {
      state.token = "";
    },
  },
});

export const { setToken, resetToken } = authSlice.actions;
export default authSlice;

// export const selectCurrentToken = (state) => state.auth.token;
