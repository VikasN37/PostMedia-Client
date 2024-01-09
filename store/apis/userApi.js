import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8080/",
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.token;
    //   // If we have a token set in state, let's assume that we should be passing it.
    //   if (token) {
    //     headers.set("authorization", `Bearer ${token}`);
    //   }

    //   return headers;
    // },
  }),
  endpoints(builder) {
    return {
      signup: builder.mutation({
        query: (userBody) => {
          return {
            url: "api/v1/users/signup",
            method: "POST",
            body: userBody,
          };
        },
      }),

      login: builder.mutation({
        query: (loginBody) => {
          return {
            url: "api/v1/users/login",
            method: "POST",
            body: loginBody,
          };
        },
      }),
    };
  },
});
export const { useLoginMutation, useSignupMutation } = userApi;
export { userApi };
