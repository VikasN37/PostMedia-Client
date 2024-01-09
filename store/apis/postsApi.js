import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postsApi = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8080/",
  }),
  endpoints(builder) {
    return {
      getPosts: builder.query({
        query: (user) => {
          return {
            url: "api/v1/posts",
            method: "GET",
          };
        },
      }),
    };
  },
});
export const { useGetPostsQuery } = postsApi;
export { postsApi };
