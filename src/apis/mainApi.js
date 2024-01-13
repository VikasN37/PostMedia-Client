import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
  reducerPath: "api",
  tagTypes: ["User", "Post"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8080/",

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
