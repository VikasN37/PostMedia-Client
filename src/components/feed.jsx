import { Box } from "@mui/material";

import Post from "./post";
import { useEffect, useState } from "react";
import axios from "axios";

function Feed() {
  const [posts, setPosts] = useState([]);




  const getPosts = async () => {
    const res = await axios.get("http://localhost:8080/posts");
    setPosts(res.data);

  };

  async function handleDelete(id) {
    await axios.delete(`http://localhost:8080/posts/delete/${id}`);
    setPosts(posts.filter(auto => auto._id !== id));
  }



  useEffect(() => {
    getPosts();
  }, [posts]);



  return (
    <>
      <Box flex={4} p={2}>
        {posts.map((post, index) => (
          <Post
            {...post}
            handleDelete={handleDelete}
          // handleEdit={handleEdit}
          ></Post>
        ))}
      </Box>
    </>
  );
}

export default Feed;
