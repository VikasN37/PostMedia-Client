import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useStyles } from "./style";
import PostCard from "../PostCard/PostCard";
import { useGetPostsQuery } from "../../../store/store";

function AllPosts() {
  const classes = useStyles();
  const { data, isError, isFetching, isSuccess } = useGetPostsQuery();
  if (isFetching || !data) {
    return <CircularProgress />;
  }

  const { posts } = data.data;
  console.log(posts);
  return (
    <Grid container className={classes.outletContainer}>
      {posts.length === 0 && (
        <Box width={"80%"} height={"50%"} marginTop={"20%"}>
          <Typography
            fontSize={"clamp(14px, 10px + 1vw, 25px)"}
            textAlign={"center"}
            align="middle"
            sx={{ opacity: "0.8" }}
          >
            Start creating post by clicking &quot;Add Posts&quot; in sidebar{" "}
          </Typography>
        </Box>
      )}
      <Box className={classes.cardContainer}>
        {posts.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </Box>
    </Grid>
  );
}

export default AllPosts;
