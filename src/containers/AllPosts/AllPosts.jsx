import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useStyles } from "./style";
import PostCard from "../PostCard/PostCard";

import { useOutletContext } from "react-router-dom";
import { useGetPostsQuery } from "../../apis/postsApi";

function AllPosts() {
  const classes = useStyles();
  const [searchString] = useOutletContext();
  const { data, isError, isFetching } = useGetPostsQuery();
  if (isError) {
    return (
      <Typography variant="h5" color={"red"}>
        Something went wrong ! Try again.
      </Typography>
    );
  }
  if (isFetching || !data) {
    return <CircularProgress />;
  }

  const { posts } = data.data;

  let resultantPosts = posts;

  if (searchString !== "") {
    resultantPosts = posts.filter((post) =>
      post.location.toUpperCase().startsWith(searchString.toUpperCase())
    );
  }

  return (
    <Grid container className={classes.outletContainer}>
      {posts.length === 0 && (
        <Box width={"80%"} height={"50%"} marginTop={"20%"}>
          <Typography
            fontSize={"clamp(14px, 10px + 1vw, 25px)"}
            textAlign={"center"}
            sx={{ opacity: "0.8" }}
          >
            Start creating post by clicking &quot;Add Posts&quot; in sidebar{" "}
          </Typography>
        </Box>
      )}
      <Box className={classes.cardContainer}>
        {resultantPosts.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </Box>
    </Grid>
  );
}

export default AllPosts;
