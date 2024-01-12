import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postsApi = createApi({
  reducerPath: "posts",
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
      getPosts: builder.query({
        providesTags: ["Post"],
        query: () => {
          return {
            url: "api/v1/posts",
            method: "GET",
          };
        },
      }),

      addPost: builder.mutation({
        invalidatesTags: ["Post"],
        query: (postData) => {
          return {
            url: "api/vi/posts",
            method: "POST",
            body: postData,
          };
        },
      }),

      deletePost: builder.mutation({
        invalidatesTags: ["Post"],
        query: (id) => {
          return {
            url: `api/v1/posts/${id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});
export const { useGetPostsQuery, useAddPostMutation, useDeletePostMutation } =
  postsApi;
export { postsApi };
