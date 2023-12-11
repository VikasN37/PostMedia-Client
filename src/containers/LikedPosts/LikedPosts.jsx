import { Box, Grid } from "@mui/material";
import { useStyles } from "./style";
import PostCard from "../PostCard/PostCard";

function LikedPosts() {
  const classes = useStyles();
  return (
    <Grid container className={classes.outletContainer}>
      <Box className={classes.cardContainer}>
        <PostCard />
      </Box>
      <Box className={classes.cardContainer}>
        <PostCard />
      </Box>
    </Grid>
  );
}

export default LikedPosts;
