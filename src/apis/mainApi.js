import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
  reducerPath: "api",
  tagTypes: ["User", "Post"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://postmedia-backend.onrender.com/",

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
