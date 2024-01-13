import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "../src/apis/postsApi";
import { userApi } from "../src/apis/userApi";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    root: persistedReducer,
    devTools: true,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(postsApi.middleware)
      .concat(userApi.middleware);
  },
});
export const persistor = persistStore(store);
// setupListeners(store.dispatch);

export default store;
export {
  useGetPostsQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} from "../src/apis/postsApi";

export {
  useLoginMutation,
  useSignupMutation,
  useGetUserQuery,
  useChangePasswordMutation,
  useUpdateUserMutation,
  useLogoutMutation,
  useDeleteAccountMutation,
} from "../src/apis/userApi";
