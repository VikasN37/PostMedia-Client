import { mainApi } from "./mainApi";

const userApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (userBody) => ({
        url: "api/v1/users/signup",
        method: "POST",
        body: userBody,
      }),
    }),

    login: builder.mutation({
      query: (loginBody) => ({
        url: "api/v1/users/login",
        method: "POST",
        body: loginBody,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: "api/v1/users/logout",
        method: "POST",
      }),
    }),

    deleteAccount: builder.mutation({
      query: () => ({
        url: "api/v1/users",
        method: "DELETE",
      }),
    }),

    getUser: builder.query({
      providesTags: ["User"],
      query: () => ({
        url: "api/v1/users",
        method: "GET",
      }),
    }),

    changePassword: builder.mutation({
      // invalidatesTags: ["User"],
      query: (passwordBody) => ({
        url: "api/v1/users/updatePassword",
        body: passwordBody,
        method: "PATCH",
      }),
    }),

    updateUser: builder.mutation({
      invalidatesTags: ["User"],
      query: (newBody) => ({
        url: "api/v1/users",
        body: newBody,
        method: "PATCH",
      }),
    }),
  }),
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
