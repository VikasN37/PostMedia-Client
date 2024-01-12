import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../src/apis/authSlice";

const rootReducer = combineReducers({
  // key(store name): value(reducer)
  auth: authSlice.reducer,
});

export default rootReducer;
