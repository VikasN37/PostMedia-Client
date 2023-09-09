import {

  Box,

} from "@mui/material";

import Post from "./post";
import { posts } from "../data";



function Feed() {

  return (
    <>
      <Box flex={4} p={2}>
        {
          posts.map(auto =>

            <Post title={auto.title} date={auto.date} image={auto.image} description={auto.description} ></Post>)

        }
      </Box>
    </>
  );
}

export default Feed;
