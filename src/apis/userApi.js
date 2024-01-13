import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "users",
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

      logout: builder.mutation({
        query: () => {
          return {
            url: "api/v1/users/logout",
            method: "POST",
          };
        },
      }),

      deleteAccount: builder.mutation({
        query: () => {
          return {
            url: "api/v1/users",
            method: "DELETE",
          };
        },
      }),

      getUser: builder.query({
        providesTags: ["User"],

        query: () => {
          return {
            url: "api/v1/users",
            method: "GET",
          };
        },
      }),

      changePassword: builder.mutation({
        query: (passwordBody) => {
          return {
            url: "api/v1/users/updatePassword",
            body: passwordBody,
            method: "PATCH",
          };
        },
      }),

      updateUser: builder.mutation({
        invalidatesTags: ["User"],
        query: (newBody) => {
          return {
            url: "api/v1/users",
            body: newBody,
            method: "PATCH",
          };
        },
      }),
    };
  },
});
export const {
  useLoginMutation,
  useSignupMutation,
  useGetUserQuery,
  useChangePasswordMutation,
  useUpdateUserMutation,
  useLogoutMutation,
  useDeleteAccountMutation,
} = userApi;
export { userApi };
