import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postsApi } from "./apis/postsApi";
import { userApi } from "./apis/userApi";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(postsApi.middleware)
      .concat(userApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useGetPostsQuery } from "./apis/postsApi";
export { useLoginMutation, useSignupMutation } from "./apis/userApi";
