import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useStyles } from "./style";
import PostCard from "../PostCard/PostCard";
import { useGetPostsQuery } from "../../apis/postsApi";
import { useOutletContext } from "react-router-dom";
import { useGetUserQuery } from "../../apis/userApi";

function LikedPosts() {
  const classes = useStyles();
  const [searchString] = useOutletContext();
  const { data, isError, isFetching } = useGetPostsQuery();
  const { data: userData } = useGetUserQuery();
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
  let likedPosts = posts.filter((el) => el.liked === true);

  let resultantPosts = likedPosts;

  if (searchString !== "") {
    resultantPosts = likedPosts.filter((post) =>
      post.location.toUpperCase().startsWith(searchString.toUpperCase())
    );
  }

  return (
    <Grid container className={classes.outletContainer}>
      {userData.data.user.likedPosts === 0 && (
        <Box width={"80%"} height={"50%"} marginTop={"20%"}>
          <Typography
            fontSize={"clamp(14px, 10px + 1vw, 25px)"}
            textAlign={"center"}
            sx={{ opacity: "0.8" }}
          >
            No liked Posts, start creating or liking posts.
          </Typography>
        </Box>
      )}
      <Box className={classes.cardContainer}>
        {resultantPosts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </Box>
    </Grid>
  );
}

export default LikedPosts;
