import { Box, Grid } from "@mui/material";
import { useStyles } from "./style";
import PostCard from "../PostCard/PostCard";
import { useGetPostsQuery } from "../../../store";

function AllPosts() {
  const { data, isF } = useGetPostsQuery();

  // console.log(data, isFetching, error);
  const classes = useStyles();
  return (
    <Grid container className={classes.outletContainer}>
      <Box className={classes.cardContainer}>
        <PostCard />
      </Box>
      <Box className={classes.cardContainer}>
        <PostCard />
      </Box>
      <Box className={classes.cardContainer}>
        <PostCard />
      </Box>
      <Box className={classes.cardContainer}>
        <PostCard />
      </Box>
    </Grid>
  );
}

export default AllPosts;
