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
      query: (passwordBody) => ({
        url: "api/v1/users/updatePassword",
        body: passwordBody,
        method: "PATCH",
      }),
    }),

    forgotPassword: builder.mutation({
      query: (email) => ({
        url: "api/v1/users/forgotPassword",
        method: "POST",
        body: { email: email },
      }),
    }),

    resetPassword: builder.mutation({
      query: ({ token, password, confirmPassword }) => ({
        url: `api/v1/users/resetPassword/${token}`,
        body: { password: password, confirmPassword: confirmPassword },
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
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = userApi;
export { userApi };
