import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ROUTES } from "../constants";

export const mainApi = createApi({
  reducerPath: "api",
  tagTypes: ["User", "Post"],
  baseQuery: fetchBaseQuery({
    baseUrl: ROUTES.BASE_URL,

    prepareHeaders: (headers, { getState }) => {
      const token = getState().root.auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
