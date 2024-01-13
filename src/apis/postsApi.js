import { mainApi } from "./mainApi";

const postsApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      providesTags: ["Post"],
      query: () => ({
        url: "api/v1/posts",
        method: "GET",
      }),
    }),

    addPost: builder.mutation({
      invalidatesTags: ["Post", "User"],
      query: (postData) => ({
        url: "api/v1/posts",
        method: "POST",
        body: postData,
      }),
    }),

    deletePost: builder.mutation({
      invalidatesTags: ["Post", "User"],
      query: (id) => ({
        url: `api/v1/posts/${id}`,
        method: "DELETE",
      }),
    }),

    updatePost: builder.mutation({
      invalidatesTags: ["Post", "User"],
      query: ({ id, data }) => ({
        url: `api/v1/posts/${id}`,
        body: { liked: data },
        method: "PATCH",
      }),
    }),
  }),
});
export const {
  useGetPostsQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} = postsApi;
export { postsApi };
