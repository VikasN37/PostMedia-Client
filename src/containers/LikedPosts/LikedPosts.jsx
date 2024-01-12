import { Box, CircularProgress, Grid } from "@mui/material";
import { useStyles } from "./style";
import PostCard from "../PostCard/PostCard";
import { useGetPostsQuery } from "../../apis/postsApi";

function LikedPosts() {
  const classes = useStyles();
  const { data, isError, isFetching, isSuccess } = useGetPostsQuery();
  if (isFetching || !data) {
    return <CircularProgress />;
  }

  const { posts } = data.data;
  let likedPosts = posts.filter((el) => el.liked === true);
  return (
    <Grid container className={classes.outletContainer}>
      <Box className={classes.cardContainer}>
        {likedPosts.map((post) => (
          <PostCard
            key={post._id}
            location={post.location}
            date={post.date}
            image={post.image}
            caption={post.caption}
            liked={post.liked}
          />
        ))}
      </Box>
    </Grid>
  );
}

export default LikedPosts;
