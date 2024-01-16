import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../apis/authSlice";

const rootReducer = combineReducers({
  // key(store name): value(reducer)
  auth: authSlice.reducer,
});

export default rootReducer;
