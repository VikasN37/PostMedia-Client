import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },

    logOut(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setToken, logOut } = authSlice.actions;
export default authSlice.reducer;

export const currentUserSelector = (state) => state.auth.user;
export const currentTokenSelector = (state) => state.auth.token;
