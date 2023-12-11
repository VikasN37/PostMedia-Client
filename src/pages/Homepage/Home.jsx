import { Box, Grid, useMediaQuery } from "@mui/material";
import { useStyles } from "./style";
import NavBar from "../../containers/NavBar/NavBar";
import SideBar from "../../containers/SideBar/Sidebar";
import { useState } from "react";
import PostCard from "../../containers/PostCard/PostCard";

function Homepage() {
  const classes = useStyles();
  const down700 = useMediaQuery("(max-width:700px)");
  const [openDrawer, setOpenDrawer] = useState(false);
  console.log(openDrawer, "in homepage");
  return (
    <Grid container className={classes.page}>
      <Grid container item className={classes.navBar}>
        <NavBar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      </Grid>
      <Grid container item className={classes.appLayout}>
        <Grid
          item
          className={openDrawer ? classes.hiddenSideBar : classes.sideBar}
        >
          <SideBar />
        </Grid>
        <Grid
          container
          item
          width={down700 ? "100%" : "65%"}
          className={classes.contentBar}
          alignItems={"center"}
        >
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
      </Grid>
    </Grid>
  );
}

export default Homepage;
